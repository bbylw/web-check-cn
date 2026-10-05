import { useState } from 'react'
import { cn } from '@/lib/utils'

type RemoteBadgeProps = {
  src: string
  alt: string
  href: string
  height?: number
  fallbackClassName?: string
}

/** 远程徽章图片，失败时降级为纯文本标签，避免出现破图占位文字。 */
export function RemoteBadge({ src, alt, href, height = 20, fallbackClassName }: RemoteBadgeProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className="inline-block">
        <span
          style={{ height }}
          className={cn(
            'bg-muted text-muted-foreground inline-flex items-center rounded-md border px-2 text-xs font-medium',
            fallbackClassName,
          )}
        >
          {alt}
        </span>
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="inline-block">
      <img src={src} alt={alt} height={height} loading="lazy" onError={() => setFailed(true)} />
    </a>
  )
}