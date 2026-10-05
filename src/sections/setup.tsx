import { ConfigBlocks } from '@/sections/config'
import { DevelopingBlocks } from '@/sections/developing'
import { Section, SectionHeading } from '@/components/section'
import { Separator } from '@/components/ui/separator'

export function Setup() {
  return (
    <Section id="setup" ruled>
      <div className="flex flex-col gap-16 lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="默认零配置，按需增强"
            description="所有环境变量均为可选：填写 API 密钥可解锁更多检查项，并提升依赖外部 API 的速率限制。"
          />
          <ConfigBlocks />
        </div>

        <Separator />

        <div id="developing" className="flex scroll-mt-20 flex-col gap-10">
          <SectionHeading
            title="四步启动本地开发环境"
            description="部分检查在缺少系统依赖时会自动跳过，不影响其余功能。"
          />
          <DevelopingBlocks />
        </div>
      </div>
    </Section>
  )
}
