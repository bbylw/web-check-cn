import type { ReactNode } from 'react'
import { useInView } from '@/lib/use-in-view'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={cn(
        'reveal flex max-w-3xl flex-col gap-4',
        inView && 'reveal-shown',
        className,
      )}
    >
      <h2 className="font-heading text-3xl leading-[1.15] font-semibold tracking-tighter text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>

      {description ? (
        <p className="text-muted-foreground max-w-[62ch] text-base leading-relaxed text-pretty sm:text-lg">
          {description}
        </p>
      ) : null}
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
