<h1 align="center">Web-Check</h1>

<p align="center">
<img src="https://cdn.as93.net/logo/web-check/w256" width="96" /><br />
<b><i>对任意网站进行全面、按需的开源情报（OSINT）收集</i></b>
<br />
<b>🌐 <a href="https://web-check.xyz/">web-check.xyz</a></b><br />

</p>


---

<p align="center">诚挚感谢以下赞助方的支持：</p>

<table align="center">
  <tr>
    <td align="center" width="33%">
      <a href="https://nubela.co/?utm_source=github&utm_medium=sponsorship&utm_campaign=oss_sponsorships&utm_content=github_readme&utm_id=web_check_2026">
        <img src="https://pixelflare.cc/alicia/sponsors/ninja-pear.png" width="260" alt="NinjaPear"><br>
        <b>NinjaPear</b>
      </a><br>
      <sub>通过任意 URL 获取完整 B2B 企业档案的 API</sub>
    </td>
    <td align="center" width="33%">
      <a href="https://www.hostg.xyz/aff_c?offer_id=48&aff_id=243972&url_id=6826">
        <img src="https://pixelflare.cc/alicia/sponsors/hostinger-2.png" width="260" alt="Hostinger"><br>
        <b>Hostinger</b>
      </a><br>
      <sub>在 Hostinger 上一键部署 Web-Check</sub>
    </td>
    <td align="center" width="33%">
      <a href="https://go.warp.dev/web-check">
        <img src="https://github.com/warpdotdev/brand-assets/blob/main/Github/Sponsor/Warp-Github-LG-02.png?raw=true" width="260" alt="Warp"><br>
        <b>Warp</b>
      </a><br>
      <sub>为多 AI 智能体协同编程而打造</sub>
    </td>
  </tr>
</table>


#### 目录

- **[关于](#about)**
  - [截图](#screenshot)
  - [在线演示](#live-demo)
  - [镜像](#mirror)
  - [功能](#features)
- **[使用](#usage)**
  - 部署
    - [选项 #1：Netlify](#deploying---option-1-netlify)
    - [选项 #2：Vercel](#deploying---option-2-vercel)
    - [选项 #3：Hostinger](#deploying---option-3-hostinger)
    - [选项 #4：Render](#deploying---option-4-render)
    - [选项 #5：Docker](#deploying---option-5-docker)
    - [选项 #6：从源码部署](#deploying---option-6-from-source)
  - [配置](#configuring)
  - [开发者配置](#developing)
- **[社区](#community)**
  - [贡献](#contributing)
  - [Bug 反馈](#reporting-bugs)
  - [支持](#supporting)
- **[许可证](#license)**

---

<h2 id="about">关于</h2>

深入了解任意网站的内部运作：发现潜在的攻击向量、分析服务器架构、查看安全配置，并了解网站所使用的技术栈。

我们的目标是帮助你轻松理解、优化并保护你的网站。

<h3 id="screenshot">截图</h3>

<details>
      <summary>展开截图</summary>

[![Screenshot](https://raw.githubusercontent.com/Lissy93/web-check/master/.github/screenshots/web-check-screenshot1.png)](https://web-check.as93.net/)

</details>

[![Screenshot](https://i.ibb.co/r0jXN6s/web-check.png)](https://github.com/Lissy93/web-check/tree/master/.github/screenshots)

<h3 id="live-demo">在线演示</h3>

可访问托管的线上版本：**[web-check.as93.net](https://web-check.as93.net)**

<h3 id="mirror">镜像</h3>

本仓库的源代码已镜像到 Codeberg，地址：**[codeberg.org/alicia/web-check](https://codeberg.org/alicia/web-check)**

### 状态

构建与部署： [![Netlify Status](https://api.netlify.com/api/v1/badges/c43453c1-5333-4df7-889b-c1d2b52183c0/deploy-status)](https://app.netlify.com/sites/web-check/deploys)
[![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=web-check-ten)](https://vercel.com/as93/web-check/)
[![🐳 Build + Publish Docker Image](https://github.com/Lissy93/web-check/actions/workflows/docker.yml/badge.svg)](https://github.com/Lissy93/web-check/actions/workflows/docker.yml)
[![🚀 Deploy to AWS](https://github.com/Lissy93/web-check/actions/workflows/deploy-aws.yml/badge.svg)](https://github.com/Lissy93/web-check/actions/workflows/deploy-aws.yml)
<br />
仓库管理与杂项： [![🪞 Mirror to Codeberg](https://github.com/Lissy93/web-check/actions/workflows/mirror.yml/badge.svg)](https://github.com/Lissy93/web-check/actions/workflows/mirror.yml)
[![💓 Inserts Contributors & Sponsors](https://github.com/Lissy93/web-check/actions/workflows/credits.yml/badge.svg)](https://github.com/Lissy93/web-check/actions/workflows/credits.yml)

<h3 id="features">功能</h3>

完整的检查项列表及各检查的作用，请见 **[web-check.xyz/about](https://web-check.xyz/about)**

---

<h2 id="usage">使用</h2>

<h3 id="deploying---option-1-netlify">部署 - 选项 #1：Netlify</h3>

点击下方按钮，即可部署到 Netlify 👇

[![Deploy to Netlify](https://img.shields.io/badge/Deploy-Netlify-%2330c8c9?style=for-the-badge&logo=netlify&labelColor=1e0e41 "Deploy Web-Check to Netlify, via 1-Click Script")](https://app.netlify.com/start/deploy?repository=https://github.com/lissy93/web-check)

<h3 id="deploying---option-2-vercel">部署 - 选项 #2：Vercel</h3>

点击下方按钮，即可部署到 Vercel 👇

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-%23ffffff?style=for-the-badge&logo=vercel&labelColor=1e0e41)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flissy93%2Fweb-check&project-name=web-check&repository-name=web-check-fork&demo-title=Web-Check%20Demo&demo-description=Check%20out%20web-check.xyz%20to%20see%20a%20live%20demo%20of%20this%20application%20running.&demo-url=https%3A%2F%2Fweb-check.xyz&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2FLissy93%2Fweb-check%2Fmaster%2F.github%2Fscreenshots%2Fweb-check-screenshot10.png)

<h3 id="deploying---option-3-hostinger">部署 - 选项 #3：Hostinger</h3>

在 Hostinger 上一键部署 Web-Check —— 已预先配置好，开箱即用 👇

<a href="https://www.hostg.xyz/aff_c?offer_id=48&aff_id=243972&url_id=6826"><img height="32" src="https://assets.hostinger.com/vps/deploy.svg"></a>

<h3 id="deploying---option-4-render">部署 - 选项 #4：Render</h3>

点击下方按钮，即可部署到 Render 👇

[![Deploy to Render](https://img.shields.io/badge/Deploy-Render-%238a05ff?style=for-the-badge&logo=render&labelColor=1e0e41)](https://render.com/deploy?repo=https://github.com/Lissy93/web-check)

<h3 id="deploying---option-5-docker">部署 - 选项 #5：Docker</h3>

运行 `docker run -p 3000:3000 lissy93/web-check`，然后打开 [`localhost:3000`](http://localhost:3000)

<details>
<summary>Docker 选项</summary>

你可以从以下位置获取 Docker 镜像：

- DockerHub: [`lissy93/web-check`](https://hub.docker.com/r/lissy93/web-check)
- GHCR: [`ghcr.io/lissy93/web-check`](https://github.com/Lissy93/web-check/pkgs/container/web-check)
- 或者克隆本仓库后自行构建镜像：`docker build -t web-check .`

</details>

<h3 id="deploying---option-6-from-source">部署 - 选项 #6：从源码</h3>

请先安装 [开发者配置](#developing) 章节中列出的前置依赖，然后运行：

```bash
git clone https://github.com/Lissy93/web-check.git  # 从 GitHub 下载代码
cd web-check                                        # 进入项目目录
yarn install                                        # 安装 NPM 依赖
yarn build                                          # 构建生产版本
yarn start                                          # 启动应用（API 与 GUI）
```

---

<h3 id="configuring">配置</h3>

默认情况下，无需任何配置。

不过，你可以设置一些可选的环境变量，以启用额外的检查项，或提高部分依赖外部 API 的检查的速率限制。

**API 密钥与凭证**：

| Key                    | Value                                                                                                                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GOOGLE_CLOUD_API_KEY` | 一个启用了 PageSpeed Insights 与 Safe Browsing API 的 Google API 密钥（[在此获取](https://developers.google.com/speed/docs/insights/v5/get-started)）。用于运行质量与 Safe Browsing 检查 |
| `SHODAN_API_KEY`       | 一个 Shodan API 密钥（[在此获取](https://account.shodan.io/)）。用于运行主机名、服务器信息与漏洞检查                                                                                |
| `CLOUDMERSIVE_API_KEY` | 一个 Cloudmersive API 密钥（[在此获取](https://account.cloudmersive.com/)）。为威胁检查增加 Cloudmersive 网站扫描                                                                       |
| `TRANCO_API_KEY`       | 一个 Tranco API 密钥（[在此获取](https://tranco-list.eu/)）。提高排名检查的 Tranco 速率限制                                                                                               |
| `TRANCO_USERNAME`      | 你的 Tranco 账户邮箱，与上面的密钥配合使用                                                                                                                                                    |
| `GITHUB_TOKEN`         | 一个 GitHub 令牌（[在此获取](https://github.com/settings/tokens)）。提高社交存在检查的 GitHub 速率限制                                                                                   |
| `CERTSPOTTER_TOKEN`    | 一个 CertSpotter API 令牌（[在此获取](https://sslmate.com/certspotter/api/)）。提高子域名检查的 CertSpotter 速率限制                                                                     |

**配置项**：

| Key                        | Value                                                                      |
| -------------------------- | -------------------------------------------------------------------------- |
| `PORT`                     | 运行 server.js 时 API 服务的端口（如 `3000`）                |
| `API_ENABLE_RATE_LIMIT`    | 为 /api 端点启用速率限制（如 `true`）                  |
| `PUBLIC_API_TIMEOUT_LIMIT` | API 请求的超时时间，单位毫秒（如 `25000`）         |
| `API_CORS_ORIGIN`          | 通过设置允许的主机名来启用 CORS（如 `example.com`） |
| `API_DISABLED_CHECKS`      | 以逗号分隔的禁用检查列表（如 `trace-route,ports`）       |
| `API_ENABLED_CHECKS`       | 若设置，则只运行这些检查（如 `get-ip,ssl,dns,headers`）         |
| `API_BLOCKED_HOSTS`        | 禁止扫描的主机（如 `lan.example.com,192.168.0.0/16`）   |
| `CHROME_PATH`              | Chromium 可执行文件的路径（如 `/usr/bin/chromium`）                |
| `DISABLE_GUI`              | 禁用 GUI，仅提供 API 服务（如 `false`）                     |
| `PUBLIC_API_ENDPOINT`      | API 的端点，本地或远程均可（如 `/api`）             |

以上所有值均为可选。

你可以将这些值作为环境变量添加。既可以直接写入项目根目录的 `.env` 文件，也可以通过 Netlify / Vercel 的 UI 设置，或使用 Docker 容器的 `--env` 参数传入，也可以使用你自己的环境变量管理系统。

注意：以 `PUBLIC_` 为前缀的值会在构建时由前端读取，因此修改后需要重新构建。

---

<h3 id="developing">开发者配置</h3>

1. 克隆仓库：`git clone git@github.com:Lissy93/web-check.git`
2. 进入目录：`cd web-check`
3. 安装依赖：`yarn`
4. 启动开发服务器：`yarn dev`

你需要安装 [Node.js](https://nodejs.org/en)（v22.22 或更高版本）、[yarn](https://yarnpkg.com/getting-started/install) 以及 [git](https://git-scm.com/)。
部分检查还需要环境中安装 `chromium`、`traceroute` 和 `dns`。如果缺少这些包，对应任务会被自动跳过。

---

<h2 id="community">社区</h2>

<h3 id="contributing">贡献</h3>

我们非常欢迎任何形式的贡献，并将不胜感激。
行为准则请参阅 [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)。

开始贡献：先 Fork 本仓库，进行修改、add、commit 并 push 代码，然后回到这里发起一个 Pull Request。如果你刚接触 GitHub 或开源，[这篇指南](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3#let-s-make-our-first-pull-request-) 或 [git 文档](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) 也许能帮你上手；如果需要任何帮助，随时联系我们。

[![Submit a PR](https://img.shields.io/badge/Submit_a_PR-GitHub-%23060606?style=for-the-badge&logo=github&logoColor=fff)](https://github.com/Lissy93/web-check/compare)

<h3 id="reporting-bugs">报告 Bug</h3>

如果你发现了运行异常，或有新功能的建议，请直接在 GitHub 上提交 issue。
报告 Bug 时，请说明复现步骤，并附上系统信息、相关日志等信息。

[![Raise an Issue](https://img.shields.io/badge/Raise_an_Issue-GitHub-%23060606?style=for-the-badge&logo=github&logoColor=fff)](https://github.com/Lissy93/web-check/issues/new/choose)

<h3 id="supporting">支持</h3>

本应用将始终保持 100% 免费且开源。
但由于托管实例的访问量较大，Lambda 函数每月成本约为 $25。
若你能通过 GitHub Sponsorship 帮忙分担这部分成本，我们将不胜感激。
正因有社区的支持，本项目才能对所有人免费开放 :)

[![Sponsor Lissy93 on GitHub](https://img.shields.io/badge/Sponsor_on_GitHub-Lissy93-%23ff4dda?style=for-the-badge&logo=githubsponsors&logoColor=ff4dda)](https://github.com/sponsors/Lissy93)

### 贡献者

感谢以下为 Web-Check 做出贡献的用户

[![contributors badge](https://readme-contribs.as93.net/contributors/lissy93/web-check?perRow=10&shape=squircle)](https://github.com/lissy93/web-check/graphs/contributors)

### 赞助者

由衷感谢这些在 GitHub 上赞助我的朋友，他们的支持帮助我们承担维持 Web-Check 及其他项目免费开放所需的成本。如果你有能力，欢迎加入他们，[在 GitHub 上赞助我](https://github.com/sponsors/Lissy93)。

[![sponsors badge](https://readme-contribs.as93.net/sponsors/lissy93?perRow=10&shape=squircle)](https://github.com/sponsors/Lissy93)

---

<h2 id="license">许可证</h2>

> _**[Lissy93/Web-Check](https://github.com/Lissy93/web-check)** 基于 [MIT](https://github.com/Lissy93/web-check/blob/HEAD/LICENSE) 许可证发布 © [Alicia Sykes](https://aliciasykes.com) 2023 - 2026._<br>
> <sup align="right">了解详情，请见 <a href="https://tldrlegal.com/license/mit-license">TLDR Legal > MIT</a></sup>

<details>
<summary>展开许可证</summary>

```
The MIT License (MIT)
Copyright (c) Alicia Sykes <alicia@omg.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[![View Dependency Licenses & SBOM on FOSSA](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLissy93%2Fweb-check.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2FLissy93%2Fweb-check?ref=badge_large&issueType=license)

</details>

<!-- License + Copyright -->
<p  align="center">
  <i>© <a href="https://aliciasykes.com">Alicia Sykes</a> 2026</i><br>
  <i>基于 <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a> 许可证发布</i><br>
  <a href="https://github.com/lissy93"><img src="https://pixelflare.cc/alicia/images/octoface.webp?w=64" /></a><br>
  <sup>感谢你的访问 :)</sup>
</p>

<!-- Dinosaurs are Awesome -->
<!--
                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
-->
