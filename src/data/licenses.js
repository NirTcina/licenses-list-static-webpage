// Add a license by adding one object. `text` may be empty; the page then links to `url`.
// Loaded with a <script> tag (not fetch) so index.html works when opened from disk.
const FAMILIES = { permissive: "Permissive", weak: "Weak copyleft", strong: "Strong copyleft" };

const LICENSES = [
  { name:"MIT License", spdx:"MIT", family:"permissive",
    summary:"Short and simple. Do almost anything, as long as you keep the copyright and license notice.",
    tags:["Commercial use","Modify","Distribute","Attribution required"],
    url:"https://spdx.org/licenses/MIT.html",
    text:`MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.` },

  { name:"ISC License", spdx:"ISC", family:"permissive",
    summary:"Functionally like MIT with simpler wording. Common in the Node.js ecosystem.",
    tags:["Commercial use","Modify","Distribute","Attribution required"],
    url:"https://spdx.org/licenses/ISC.html",
    text:`ISC License

Copyright (c) <year>, <copyright holder>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.` },

  { name:"BSD 2-Clause", spdx:"BSD-2-Clause", family:"permissive",
    summary:"Permissive. Keep the copyright notice in source and binary redistributions.",
    tags:["Commercial use","Modify","Distribute","Attribution required"],
    url:"https://spdx.org/licenses/BSD-2-Clause.html", text:"" },

  { name:"BSD 3-Clause", spdx:"BSD-3-Clause", family:"permissive",
    summary:"Like BSD 2-Clause, plus a ban on using the authors' names to endorse derived products.",
    tags:["Commercial use","Modify","Distribute","Attribution required","No endorsement"],
    url:"https://spdx.org/licenses/BSD-3-Clause.html", text:"" },

  { name:"Apache License 2.0", spdx:"Apache-2.0", family:"permissive",
    summary:"Permissive with an explicit patent grant. You must state changes and include the NOTICE file.",
    tags:["Commercial use","Modify","Distribute","Patent grant","Attribution required","State changes"],
    url:"https://spdx.org/licenses/Apache-2.0.html", text:"" },

  { name:"The Unlicense", spdx:"Unlicense", family:"permissive",
    summary:"Dedicates the work to the public domain. No conditions at all.",
    tags:["Commercial use","Modify","Distribute","No attribution"],
    url:"https://spdx.org/licenses/Unlicense.html",
    text:`This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>` },

  { name:"Mozilla Public License 2.0", spdx:"MPL-2.0", family:"weak",
    summary:"File-level copyleft. Changes to MPL files stay MPL; you can combine them with other code.",
    tags:["Commercial use","Modify","Distribute","Patent grant","Share-alike (per file)"],
    url:"https://spdx.org/licenses/MPL-2.0.html", text:"" },

  { name:"GNU LGPL 3.0", spdx:"LGPL-3.0-only", family:"weak",
    summary:"Library copyleft. You can link it from proprietary code, but changes to the library stay LGPL.",
    tags:["Commercial use","Modify","Distribute","Patent grant","Share-alike (library)"],
    url:"https://spdx.org/licenses/LGPL-3.0-only.html", text:"" },

  { name:"GNU GPL 3.0", spdx:"GPL-3.0-only", family:"strong",
    summary:"Strong copyleft. Distributed derivative works must be GPL with source available.",
    tags:["Commercial use","Modify","Distribute","Patent grant","Share-alike","Disclose source"],
    url:"https://spdx.org/licenses/GPL-3.0-only.html", text:"" },

  { name:"GNU AGPL 3.0", spdx:"AGPL-3.0-only", family:"strong",
    summary:"GPL plus a network clause: users of a hosted modified version can request the source.",
    tags:["Commercial use","Modify","Distribute","Patent grant","Share-alike","Network use = distribution"],
    url:"https://spdx.org/licenses/AGPL-3.0-only.html", text:"" }
];
