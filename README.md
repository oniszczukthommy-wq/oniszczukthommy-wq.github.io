# Yuanhang Zhou · Personal portfolio

周远航的个人网站，部署于 https://oniszczukthommy-wq.github.io/ 。

纯静态 HTML / CSS / JavaScript，无构建步骤与外部字体依赖。

## 内容与维护

- `index.html`：个人背景、六个主项目及案例详情、产品实践、十篇文章与联系方式。所有内容预先写入 HTML，无 JavaScript 时仍可阅读和使用外链。
- `assets/style.css`：终端与桌面窗口风格，响应式页面布局。
- `assets/app.js`：哈希导航、项目筛选、可选终端弹窗、邮箱复制与失败提示。
- `assets/portrait.svg`：现有个人照片资源。

项目列表对应 GitHub 置顶的六个展示入口。所有描述来自公开项目 README，不将私有源码发布到本站。Astronavi 保留在附加作品区域。

更新项目时，同时维护卡片摘要、展开详情、首页快捷入口与分类计数；更新文章时同步 GitHub 个人主页的标题和链接。

## 本地预览

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

浏览 http://127.0.0.1:8765/ 。主视图可直接链接，例如 `#projects`、`#notes`；单个案例可链接 `#project-music`、`#project-blue`、`#project-detective`、`#project-shot`、`#project-vision`、`#project-guitar`。

## 发布与检查

`main` 分支根目录由 GitHub Pages 自动发布。发布前检查：

- 五个导航视图、浏览器前进 / 后退与案例直达。
- 六个项目，分类筛选为全部 6 / 创作与娱乐 4 / 工作台 2；案例可展开和收起。
- 十篇文章与所有公开仓库入口；邮箱复制、终端关闭与 Escape。
- 320 / 390 / 768 像素及桌面宽度无横向溢出；长内容可正常滚动。
- 关闭 JavaScript 时内容与外链仍可访问。

微信文章可能触发平台验证，小红书可能要求登录。Shot Agent 免费托管演示可能冷启动；公开源码与运行说明始终提供独立入口。外部项目运行情况不由本静态网站保证。
