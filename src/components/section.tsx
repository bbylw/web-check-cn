import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  /** 小节序号，如 "02"。用于左侧标尺，而非 eyebrow 标签 */
  index?: string
  /** 小节英文/分类标签，右上角，与序号同行 */
  kicker?: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function SectionHeading({ index, kicker, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <div className="flex max-w-3xl flex-col gap-4">
        <div className="flex items-center gap-3">
          {index ? (
            <span className="text-primary font-mono text-xs font-medium tabular-nums">
              {index}
            </span>
          ) : null}
          {index ? <span className="bg-border h-px w-6" /> : null}
          {kicker ? (
            <span className="text-muted-foreground font-mono text-xs">{kicker}</span>
          ) : null}
        </div>

        <h2 className="font-heading text-3xl leading-[1.15] font-semibold tracking-tighter text-balance sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>

        {description ? (
          <p className="text-muted-foreground max-w-[62ch] text-base leading-relaxed text-pretty sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  /** 细分隔线区块背景 */
  ruled?: boolean
}

export function Section({ id, children, className, ruled }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 py-16 sm:py-24 lg:py-28',
        ruled && 'bg-muted/40 border-y',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
