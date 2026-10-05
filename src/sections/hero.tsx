import { GithubIcon } from '@/components/github-icon'
import { Button } from '@/components/ui/button'
import { deployOptions, site, totalChecks } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40 sm:opacity-70" />
      <div className="bg-primary/8 pointer-events-none absolute inset-x-0 top-0 h-px" />

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 px-4 pt-16 pb-16 sm:px-6 sm:pt-20 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-8 lg:pt-24 lg:pb-24">
        <div className="enter flex flex-col items-start gap-7">
          <a
            href={site.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="border-border hover:bg-accent/60 inline-flex items-center gap-2 rounded-full border py-1 pr-2.5 pl-2.5 text-sm transition-colors"
          >
            <span className="relative flex size-2">
              <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-70" />
              <span className="bg-primary relative inline-flex size-2 rounded-full" />
            </span>
            <span className="text-muted-foreground">在线演示</span>
            <span className="font-medium">web-check.xyz</span>
          </a>

          <h1 className="enter enter-1 font-heading text-4xl leading-[1.05] font-semibold tracking-tighter text-balance sm:text-5xl lg:text-[3.75rem]">
            看清任意网站的
            <br />
            全部底牌
          </h1>

          <p className="enter enter-2 text-muted-foreground max-w-[46ch] text-lg leading-relaxed text-pretty">
            对任意网站进行全面、按需的开源情报收集：发现攻击向量、分析服务器架构、查看安全配置与技术栈。
          </p>

          <div className="enter enter-3 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-11 rounded-lg px-5 text-[0.95rem]">
              <a href={site.demo} target="_blank" rel="noreferrer noopener">
                打开在线演示
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 rounded-lg px-5 text-[0.95rem]">
              <a href={site.repo} target="_blank" rel="noreferrer noopener">
                <GithubIcon />
                查看源代码
              </a>
            </Button>
          </div>
        </div>

        <div className="enter enter-4 relative">
          <div className="bg-card overflow-hidden rounded-xl border shadow-[0_24px_60px_-32px_oklch(0.19_0.008_265/0.35)] dark:shadow-[0_24px_60px_-32px_oklch(0_0_0/0.7)]">
            <div className="bg-muted/60 flex items-center gap-2 border-b px-4 py-2.5">
              <span className="bg-destructive/70 size-2.5 rounded-full" />
              <span className="bg-chart-3/80 size-2.5 rounded-full" />
              <span className="bg-primary/70 size-2.5 rounded-full" />
              <span className="text-muted-foreground ml-2 font-mono text-xs">web-check.as93.net</span>
            </div>
            <div className="bg-background relative h-[22rem] overflow-hidden sm:h-[26rem] lg:h-[30rem]">
              <img
                src="/screenshots/dashboard.webp"
                alt="Web-Check 实际运行界面：服务器位置、SSL 证书、DNS 记录、技术栈等检查结果"
                width={1475}
                height={2200}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-x-0 top-0 w-full object-cover object-top"
              />
              <div className="from-background/85 pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t to-transparent" />
            </div>

            <dl className="bg-muted/60 grid grid-cols-3 divide-x divide-border border-t">
              {[
                { value: String(totalChecks), label: '项内置检查' },
                { value: String(deployOptions.length), label: '种部署方式' },
                { value: 'MIT', label: '开源许可' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-0.5 px-2 py-3">
                  <dt className="order-2 text-muted-foreground text-[0.7rem]">{stat.label}</dt>
                  <dd className="order-1 text-primary font-mono text-sm font-semibold tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
