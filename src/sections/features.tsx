import { ArrowUpRight, Check, Layers, Server, ShieldCheck, TrendingUp } from 'lucide-react'
import { RemoteImage } from '@/components/remote-image'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { featureGroups, screenshots, site, totalChecks } from '@/lib/site-data'

const icons = {
  server: Server,
  shield: ShieldCheck,
  layers: Layers,
  'trending-up': TrendingUp,
} as const

type GroupIndex = 0 | 1 | 2 | 3

/**
 * 非对称 bento：4 个分类恰好 4 格，跨度 5/7/7/5 交替，
 * 内部列表列数随宽度变化，并有两格带品牌色块与纹理差异。
 */
const cells: Record<
  GroupIndex,
  { span: string; list: string; tone: string; detail: string }
> = {
  0: {
    span: 'lg:col-span-5',
    list: 'sm:grid-cols-2',
    tone: 'bg-card',
    detail: '',
  },
  1: {
    span: 'lg:col-span-7',
    list: 'sm:grid-cols-2 lg:grid-cols-3',
    tone: 'bg-accent/35',
    detail: '',
  },
  2: {
    span: 'lg:col-span-7',
    list: 'sm:grid-cols-2 lg:grid-cols-3',
    tone: 'bg-card',
    detail: 'hatch',
  },
  3: {
    span: 'lg:col-span-5',
    list: 'sm:grid-cols-2',
    tone: 'bg-primary/[0.07]',
    detail: '',
  },
}

export function Features() {
  const [primaryShot, secondaryShot] = screenshots

  return (
    <Section id="features" ruled>
      <SectionHeading
        title="按需收集，输出结构化情报"
        description="每个检查项都可单独开关与排序。完整清单及各项检查的具体作用，见下方与官方检查项说明页。"
      />

      <Tabs defaultValue="groups" className="mt-12">
        <TabsList className="rounded-lg">
          <TabsTrigger value="groups">检查项分类</TabsTrigger>
          <TabsTrigger value="screenshots">界面截图</TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="mt-10">
          <div className="grid items-start gap-4 lg:grid-cols-12">
            {featureGroups.map((group, i) => {
              const index = i as GroupIndex
              const Icon = icons[group.icon as keyof typeof icons] ?? Layers
              const cell = cells[index]
              return (
                <Reveal key={group.category} className={`${cell.span} h-full`} delay={i * 70}>
                  <article
                    className={`${cell.tone} relative h-full overflow-hidden rounded-xl border p-6 sm:p-7`}
                  >
                  {cell.detail === 'hatch' ? (
                    <div className="hatch pointer-events-none absolute inset-y-0 right-0 w-28 opacity-50" />
                  ) : null}

                  <div className="relative flex items-center gap-3">
                    <span className="bg-background text-primary inline-flex size-9 shrink-0 items-center justify-center rounded-lg border">
                      <Icon className="size-4.5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-heading text-lg font-medium tracking-tight">{group.category}</h3>
                    <span className="text-muted-foreground ml-auto font-mono text-xs tabular-nums">
                      {group.items.length}
                    </span>
                  </div>

                  <ul className={`relative mt-5 grid gap-x-8 gap-y-2.5 ${cell.list}`}>
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <Check className="text-primary mt-1 size-3.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  </article>
                </Reveal>
              )
            })}

            {/* 收尾格：整行 CTA，避免留白格 */}
            <a
              href={site.aboutPage}
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 flex flex-col justify-between gap-6 rounded-xl p-6 transition-colors sm:p-7 lg:col-span-12 lg:flex-row lg:items-center"
            >
              <span className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
                {totalChecks} 项检查的完整说明与输出格式
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                查看完整清单
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </TabsContent>

        <TabsContent value="screenshots" className="mt-10">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
            <a
              href={primaryShot.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-card overflow-hidden rounded-xl border transition-shadow hover:shadow-lg"
            >
              <RemoteImage
                src={primaryShot.src}
                alt={primaryShot.alt}
                className="h-[30rem] w-full border-b object-cover object-top"
                fallbackLabel="截图暂不可用，点击查看原图"
              />
              <div className="text-muted-foreground group-hover:text-foreground flex items-center px-4 py-3 text-sm transition-colors">
                {primaryShot.alt}
              </div>
            </a>

            <div className="flex flex-col gap-6">
              <a
                href={secondaryShot.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group bg-card overflow-hidden rounded-xl border transition-shadow hover:shadow-lg"
              >
                <RemoteImage
                  src={secondaryShot.src}
                  alt={secondaryShot.alt}
                  className="h-64 w-full border-b object-cover object-top"
                  fallbackLabel="截图暂不可用，点击查看原图"
                />
                <div className="text-muted-foreground group-hover:text-foreground flex items-center px-4 py-3 text-sm transition-colors">
                  {secondaryShot.alt}
                </div>
              </a>

              <div className="hatch bg-accent/30 flex flex-1 flex-col justify-center gap-3 rounded-xl border p-6">
                <p className="text-2xl leading-snug font-medium tracking-tight">
                  按需勾选，只跑你要的检查
                </p>
                <p className="text-muted-foreground max-w-[38ch] text-sm leading-relaxed">
                  不需要的检查直接关掉，结果页只保留与你相关的信息，导出即可交付。
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  )
}
