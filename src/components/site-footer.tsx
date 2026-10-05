import { GithubIcon } from '@/components/github-icon'
import { Separator } from '@/components/ui/separator'
import { navItems, site } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-border bg-muted/40 border-t">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <img src="/logo.png" alt="" width={24} height={24} className="rounded" />
              {site.name}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{site.tagline}</p>
            <p className="text-muted-foreground text-xs">感谢你的访问</p>
          </div>

          <nav aria-label="页脚导航" className="grid grid-cols-2 content-start gap-x-8 gap-y-2 text-sm">
            <h2 className="sr-only">页面区块</h2>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <h2 className="sr-only">相关链接</h2>
            <a
              href={site.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              web-check.xyz
            </a>
            <a
              href={site.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={site.mirror}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Codeberg 镜像
            </a>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="text-muted-foreground text-xs">
          <p>
            ©{' '}
            <a
              href={site.authorUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="link-mark"
            >
              {site.author}
            </a>{' '}
            2023 - 2026 · 基于 MIT 许可证发布
          </p>
        </div>
      </div>
    </footer>
  )
}
