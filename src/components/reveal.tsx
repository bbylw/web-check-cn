import type { ReactNode } from 'react'
import { useInView } from '@/lib/use-in-view'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  /** 级联延迟（毫秒），用于同组元素错峰入场 */
  delay?: number
}

/** 滚动入场容器：进入视口时淡入上浮一次；reduced-motion 下由 CSS 保持直接可见。 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={cn('reveal', inView && 'reveal-shown', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
