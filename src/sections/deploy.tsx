import { siDocker, siGit, siHostinger, siNetlify, siRender, siVercel } from 'simple-icons'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/section'
import { Button } from '@/components/ui/button'
import { deployOptions } from '@/lib/site-data'

const brandIcons: Record<string, { path: string }> = {
  netlify: siNetlify,
  vercel: siVercel,
  hostinger: siHostinger,
  render: siRender,
  docker: siDocker,
  git: siGit,
}

/** 内联品牌图标：无 CDN 依赖，currentColor 自动适配明暗主题。 */
function BrandMark({ slug }: { slug: string }) {
  const icon = brandIcons[slug]
  if (!icon) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-muted-foreground size-[18px] shrink-0"
    >
      <path d={icon.path} />
    </svg>
  )
}

export function Deploy() {
  return (
    <Section id="deploy">
      <SectionHeading
        title="六种方式，挑一种开始部署"
        description="Web-Check 无需任何配置即可运行，多数平台支持一键完成。"
      />

      <ol className="mt-12 border-t">
        {deployOptions.map((option, i) => {
          const external = option.href.startsWith('http')
          return (
            <li key={option.id} className="border-border group border-b">
              <Reveal delay={i * 60}>
                <div className="grid gap-4 py-6 sm:grid-cols-[3.5rem_1fr_auto] sm:items-center sm:gap-x-8 lg:py-7">
                <span className="text-muted-foreground font-mono text-xs tabular-nums">
                  {String(option.index).padStart(2, '0')}
                </span>

                <div className="flex min-w-0 flex-col gap-2.5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <BrandMark slug={option.brand} />
                    <h3 className="font-heading text-lg font-medium tracking-tight sm:text-xl">
                      {option.name}
                    </h3>
                    <span className="text-muted-foreground font-mono text-xs">{option.platform}</span>
                  </div>
                  <p className="text-muted-foreground max-w-[58ch] text-sm leading-relaxed">
                    {option.description}
                  </p>

                  {option.command ? (
                    <code className="bg-muted text-foreground mt-1 inline-flex w-fit max-w-full items-center overflow-x-auto rounded-md px-2.5 py-1.5 font-mono text-[0.7rem] whitespace-nowrap">
                      {option.command}
                    </code>
                  ) : null}

                  {option.note ? (
                    <p className="text-muted-foreground text-xs">{option.note}</p>
                  ) : null}
                </div>

                <div className="sm:justify-self-end">
                  {external ? (
                    <Button asChild size="sm" className="h-9 rounded-lg px-3.5">
                      <a href={option.href} target="_blank" rel="noreferrer noopener">
                        {option.action}
                      </a>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" size="sm" className="h-9 rounded-lg px-3.5">
                      <a href={option.href}>{option.action}</a>
                    </Button>
                  )}
                </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="text-muted-foreground">Docker 镜像同时发布在</span>
        {[
          { label: 'DockerHub', href: 'https://hub.docker.com/r/lissy93/web-check' },
          { label: 'GHCR', href: 'https://github.com/Lissy93/web-check/pkgs/container/web-check' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="link-mark font-medium"
          >
            {item.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
