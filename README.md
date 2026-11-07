# Portfolio

## 文件分类

- `index.html`：网站首页（原 `index(1).html`）。
- `pages/`：四个项目页面，未来的 Blog 和 RRR 页面也放这里。
- `assets/css/home.css`：首页的拼贴风格、响应式布局与交互样式。
- `assets/css/style.css`：项目页面使用的原共享样式（原 `style(1).css`）。
- `assets/js/sketch.js`：保留的旧粒子动画脚本，当前首页不加载。
- `assets/images/`：图标、头像；项目图片按 `project01` 到 `project04` 子目录分类。
- `archive/scripts/`：两个未被页面引用的原始脚本，保留全部内容；它们的内容相同。
- `.vscode/launch.json`：编辑器调试配置，端口为 8000。
- `docs/missing-files.md`：原仓库缺失的图片与页面清单。

## 本地运行

在仓库根目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

用浏览器打开本机端口 8000 的首页。无需安装 npm 依赖或构建。
首页按拼贴、超大字体、奶油白与荧光绿的参考风格改版，使用独立 `home.css`；项目页面保留原样。四个项目支持点击跳转及桌面悬停/键盘聚焦预览。仅项目一有现成作品图片，其余首页预览为抽象图形。

Blog PDF 位于 `assets/documents/output.pdf`。RRR 保留完整目录；由于独立文件尚未提供，不显示会导致 404 的入口。首页不加载外部字体或旧粒子脚本；支持减少动态效果的系统设置。

布局参考课程位于独立仓库 `/workspace/fem-layout`，它是 Frontend Masters CSS Grid / Flexbox 教学示例，不是可安装的 Codex 技能。

## 已知问题

缺失素材和 Reflection 页面尚未补齐，详见清单。原粒子脚本保留，未被新封面加载。仓库中的 Webpack workflow 与当前无 npm 构建的静态站点不匹配，不能用于判断 Pages 是否部署成功。
