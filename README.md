# oniszczukthommy-wq.github.io

Yuanhang Zhou · AI Product Manager — personal portfolio site.

纯静态单页（HTML + CSS + 原生 JS，零构建依赖），部署在 GitHub Pages：

- `index.html`：启动终端层 + ABOUT / PRODUCT / TOOL / NOTES / CONTACT 五个视图
- `assets/style.css`：设计系统与组件样式
- `assets/app.js`：启动动画、视图路由、卡片轮播、文章网格数据
- `assets/portrait.svg`：ABOUT 视图拍立得卡中的本人照片（JPEG 内嵌，160×219，cover 裁切；替换时保持 82:112 比例）

## 本地预览

```bash
cd oniszczukthommy-wq.github.io
python3 -m http.server 8080
# 打开 http://localhost:8080
```

## 发布

用户主页仓库在 `main` 分支根目录维护，GitHub Pages 自动发布，访问 https://oniszczukthommy-wq.github.io/ 。

## 内容来源

项目描述与数字均来自对应仓库 README 的真实记录；第三方素材（如 film-shot-agent 的 CC BY 3.0 影片）版权归属见各项目仓库说明。
