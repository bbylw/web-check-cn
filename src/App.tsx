import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { About } from '@/sections/about'
import { Community } from '@/sections/community'
import { Deploy } from '@/sections/deploy'
import { Features } from '@/sections/features'
import { Hero } from '@/sections/hero'
import { Setup } from '@/sections/setup'
import { StatusStrip } from '@/sections/status-strip'
import { Try } from '@/sections/try'

export default function App() {
  return (
    <div className="bg-background flex min-h-[100dvh] flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:bg-primary focus:text-primary-foreground focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        跳到主要内容
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <StatusStrip />
        <About />
        <Features />
        <Try />
        <Deploy />
        <Setup />
        <Community />
      </main>
      <SiteFooter />
    </div>
  )
}
