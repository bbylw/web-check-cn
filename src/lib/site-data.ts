export const site = {
  name: 'Web-Check',
  tagline: '对任意网站进行全面、按需的开源情报（OSINT）收集',
  url: 'https://web-check.xyz/',
  repo: 'https://github.com/Lissy93/web-check',
  demo: 'https://web-check.as93.net',
  mirror: 'https://codeberg.org/alicia/web-check',
  aboutPage: 'https://web-check.xyz/about',
  author: 'Alicia Sykes',
  authorUrl: 'https://aliciasykes.com',
  licenseUrl: 'https://github.com/Lissy93/web-check/blob/HEAD/LICENSE',
  sponsorUrl: 'https://github.com/sponsors/Lissy93',
  issuesUrl: 'https://github.com/Lissy93/web-check/issues/new/choose',
  compareUrl: 'https://github.com/Lissy93/web-check/compare',
  contributorsUrl: 'https://github.com/Lissy93/web-check/graphs/contributors',
} as const

export type NavItem = {
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'about', label: '关于' },
  { id: 'features', label: '检查项' },
  { id: 'try', label: '体验' },
  { id: 'deploy', label: '部署' },
  { id: 'setup', label: '配置' },
  { id: 'community', label: '社区' },
]

export type StatusBadge = {
  label: string
  href: string
  image: string
  alt: string
}

export const statusBadges: StatusBadge[] = [
  {
    label: 'Netlify',
    href: 'https://app.netlify.com/sites/web-check/deploys',
    image: 'https://api.netlify.com/api/v1/badges/c43453c1-5333-4df7-889b-c1d2b52183c0/deploy-status',
    alt: 'Netlify Status',
  },
  {
    label: 'Vercel',
    href: 'https://vercel.com/as93/web-check/',
    image: 'https://therealsujitk-vercel-badge.vercel.app/?app=web-check-ten',
    alt: 'Vercel Status',
  },
  {
    label: 'Docker 镜像',
    href: 'https://github.com/Lissy93/web-check/actions/workflows/docker.yml',
    image: 'https://github.com/Lissy93/web-check/actions/workflows/docker.yml/badge.svg',
    alt: 'Build + Publish Docker Image',
  },
  {
    label: 'AWS 部署',
    href: 'https://github.com/Lissy93/web-check/actions/workflows/deploy-aws.yml',
    image: 'https://github.com/Lissy93/web-check/actions/workflows/deploy-aws.yml/badge.svg',
    alt: 'Deploy to AWS',
  },
  {
    label: '镜像到 Codeberg',
    href: 'https://github.com/Lissy93/web-check/actions/workflows/mirror.yml',
    image: 'https://github.com/Lissy93/web-check/actions/workflows/mirror.yml/badge.svg',
    alt: 'Mirror to Codeberg',
  },
  {
    label: '贡献者与赞助者',
    href: 'https://github.com/Lissy93/web-check/actions/workflows/credits.yml',
    image: 'https://github.com/Lissy93/web-check/actions/workflows/credits.yml/badge.svg',
    alt: 'Inserts Contributors & Sponsors',
  },
]

export type FeatureGroup = {
  category: string
  icon: string
  items: string[]
}

export const featureGroups: FeatureGroup[] = [
  {
    category: '服务器与基础设施',
    icon: 'server',
    items: [
      '域名与 IP 归属地解析',
      'DNS 记录（记录类型、TTL、权威 NS）',
      '开放端口扫描（FTP、SSH、RDP、数据库等）',
      '防火墙检测与 WAF 识别',
      '反向代理与 CDN 溯源',
      '网站托管位置与供应商信息',
      '已知漏洞检索（Shodan / Censys）',
    ],
  },
  {
    category: '传输与安全配置',
    icon: 'shield',
    items: [
      'SSL / TLS 证书链与有效期',
      'HTTP 响应头安全基线（HSTS、CSP 等）',
      '混合内容与不安全资源检测',
      'CORS 策略与跨域暴露',
      'Cookie 属性（Secure / HttpOnly / SameSite）',
      'Cloudmersive 网站威胁扫描',
    ],
  },
  {
    category: '内容与技术栈识别',
    icon: 'layers',
    items: [
      '前端框架、构建工具与 CMS 指纹',
      '服务端语言、数据库与运行时',
      '第三方脚本、字体与 CDN 清单',
      '分析、埋点与广告脚本梳理',
      '页面截图与 SEO 元数据',
      '站点地图、robots.txt 与爬虫策略',
    ],
  },
  {
    category: '流量、排名与影响力',
    icon: 'trending-up',
    items: [
      'Tranco 榜单排名查询',
      '流量与访问量估算',
      '社交媒体账号存在性检查',
      'GitHub 仓库与贡献度检索',
      '子域名发现（证书透明日志）',
      '短链接与追踪参数展开',
      '页面加载性能（PageSpeed Insights）',
      'Google Safe Browsing 风险提示',
    ],
  },
]

export const totalChecks = featureGroups.reduce((sum, group) => sum + group.items.length, 0)

export type DeployOption = {
  id: string
  index: number
  name: string
  platform: string
  brand: string
  description: string
  action: string
  href: string
  badge?: { image: string; alt: string }
  command?: string
  note?: string
}

export const deployOptions: DeployOption[] = [
  {
    id: 'netlify',
    index: 1,
    name: 'Netlify',
    platform: 'Netlify',
    brand: 'netlify',
    description: '点击下方按钮，一键将 Web-Check 部署到 Netlify。',
    action: '部署到 Netlify',
    href: 'https://app.netlify.com/start/deploy?repository=https://github.com/lissy93/web-check',
    badge: {
      image:
        'https://img.shields.io/badge/Deploy-Netlify-%2330c8c9?style=for-the-badge&logo=netlify&labelColor=1e0e41',
      alt: 'Deploy Web-Check to Netlify, via 1-Click Script',
    },
  },
  {
    id: 'vercel',
    index: 2,
    name: 'Vercel',
    platform: 'Vercel',
    brand: 'vercel',
    description: '点击下方按钮，即可使用官方模板克隆部署到 Vercel。',
    action: '部署到 Vercel',
    href: 'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flissy93%2Fweb-check&project-name=web-check&repository-name=web-check-fork&demo-title=Web-Check%20Demo&demo-description=Check%20out%20web-check.xyz%20to%20see%20a%20live%20demo%20of%20this%20application%20running.&demo-url=https%3A%2F%2Fweb-check.xyz&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2FLissy93%2Fweb-check%2Fmaster%2F.github%2Fscreenshots%2Fweb-check-screenshot10.png',
    badge: {
      image:
        'https://img.shields.io/badge/Deploy-Vercel-%23ffffff?style=for-the-badge&logo=vercel&labelColor=1e0e41',
      alt: 'Deploy with Vercel',
    },
  },
  {
    id: 'hostinger',
    index: 3,
    name: 'Hostinger',
    platform: 'Hostinger',
    brand: 'hostinger',
    description: '在 Hostinger 上一键部署 Web-Check，已预先配置好，开箱即用。',
    action: '在 Hostinger 上部署',
    href: 'https://www.hostg.xyz/aff_c?offer_id=48&aff_id=243972&url_id=6826',
  },
  {
    id: 'render',
    index: 4,
    name: 'Render',
    platform: 'Render',
    brand: 'render',
    description: '点击下方按钮，即可把仓库直接部署到 Render。',
    action: '部署到 Render',
    href: 'https://render.com/deploy?repo=https://github.com/Lissy93/web-check',
    badge: {
      image:
        'https://img.shields.io/badge/Deploy-Render-%238a05ff?style=for-the-badge&logo=render&labelColor=1e0e41',
      alt: 'Deploy to Render',
    },
  },
  {
    id: 'docker',
    index: 5,
    name: 'Docker',
    platform: 'Docker',
    brand: 'docker',
    description: '运行容器后打开 localhost:3000 即可访问。镜像已发布至 DockerHub 与 GHCR。',
    action: '查看 Docker 镜像',
    href: 'https://hub.docker.com/r/lissy93/web-check',
    command: 'docker run -p 3000:3000 lissy93/web-check',
    note: '如需自行构建：docker build -t web-check .',
  },
  {
    id: 'source',
    index: 6,
    name: '从源码部署',
    platform: 'Git',
    brand: 'git',
    description: '安装前置依赖后克隆仓库并启动，适用于自有服务器环境。',
    action: '查看完整开发步骤',
    href: '#developing',
    command: 'git clone https://github.com/Lissy93/web-check.git',
    note: '构建并启动：yarn build → yarn start（同时启动 API 与 GUI）。',
  },
]

export type ConfigRow = {
  key: string
  value: string
  link?: { text: string; href: string }
}

export const apiKeyRows: ConfigRow[] = [
  {
    key: 'GOOGLE_CLOUD_API_KEY',
    value: '一个启用了 PageSpeed Insights 与 Safe Browsing API 的 Google API 密钥，用于运行质量与 Safe Browsing 检查。',
    link: {
      text: '在此获取',
      href: 'https://developers.google.com/speed/docs/insights/v5/get-started',
    },
  },
  {
    key: 'SHODAN_API_KEY',
    value: '一个 Shodan API 密钥，用于运行主机名、服务器信息与漏洞检查。',
    link: { text: '在此获取', href: 'https://account.shodan.io/' },
  },
  {
    key: 'CLOUDMERSIVE_API_KEY',
    value: '一个 Cloudmersive API 密钥，为威胁检查增加 Cloudmersive 网站扫描。',
    link: { text: '在此获取', href: 'https://account.cloudmersive.com/' },
  },
  {
    key: 'TRANCO_API_KEY',
    value: '一个 Tranco API 密钥，提高排名检查的 Tranco 速率限制。',
    link: { text: '在此获取', href: 'https://tranco-list.eu/' },
  },
  {
    key: 'TRANCO_USERNAME',
    value: '你的 Tranco 账户邮箱，与上面的密钥配合使用。',
  },
  {
    key: 'GITHUB_TOKEN',
    value: '一个 GitHub 令牌，提高社交存在检查的 GitHub 速率限制。',
    link: { text: '在此获取', href: 'https://github.com/settings/tokens' },
  },
  {
    key: 'CERTSPOTTER_TOKEN',
    value: '一个 CertSpotter API 令牌，提高子域名检查的 CertSpotter 速率限制。',
    link: { text: '在此获取', href: 'https://sslmate.com/certspotter/api/' },
  },
]

export const configRows: ConfigRow[] = [
  { key: 'PORT', value: '运行 server.js 时 API 服务的端口（如 3000）。' },
  { key: 'API_ENABLE_RATE_LIMIT', value: '为 /api 端点启用速率限制（如 true）。' },
  { key: 'PUBLIC_API_TIMEOUT_LIMIT', value: 'API 请求的超时时间，单位毫秒（如 25000）。' },
  { key: 'API_CORS_ORIGIN', value: '通过设置允许的主机名来启用 CORS（如 example.com）。' },
  { key: 'API_DISABLED_CHECKS', value: '以逗号分隔的禁用检查列表（如 trace-route,ports）。' },
  { key: 'API_ENABLED_CHECKS', value: '若设置，则只运行这些检查（如 get-ip,ssl,dns,headers）。' },
  { key: 'API_BLOCKED_HOSTS', value: '禁止扫描的主机（如 lan.example.com,192.168.0.0/16）。' },
  { key: 'CHROME_PATH', value: 'Chromium 可执行文件的路径（如 /usr/bin/chromium）。' },
  { key: 'DISABLE_GUI', value: '禁用 GUI，仅提供 API 服务（如 false）。' },
  { key: 'PUBLIC_API_ENDPOINT', value: 'API 的端点，本地或远程均可（如 /api）。' },
]

export const sourceSteps = [
  { command: 'git clone git@github.com:Lissy93/web-check.git', label: '克隆仓库' },
  { command: 'cd web-check', label: '进入目录' },
  { command: 'yarn', label: '安装依赖' },
  { command: 'yarn dev', label: '启动开发服务器' },
]

export const prerequisites = [
  { name: 'Node.js', version: 'v22.22 或更高版本', href: 'https://nodejs.org/en' },
  { name: 'yarn', version: '包管理器', href: 'https://yarnpkg.com/getting-started/install' },
  { name: 'git', version: '版本控制', href: 'https://git-scm.com/' },
]

export const optionalBinaries = ['chromium', 'traceroute', 'dns']

export type CommunityItem = {
  id: string
  title: string
  description: string
  action: string
  href: string
  badge?: { image: string; alt: string }
  links: { text: string; href: string }[]
}

export const communityItems: [CommunityItem, CommunityItem, CommunityItem] = [
  {
    id: 'contributing',
    title: '贡献代码',
    description:
      '我们非常欢迎任何形式的贡献。先 Fork 本仓库，进行修改、add、commit 并 push 代码，然后回到这里发起一个 Pull Request。',
    action: '提交 Pull Request',
    href: 'https://github.com/Lissy93/web-check/compare',
    badge: {
      image:
        'https://img.shields.io/badge/Submit_a_PR-GitHub-%23060606?style=for-the-badge&logo=github&logoColor=fff',
      alt: 'Submit a PR',
    },
    links: [
      { text: 'Contributor Covenant 行为准则', href: 'https://www.contributor-covenant.org/version/2/1/code_of_conduct/' },
      {
        text: '如何发起你的第一个 Pull Request',
        href: 'https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3#let-s-make-our-first-pull-request-',
      },
      {
        text: 'Git 官方文档',
        href: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request',
      },
    ],
  },
  {
    id: 'bugs',
    title: '报告 Bug',
    description:
      '如果你发现了运行异常，或有新功能的建议，请直接在 GitHub 上提交 issue。报告 Bug 时，请说明复现步骤，并附上系统信息、相关日志等信息。',
    action: '提交 Issue',
    href: 'https://github.com/Lissy93/web-check/issues/new/choose',
    badge: {
      image:
        'https://img.shields.io/badge/Raise_an_Issue-GitHub-%23060606?style=for-the-badge&logo=github&logoColor=fff',
      alt: 'Raise an Issue',
    },
    links: [{ text: '查看全部 Issue', href: 'https://github.com/Lissy93/web-check/issues' }],
  },
  {
    id: 'supporting',
    title: '支持项目',
    description:
      '本应用将始终保持 100% 免费且开源。但由于托管实例的访问量较大，Lambda 函数每月成本约为 $25。正因有社区的支持，本项目才能对所有人免费开放。',
    action: '在 GitHub 上赞助',
    href: 'https://github.com/sponsors/Lissy93',
    badge: {
      image:
        'https://img.shields.io/badge/Sponsor_on_GitHub-Lissy93-%23ff4dda?style=for-the-badge&logo=githubsponsors&logoColor=ff4dda',
      alt: 'Sponsor Lissy93 on GitHub',
    },
    links: [{ text: '查看全部赞助者', href: 'https://github.com/sponsors/Lissy93' }],
  },
]

export type Screenshot = {
  src: string
  alt: string
  href: string
}

export const screenshots: [Screenshot, Screenshot] = [
  {
    src: '/screenshots/dashboard.webp',
    alt: 'Web-Check 主界面：服务器位置、SSL 证书、DNS 记录与技术栈检查',
    href: 'https://web-check.as93.net/',
  },
  {
    src: '/screenshots/results.webp',
    alt: 'Web-Check 检查结果截图',
    href: 'https://github.com/Lissy93/web-check/tree/master/.github/screenshots',
  },
]

