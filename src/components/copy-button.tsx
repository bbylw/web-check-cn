import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* 剪贴板不可用时静默失败 */
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      onClick={copy}
      aria-label={copied ? '已复制' : '复制代码'}
      title={copied ? '已复制' : (label ?? '复制代码')}
      className="text-muted-foreground hover:text-foreground shrink-0"
    >
      {copied ? <Check className="size-3.5 text-emerald-500!" /> : <Copy className="size-3.5" />}
    </Button>
  )
}