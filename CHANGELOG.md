# Changelog

All notable changes to this project are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.0] - 2026-11-24

First release.

### Added

- Static catalog page (`index.html`, `css/style.css`, `js/app.js`) with no build step and no dependencies.
- Ten licenses in `data/licenses.js`: MIT, ISC, BSD-2-Clause, BSD-3-Clause, Apache-2.0, Unlicense, MPL-2.0, LGPL-3.0-only, GPL-3.0-only, AGPL-3.0-only.
- Search by name, SPDX ID, summary, tag, or license text.
- Filter by family: permissive, weak copyleft, strong copyleft.
- Expand or collapse each license, with Expand all and Collapse all buttons.
- Deep links such as `index.html#mit`.
- Light and dark mode.
- `data/texts.js`, a fill-in file for full license texts keyed by SPDX ID. Texts written in `licenses.js` take priority.
- Language switcher with English, Español, and 简体中文 (`data/i18n.js`). It translates the interface, family names, tags, and summaries. License texts stay in English. The choice is saved in the browser.
- "Generate and Download LICENSE" button for each license. It builds the file in the browser (Blob and a temporary `<a download>` link, no network requests) and saves a UTF-8 file named `LICENSE`.
- Copyright holder and Year fields that fill in placeholders: `<year>`, `<copyright holder(s)>`, `<owner>`, `<name of author>`, `[yyyy]`, `[name of copyright owner]`, `[fullname]`.
- `README.md` with features, structure, and instructions for adding a license or a language.
- `LICENSE` (GPL-3.0) with copyright notices in `README.md` and in the source headers of `index.html`, `app.js`, and `style.css`.

### Fixed

- Edge added a `.txt` suffix to the downloaded file. The download now uses the `application/octet-stream` type, so the file is saved as `LICENSE`.

### Known limitations

- The Chinese README translation is not part of this release.
