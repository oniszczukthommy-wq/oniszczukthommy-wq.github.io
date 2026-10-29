# oniszczukthommy-wq.github.io

Yuanhang Zhou · AI Product Manager — personal portfolio site.

纯静态单页（HTML + CSS + 原生 JS，零构建依赖），部署在 GitHub Pages：

- `index.html`：启动终端层 + ABOUT / PRODUCT / TOOL / NOTES / CONTACT 五个视图
- `assets/style.css`：设计系统与组件样式
- `assets/app.js`：启动动画、视图路由、卡片轮播、文章网格数据
- `assets/monogram.svg`：头像位占位图，后续替换为本人照片时保持同尺寸（96×140 拍立得框）

## 本地预览

```bash
cd oniszczukthommy-wq.github.io
python3 -m http.server 8080
# 打开 http://localhost:8080
```

## 发布

仓库 Settings → Pages → Source 选 `main` 分支 `/ (root)`，发布后访问 https://oniszczukthommy-wq.github.io/ 。

## 内容来源

项目描述与数字均来自对应仓库 README 的真实记录；第三方素材（如 film-shot-agent 的 CC BY 3.0 影片）版权归属见各项目仓库说明。
