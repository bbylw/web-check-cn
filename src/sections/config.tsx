import { AlertTriangle } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { apiKeyRows, configRows, type ConfigRow } from '@/lib/site-data'

/** API 密钥：卡片网格而非表格行，避免 7 行同构描边 */
function KeyCards({ rows }: { rows: ConfigRow[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {rows.map((row) => (
        <div
          key={row.key}
          className="bg-card group flex flex-col gap-3 rounded-xl border p-5 transition-shadow hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-2">
            <code className="text-primary font-mono text-xs leading-relaxed font-medium break-all">
              {row.key}
            </code>
            <CopyButton value={row.key} />
          </div>
          <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
            {row.value}
            {row.link ? (
              <>
                {' '}
                <a
                  href={row.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-mark font-medium whitespace-nowrap"
                >
                  {row.link.text}
                </a>
              </>
            ) : null}
          </p>
        </div>
      ))}
    </div>
  )
}

type Cluster = { name: string; keys: string[]; note: string }

const clusters: Cluster[] = [
  {
    name: '服务与端点',
    keys: ['PORT', 'PUBLIC_API_ENDPOINT', 'DISABLE_GUI', 'API_ENABLE_RATE_LIMIT'],
    note: '控制 API 服务本身怎么跑。',
  },
  {
    name: '请求行为',
    keys: ['PUBLIC_API_TIMEOUT_LIMIT', 'API_CORS_ORIGIN', 'API_BLOCKED_HOSTS'],
    note: '限制超时、跨域来源与可扫描的主机范围。',
  },
  {
    name: '检查范围',
    keys: ['API_ENABLED_CHECKS', 'API_DISABLED_CHECKS', 'CHROME_PATH'],
    note: '白名单与黑名单二选一，或指定 Chromium 路径以启用截图类检查。',
  },
]

function ClusterBlocks() {
  const lookup = new Map(configRows.map((row) => [row.key, row]))

  return (
    <div className="flex flex-col gap-10">
      {clusters.map((cluster) => (
        <div key={cluster.name}>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-heading text-lg font-medium tracking-tight">{cluster.name}</h3>
            <p className="text-muted-foreground text-xs">{cluster.note}</p>
          </div>

          <div className="border-border mt-4 grid border-t sm:grid-cols-2 xl:grid-cols-4">
            {cluster.keys.map((key) => {
              const row = lookup.get(key)
              if (!row) return null
              return (
                <div key={key} className="border-border flex flex-col gap-2 border-b py-4 sm:pr-5">
                  <div className="flex items-start justify-between gap-2">
                    <code className="text-primary font-mono text-xs font-medium">{key}</code>
                    <CopyButton value={key} />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{row.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export function ConfigBlocks() {
  return (
    <div className="flex flex-col gap-10">
      <Tabs defaultValue="keys">
        <TabsList className="rounded-lg">
          <TabsTrigger value="keys">API 密钥与凭证</TabsTrigger>
          <TabsTrigger value="options">配置项</TabsTrigger>
        </TabsList>

        <TabsContent value="keys" className="mt-10">
          <KeyCards rows={apiKeyRows} />
        </TabsContent>

        <TabsContent value="options" className="mt-10">
          <ClusterBlocks />
        </TabsContent>
      </Tabs>

      <div className="bg-accent/40 mt-10 flex items-start gap-3.5 rounded-xl border p-5">
        <AlertTriangle className="text-primary mt-0.5 size-5 shrink-0" strokeWidth={1.75} />
        <div className="space-y-2 text-sm leading-relaxed">
          <p className="font-medium">如何设置这些值</p>
          <p className="text-muted-foreground max-w-[68ch]">
            既可以直接写入项目根目录的{' '}
            <code className="bg-background rounded px-1.5 py-0.5 font-mono text-xs">.env</code>{' '}
            文件，也可以通过 Netlify / Vercel 的 UI 设置，或使用 Docker 容器的{' '}
            <code className="bg-background rounded px-1.5 py-0.5 font-mono text-xs">--env</code>{' '}
            参数传入，也可以使用你自己的环境变量管理系统。
          </p>
          <p className="text-muted-foreground max-w-[68ch]">
            注意：以{' '}
            <code className="bg-background rounded px-1.5 py-0.5 font-mono text-xs">PUBLIC_</code>{' '}
            为前缀的值会在构建时由前端读取，因此修改后需要重新构建。
          </p>
        </div>
      </div>
    </div>
  )
}
