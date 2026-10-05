import { RemoteBadge } from '@/components/remote-badge'
import { statusBadges } from '@/lib/site-data'

/** 构建与部署状态条：位于 hero 之下，不占用 hero 的文本预算。 */
export function StatusStrip() {
  return (
    <section aria-label="构建与部署状态" className="bg-muted/40 border-b">
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        <span className="text-muted-foreground font-mono text-xs">构建与部署</span>
        <span className="bg-border hidden h-4 w-px sm:block" />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {statusBadges.map((badge) => (
            <RemoteBadge key={badge.label} src={badge.image} alt={badge.label} href={badge.href} />
          ))}
        </div>
      </div>
    </section>
  )
}
