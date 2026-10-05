import { Info, Package } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'
import { Badge } from '@/components/ui/badge'
import { optionalBinaries, prerequisites, sourceSteps } from '@/lib/site-data'

export function DevelopingBlocks() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      <div className="bg-card h-fit overflow-hidden rounded-xl border">
          <div className="bg-muted/60 flex items-center justify-between border-b px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="bg-destructive/70 size-2.5 rounded-full" />
              <span className="bg-chart-3/80 size-2.5 rounded-full" />
              <span className="bg-primary/70 size-2.5 rounded-full" />
            </div>
            <span className="text-muted-foreground font-mono text-xs">bash</span>
          </div>
          <ol className="divide-border divide-y">
            {sourceSteps.map((step, i) => (
              <li key={step.command} className="hover:bg-muted/40 flex items-center gap-3 px-4 py-3.5">
                <span className="text-muted-foreground w-4 shrink-0 font-mono text-xs tabular-nums">
                  {i + 1}
                </span>
                <code className="flex-1 overflow-x-auto font-mono text-xs whitespace-nowrap sm:text-[0.8rem]">
                  {step.command}
                </code>
                <span className="text-muted-foreground hidden text-xs sm:inline">{step.label}</span>
                <CopyButton value={step.command} />
              </li>
            ))}
          </ol>
          <div className="text-muted-foreground bg-muted/40 border-t px-4 py-3 text-xs leading-relaxed">
            从源码部署时，依次执行 <code className="font-mono">yarn build</code> 与{' '}
            <code className="font-mono">yarn start</code>，即可同时启动 API 与 GUI 服务。
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-heading font-medium">
              <Package className="text-primary size-4" strokeWidth={1.75} />
              需要预先安装
            </h3>
            <ul className="divide-border divide-y border-y">
              {prerequisites.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-3 py-3 text-sm">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-mark font-medium"
                  >
                    {item.name}
                  </a>
                  <span className="text-muted-foreground text-xs">{item.version}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 font-heading font-medium">
              <Info className="text-primary size-4" strokeWidth={1.75} />
              可选的系统依赖
            </h3>
            <p className="text-muted-foreground mb-4 max-w-[46ch] text-sm leading-relaxed">
              以下工具用于部分检查。如果缺少这些包，对应任务会被自动跳过。
            </p>
            <div className="flex flex-wrap gap-2">
              {optionalBinaries.map((bin) => (
                <Badge key={bin} variant="secondary" className="h-6 rounded-md px-2.5 font-mono text-xs">
                  {bin}
                </Badge>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
