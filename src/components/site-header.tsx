import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navItems, site } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sentinel = document.createElement('div')
    sentinel.className = 'absolute top-0 h-px w-full'
    document.body.prepend(sentinel)

    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry?.isIntersecting))
    observer.observe(sentinel)
    return () => {
      observer.disconnect()
      sentinel.remove()
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-colors duration-200',
        scrolled
          ? 'bg-background/88 border-border border-b backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2.5 font-semibold">
          <img src="/logo.png" alt="" width={26} height={26} className="rounded-md" />
          <span className="font-heading text-base tracking-tight">{site.name}</span>
        </a>

        <nav aria-label="页面导航" className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'rounded-md px-2.5 py-1.5 text-sm transition-colors',
                active === item.id
                  ? 'bg-secondary text-secondary-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="h-9 rounded-lg px-3">
            <a href={site.repo} target="_blank" rel="noreferrer noopener">
              <GithubIcon />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="打开导航菜单">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src="/logo.png" alt="" width={22} height={22} className="rounded" />
                  {site.name}
                </SheetTitle>
                <SheetDescription>{site.tagline}</SheetDescription>
              </SheetHeader>
              <nav aria-label="页面导航" className="flex flex-col gap-0.5 px-4 pb-6">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="hover:bg-secondary hover:text-secondary-foreground rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
