import { Bug, Server, ShieldCheck } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { site } from '@/lib/site-data'

const valueProps = [
  {
    icon: Bug,
    title: '发现潜在的攻击向量',
    description: '梳理开放端口、可疑服务与缺失的安全响应头，在被利用之前先发现问题。',
  },
  {
    icon: Server,
    title: '分析服务器架构',
    description: '识别反向代理、CDN、托管供应商与运行时，让基础设施不再是一个黑盒。',
  },
  {
    icon: ShieldCheck,
    title: '查看安全配置',
    description: '集中查看 SSL/TLS 链、CORS、Cookie 属性与威胁扫描结果，一屏掌握安全基线。',
  },
]

const quickLinks = [
  { label: '在线演示', href: site.demo },
  { label: '完整检查项清单', href: site.aboutPage },
  { label: 'Codeberg 镜像', href: site.mirror },
]

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            index="01"
            kicker="关于"
            title="深入了解任意网站的内部运作"
            description="我们的目标是帮助你轻松理解、优化并保护自己的网站。Web-Check 把散落在十几个外部数据源里的判断，收敛成一份可读的结构化报告。"
          />

          <p className="mt-10 text-sm leading-loose">
            {quickLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? <span className="text-border mx-2.5">/</span> : null}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-mark font-medium"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </div>

        <ol className="border-border border-t">
          {valueProps.map((item, i) => (
            <li key={item.title} className="border-border group border-b">
              <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 py-7 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-x-8 sm:py-9">
                <span className="text-primary font-mono text-xs tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex flex-col gap-2.5">
                  <h3 className="font-heading flex items-center gap-2.5 text-xl font-medium tracking-tight sm:text-2xl">
                    <item.icon className="text-primary size-5 shrink-0" strokeWidth={1.75} />
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground max-w-[52ch] leading-relaxed">{item.description}</p>
                </div>

                <span className="text-muted-foreground/50 font-mono text-xs tabular-nums sm:text-right">
                  {String(i + 1).padStart(2, '0')} / {String(valueProps.length).padStart(2, '0')}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
