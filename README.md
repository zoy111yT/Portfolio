# Portfolio

## 文件分类

- `index.html`：网站首页（原 `index(1).html`）。
- `pages/`：五个新作品集项目详情页及保留的旧项目页面。首页优先展示新项目，绿色翻书与互动动画并列放在 More Explorations，翻书标注 School group project。
- `assets/images/portfolio/`：从原始作品集 PDF 渲染的 31 页项目内容及 5 张封面；详情页支持查看原图和打开 PDF。
- `assets/css/portfolio-case.css`：新作品集详情页样式，与首页原有配色保持一致。
- `assets/css/home.css`：首页的拼贴风格、响应式布局与交互样式。
- `assets/css/style.css`：项目页面使用的原共享样式（原 `style(1).css`）。
- `assets/js/sketch.js`：保留的旧粒子动画脚本，当前首页不加载。
- `assets/images/`：图标、头像；原项目图片按 `project01` 到 `project04` 子目录分类，新作品集素材放在 `portfolio/`。
- `archive/scripts/`：两个未被页面引用的原始脚本，保留全部内容；它们的内容相同。
- `.vscode/launch.json`：编辑器调试配置，端口为 8000。
- `docs/missing-files.md`：原仓库缺失的图片与页面清单。

## 本地运行

在仓库根目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

用浏览器打开本机端口 8000 的首页。无需安装 npm 依赖或构建。
首页按拼贴、超大字体、奶油白与荧光绿的参考风格改版，使用独立 `home.css`；项目页面保留原样。项目展示使用命名 Grid 区域：桌面为 7/5、5/7 列交错布局，平板为等宽两列，手机为单列。每张项目卡片使用 Flexbox 排列编号、标题、箭头和自动换行的标签，支持整卡点击及键盘导航。首页五个项目使用新作品集的真实封面，按 PDF 顺序排列；绿色翻书与互动动画并列放在五个作品集项目之后的 More Explorations，翻书标注 School group project。

Blog PDF 位于 `assets/documents/output.pdf`。RRR 保留完整目录；由于独立文件尚未提供，不显示会导致 404 的入口。首页不加载外部字体或旧粒子脚本；支持减少动态效果的系统设置。

布局参考课程位于独立仓库 `/workspace/fem-layout`，它是 Frontend Masters CSS Grid / Flexbox 教学示例，不是可安装的 Codex 技能。

## 已知问题

缺失素材和 Reflection 页面尚未补齐，详见清单。原粒子脚本保留，未被新封面加载。GitHub Actions 使用 `Static website checks` 检查全部 10 个页面的本地资源、锚点、视口、图片说明与尺寸、主内容区域和跳过导航入口，无需 npm 或 Webpack。可在本地运行 `python3 scripts/check_site.py`。网站是否发布成功请查看 `pages build and deployment`。

首页和项目内页支持键盘导航与减少动态效果。保留的翻书项目通过前后按钮查看完整 14 页；项目二使用原生按钮与 dialog 查看城市故事；项目三支持日期和地点按钮、文字情绪说明、动画暂停和 URL 状态恢复。缺失素材显示明确占位，原路径保留。规范检查与验证见 `docs/interface-review.md`。

首页已移除 IN ↔ OUT 阅读索引板块，其原导航入口改为学校小组作业。翻书链接为 `pages/project01.html`，支持全部 14 页。

绿色翻书与互动动画并列于 MORE EXPLORATIONS；翻书标注 School group project，保留完整 14 页。首页主项目区仍为五个作品集项目。
