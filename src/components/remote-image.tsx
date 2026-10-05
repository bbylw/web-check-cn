import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

type RemoteImageProps = {
  src: string
  alt: string
  className?: string
  fallbackLabel?: string
}

/** 远程图片，加载失败时降级为占位提示，避免出现破图图标与残留空白。 */
export function RemoteImage({ src, alt, className, fallbackLabel }: RemoteImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn(
          'text-muted-foreground flex w-full flex-col items-center justify-center gap-2 bg-muted/50 p-8 text-center',
          className,
        )}
      >
        <ImageOff className="size-6" />
        <span className="text-xs">{fallbackLabel ?? `图片暂时无法加载：${alt}`}</span>
      </div>
    )
  }

  return (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />
  )
}