import { Heart, MessagesSquare, Users } from 'lucide-react'
import { RemoteBadge } from '@/components/remote-badge'
import { Section, SectionHeading } from '@/components/section'
import { Button } from '@/components/ui/button'
import { communityItems, site } from '@/lib/site-data'

const icons = {
  contributing: Users,
  bugs: MessagesSquare,
  supporting: Heart,
} as const

export function Community() {
  const [contribute, bugs, supporting] = communityItems

  return (
    <Section id="community" ruled>
      <SectionHeading
        index="06"
        kicker="社区"
        title="与维护者和使用者一起完善它"
        description="Web-Check 始终保持 100% 免费且开源。贡献代码、反馈问题或分担托管成本，都能让更多人免费使用。"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
        {[contribute, bugs, supporting].map((item) => {
          const Icon = icons[item.id as keyof typeof icons] ?? Users
          return (
            <article key={item.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <Icon className="text-primary size-4.5 shrink-0" strokeWidth={1.75} />
                <h3 className="font-heading text-lg font-medium tracking-tight">{item.title}</h3>
              </div>
              <p className="text-muted-foreground flex-1 text-sm leading-relaxed">{item.description}</p>

              <ul className="flex flex-col gap-1.5">
                {item.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-1">
                {item.badge ? (
                  <RemoteBadge
                    src={item.badge.image}
                    alt={item.badge.alt}
                    href={item.href}
                    height={26}
                  />
                ) : (
                  <Button asChild variant="outline" size="sm" className="h-9 rounded-lg">
                    <a href={item.href} target="_blank" rel="noreferrer noopener">
                      {item.action}
                    </a>
                  </Button>
                )}
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-14 grid gap-8 border-t pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <h3 className="font-heading mb-1.5 text-xl font-medium tracking-tight">贡献者</h3>
          <p className="text-muted-foreground mb-5 text-sm">
            感谢以下为 Web-Check 做出贡献的用户。
          </p>
          <RemoteBadge
            src="https://readme-contribs.as93.net/contributors/lissy93/web-check?perRow=12&shape=squircle"
            alt="Web-Check 贡献者"
            href={site.contributorsUrl}
            height={150}
          />
        </div>

        <div>
          <h3 className="font-heading mb-1.5 text-xl font-medium tracking-tight">赞助者</h3>
          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            感谢这些在 GitHub 上赞助维护者的朋友，他们的支持帮助项目持续免费开放。
          </p>
          <RemoteBadge
            src="https://readme-contribs.as93.net/sponsors/lissy93?perRow=12&shape=squircle"
            alt="维护者赞助者"
            href={site.sponsorUrl}
            height={150}
          />
        </div>
      </div>
    </Section>
  )
}
