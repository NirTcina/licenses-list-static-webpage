# Open-Source License Catalog / 开源协议整合静态网页

## Overview / 项目简介

A static website for browsing open-souce licenses. Search, filter by family, expand or collapse each license, and switch languages. No build step and no dependencies.

一个可以用于浏览开源许可的静态网站。可以搜索、按类别筛选，展开或折叠每个许可证，可切换语言。无需构建步骤，无依赖项。
:3

## Feature / 功能特性

- Search by name, SPDX ID, summary, tag, or license text
- Filter by family: permissive, weak copylefft, strong copyleft
- Expand or collapse one license, or all of them
- Language switcher (English, Español, 简体中文)
- Deep links such as `index.html#mit`
- Light and dark mode

- 按名称，SPDX ID，标签或许可内容搜索
- 按类型过滤：宽松、弱 Copyleft、强 Copyleft
- 展开或收起每个许可证，或全部许可证
- 语言切换（English, Español, 简体中文）
- 深度链接，如 `index.html#mit`
- 浅色和深色模式

## Run Locally / 本地运行

Open `index.html` in a browser. No server is needed.

直接使用浏览器打开 `index.html`，不需要服务器。

## Project structure / 项目结构

```
licenses-list-static-webpage/src/
├── index.html         page shell
├── css/style.css      styles
├── js/app.js          search, filters, language switching
└── data/
    ├── licenses.js    license list (name, SPDX ID, family, tags, summary)
    ├── texts.js       full license texts, keyed by SPDX ID
    └── i18n.js        translations
```

Script order in `index.html` matters: `licenses.js`, `texts.js`, `i18n.js`, then `app.js`.

index.html 中的脚本顺序较为重要：先 `licenses.js`, 后 `texts.js`, 再是 `i18n.js`，最后是 `app.js`

## Add a license / 添加新的许可

1. Add an object to `LICENSES` in `data/licenses.js`:
   ```js
   { name: "Example License", spdx: "Example-1.0", family: "permissive",
     summary: "One-sentence summary.",
     tags: ["Commercial use", "Modify"],
     url: "https://spdx.org/licenses/Example-1.0.html", text: "" }
   ```
2. Paste the full text into `data/texts.js` under the same SPDX ID.
3. Add a summary for each language in `data/i18n.js` (missing ones fall back to English).

1. 在 `data/licenses.js` 中向 `LICENSES` 添加对象：
   ```js
   { name: "Example License", spdx: "Example-1.0", family: "permissive",
     summary: "One-sentence summary.",
     tags: ["Commercial use", "Modify"],
     url: "https://spdx.org/licenses/Example-1.0.html", text: "" }
   ```
2. 将全文粘贴至 `data/texts.js` 相同的 SPDX ID 下。
3. 在 `data/i18n.js` 中为每种语言添加摘要（缺失的则会回归为英语）。

## Add a language / 添加新的语言

Copy a language block in `data/i18n.js`, change its key (for example `fr`), and translate the values. Anything left out falls back to English. The new language appears in the menu automatically.

复制 `data/i18n.js` 中的语言块，修改它的键（例如 `fr`），然后翻译里面的值。没翻译的部分会默认显示英文。新语言会自动出现在菜单里。

## Notes / 说明

- Summaries are informational, not legal advice.
- License texts are shown in their original English, which is the authoritative version.
- Official license texts: <https://spdx.org/licenses/>

- 摘要仅供参考，不构成法律建议。
- 许可证文本以原始英文显示，英文版本为权威版本。
- 官方许可证文本：<https://spdx.org/licenses/>

## Contributing / 贡献

Issues and pull requests are welcome. Please keep summaries to one sentence and link the official text.

欢迎提出问题和提交拉取请求。请将摘要保持在一句话内，并链接官方文本。

## License / 许可证

Copyright (C) 2026 Tsuneyo

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3, as published by the Free Software Foundation. It is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY. See the [LICENSE](LICENSE) file for details.

The license texts displayed on the site are the property of their respective authors.

版权所有 (C) 2026 Tsuneyo

本程序是自由软件：您可以根据自由软件基金会发布的 GNU 通用公共许可证第 3 版的条款重新分发和/或修改它。该程序是希望对您有用而发布的，但不提供任何保证。详情请参阅 [LICENSE](LICENSE) 文件。

网站上显示的许可证文本属于各自的作者。
