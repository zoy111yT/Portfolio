# Portfolio

## 文件分类

- `index.html`：网站首页（原 `index(1).html`）。
- `pages/`：四个项目页面，未来的 Blog 和 RRR 页面也放这里。
- `assets/css/style.css`：共享样式（原 `style(1).css`）。
- `assets/js/sketch.js`：首页正在引用的动画脚本。
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
首页依据上传的 `cover.html` 恢复粉色渐变封面、头像、About、项目入口和 RRR 区域；四个项目仍为独立页面。Blog PDF 位于 `assets/documents/output.pdf`。首页不加载旧粒子脚本。

## 已知问题

缺失素材和 Reflection 页面尚未补齐，详见清单。原粒子脚本保留，未被新封面加载。仓库中的 Webpack workflow 与当前无 npm 构建的静态站点不匹配，不能用于判断 Pages 是否部署成功。
