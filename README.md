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
首页动画使用 CDN 提供的 p5.js，需要联网。

## 已知问题

缺失素材尚未补齐。原 `sketch.js` 第一行是 `sketch.js`，会在浏览器中引用未定义变量；本次仅整理文件和引用，未改写动画逻辑。
