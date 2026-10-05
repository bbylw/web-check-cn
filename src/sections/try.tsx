import { useMemo, useRef, useState, type FormEvent } from 'react'
import { Check, Globe, RotateCcw, Search } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Button } from '@/components/ui/button'
import { featureGroups, site, totalChecks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const examples = ['github.com', 'vercel.com', 'wikipedia.org']

type Parsed = { host: string } | { error: string }

function parseInput(raw: string): Parsed {
  const trimmed = raw.trim().toLowerCase()
  if (!trimmed) return { error: '请输入一个域名或网址' }

  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`
  try {
    const url = new URL(withScheme)
    if (!url.hostname || !url.hostname.includes('.')) return { error: '看起来不像一个有效的域名，请检查后重试' }
    return { host: url.hostname }
  } catch {
    return { error: '无法解析这个地址，请检查后重试' }
  }
}

export function Try() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const plan = useMemo(() => {
    if (!submitted) return null
    return featureGroups.map((group) => ({
      category: group.category,
      total: group.items.length,
      sample: group.items.slice(0, 3),
      rest: group.items.length - Math.min(group.items.length, 3),
    }))
  }, [submitted])

  function submitHost(host: string) {
    setError(null)
    setSubmitted(host)
    requestAnimationFrame(() => resultRef.current?.focus({ preventScroll: true }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = parseInput(value)
    if ('error' in parsed) {
      setError(parsed.error)
      setSubmitted(null)
      return
    }
    setValue(parsed.host)
    submitHost(parsed.host)
  }

  function reset() {
    setValue('')
    setSubmitted(null)
    setError(null)
  }

  return (
    <Section id="try">
      <SectionHeading
        title="先看看它会查什么"
        description="输入任意域名，这里会列出 Web-Check 将为它运行的检查计划。真实扫描请前往官方在线演示。"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <label htmlFor="try-url" className="text-sm font-medium">
              域名或网址
            </label>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <div className="relative flex-1">
                <Globe className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <input
                  id="try-url"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="例如 github.com"
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value)
                    if (error) setError(null)
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'try-error' : 'try-hint'}
                  className={cn(
                    'bg-card h-11 w-full rounded-lg border pr-3 pl-9 font-mono text-sm outline-none transition-colors placeholder:font-sans',
                    'focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px]',
                    error && 'border-destructive focus-visible:border-destructive',
                  )}
                />
              </div>
              <Button type="submit" className="h-11 shrink-0 rounded-lg px-5">
                <Search />
                生成检查计划
              </Button>
            </div>
            {error ? (
              <p id="try-error" role="alert" className="text-destructive text-sm">
                {error}
              </p>
            ) : (
              <p id="try-hint" className="text-muted-foreground text-xs">
                仅在本地解析域名，不会发起任何扫描请求。
              </p>
            )}
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs">试试：</span>
            {examples.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => {
                  setValue(domain)
                  submitHost(domain)
                }}
                className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-2.5 py-1 font-mono text-xs transition-colors"
              >
                {domain}
              </button>
            ))}
            {submitted ? (
              <button
                type="button"
                onClick={reset}
                className="text-muted-foreground hover:text-foreground ml-auto inline-flex items-center gap-1 text-xs transition-colors"
              >
                <RotateCcw className="size-3.5" />
                清空
              </button>
            ) : null}
          </div>

          {submitted ? (
            <div className="bg-accent/40 mt-8 rounded-xl border p-5">
              <p className="text-sm leading-relaxed">
                计划已就绪。真实扫描需要后端执行环境，
                <a
                  href={site.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-mark font-medium"
                >
                  前往在线演示运行 {submitted}
                </a>
                。
              </p>
            </div>
          ) : null}
        </div>

        <div
          ref={resultRef}
          tabIndex={-1}
          aria-live="polite"
          aria-label={submitted ? `${submitted} 的检查计划` : '检查计划预览'}
          className="bg-card h-fit rounded-xl border p-6 outline-none sm:p-7"
        >
          {!plan || !submitted ? (
            <div className="text-muted-foreground flex min-h-64 flex-col items-center justify-center gap-3 py-10 text-center">
              <Search className="size-6 opacity-50" />
              <p className="max-w-[34ch] text-sm leading-relaxed">
                输入域名后，这里会展示 {featureGroups.length} 个分类、{totalChecks} 项检查的执行计划。
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b pb-4">
                <p className="font-mono text-sm font-medium break-all">{submitted}</p>
                <p className="text-muted-foreground font-mono text-xs tabular-nums">
                  共 {totalChecks} 项检查
                </p>
              </div>

              {plan.map((group) => (
                <div key={group.category}>
                  <div className="mb-2.5 flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-base font-medium tracking-tight">
                      {group.category}
                    </h3>
                    <span className="text-muted-foreground font-mono text-xs tabular-nums">
                      {group.total} 项
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {group.sample.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check className="text-primary mt-0.5 size-3.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                    {group.rest > 0 ? (
                      <li className="text-muted-foreground pl-4 font-mono text-xs">
                        + 另外 {group.rest} 项
                      </li>
                    ) : null}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
