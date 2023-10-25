# HoverQR Pal

HoverQR Pal（悬停QR小助手）是一个简洁有趣的浏览器扩展脚本，当你的鼠标在网页上的图片上悬停时，它将帮助你快速识别图片中的二维码。

## 用途说明

HoverQR Pal 的主要用途是在你浏览网页时，当你的鼠标悬停在图片上时，可以点击出现在图片右下角的识别标志来快速识别图中的二维码信息。这对于快速获取链接、信息或其他有趣的内容非常有用。

![show](/images/show.gif)

## 使用说明

1. 安装浏览器扩展如  [Tampermonkey](https://tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/) 插件。

2. 安装 HoverQR Pal

    | jsDelivr 源 | GitHub 源                                                                       |
    | ---------- | ------------------------------------------------------------------------------ |
    | [安装](https://cdn.jsdelivr.net/gh/aoguai/HoverQR_Pal@master-cdn/dict/HoverQR_Pal.user.js)     | [安装](https://raw.githubusercontent.com/aoguai/HoverQR_Pal/main/dict/HoverQR_Pal.user.js) |

3. 浏览网页过程中，当鼠标悬停在图片上，HoverQR Pal 将在图片右下角显示一个识别标志。

4. 当你需要识别图片中的二维码时，点击图片右下角显示的识别标志，HoverQR Pal 将自动识别图片中的二维码，显示二维码内容。

5. 如果你想关闭弹出框，只需点击弹出框中的“关闭”按钮。

## 开发规划

- [ ] 更友好的使用界面
- [ ] 支持 多二维码识别
- [ ] 兼容 更多的页面图片标签

### 更新日志

- **2023/10/25 HoverQR PalV0.2.0 版本更新**
  - 修复 已知BUG
  - 优化 页面图像标签识别

## 鸣谢

[jsQR](https://github.com/cozmo/jsQR) 是一个十分优秀的 javascript 二维码库，它提供了识别二维码的核心功能。

## License 说明

HoverQR Pal 遵循 [Apache License 2.0 开源许可证](LICENSE)。
