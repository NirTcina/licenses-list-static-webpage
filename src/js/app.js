/*
 * Copyright (C) 2026 Tsuneyo
 * SPDX-License-Identifier: GPL-3.0-only
 */
(() => {
  const $ = id => document.getElementById(id);
  const list = $("list"), q = $("q"), count = $("count"), empty = $("empty"),
        filters = $("filters"), langSel = $("lang");
  let family = "all", items = [], lang = "en";

  // ---- language helpers (missing translations fall back to English) ----
  const t = key => I18N[lang].ui[key] ?? I18N.en.ui[key];
  const tr = (group, key, fallback) => (I18N[lang][group] || {})[key] || fallback;

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function pickLanguage() {
    let saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    const browser = (navigator.language || "en").slice(0, 2);
    return [saved, browser].find(c => c && I18N[c]) || "en";
  }

  // ---- static page text ----
  function translatePage() {
    document.documentElement.lang = lang;
    document.title = t("title");
    document.querySelectorAll("[data-i18n]").forEach(n => { n.textContent = t(n.dataset.i18n); });
    q.placeholder = t("search");
    q.setAttribute("aria-label", t("search"));
    filters.setAttribute("aria-label", t("filterLabel"));
  }

  // ---- filter buttons ----
  function buildFilters() {
    filters.textContent = "";
    const options = [["all", t("all")], ...Object.keys(FAMILIES).map(k => [k, tr("families", k, FAMILIES[k])])];
    options.forEach(([key, label]) => {
      const b = el("button", null, label);
      b.type = "button";
      b.setAttribute("aria-pressed", key === family);
      b.onclick = () => { family = key; buildFilters(); apply(); };
      filters.append(b);
    });
  }

  // ---- license list (rebuilt on language change; open state is kept) ----
  function buildList() {
    const wasOpen = new Set(items.filter(i => i.d.open).map(i => i.d.id));
    list.textContent = "";
    items = LICENSES.map(l => {
      const summary = tr("summaries", l.spdx, l.summary);
      const tags = l.tags.map(g => tr("tags", g, g));
      const text = (l.text || TEXTS[l.spdx] || "").trim();

      const d = el("details", l.family);
      d.id = l.spdx.toLowerCase();
      d.open = wasOpen.has(d.id);
      const s = el("summary");
      s.append(el("span", "name", l.name), el("span", "spdx", l.spdx),
               el("span", "family", tr("families", l.family, FAMILIES[l.family])));
      const body = el("div", "body");
      body.append(el("p", null, summary));
      const ul = el("ul", "tags");
      tags.forEach(g => ul.append(el("li", null, g)));
      body.append(ul);
      if (text) body.append(el("pre", null, text));
      const a = el("a", null, text ? t("linkText") : t("linkNoText"));
      a.href = l.url; a.target = "_blank"; a.rel = "noopener";
      body.append(a);
      d.append(s, body);
      list.append(d);
      return { l, d, hay: [l.name, l.spdx, summary, l.summary, ...tags, ...l.tags, text].join(" ").toLowerCase() };
    });
  }

  function apply() {
    const terms = q.value.toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    items.forEach(({ l, d, hay }) => {
      const ok = (family === "all" || l.family === family) && terms.every(w => hay.includes(w));
      d.hidden = !ok;
      if (ok) shown++;
    });
    count.textContent = t("count").replace("{shown}", shown).replace("{total}", items.length);
    empty.hidden = shown > 0;
  }

  function setLanguage(code) {
    lang = I18N[code] ? code : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    langSel.value = lang;
    translatePage(); buildFilters(); buildList(); apply();
  }

  // ---- events ----
  Object.entries(I18N).forEach(([code, v]) => langSel.append(new Option(v.label, code)));
  langSel.onchange = () => setLanguage(langSel.value);
  q.addEventListener("input", apply);
  const setAll = open => items.forEach(({ d }) => { if (!d.hidden) d.open = open; });
  $("expand").onclick = () => setAll(true);
  $("collapse").onclick = () => setAll(false);

  // Deep link: index.html#mit opens that license
  function openHash() {
    const hit = items.find(i => "#" + i.d.id === location.hash.toLowerCase());
    if (hit) { hit.d.hidden = false; hit.d.open = true; hit.d.scrollIntoView(); }
  }
  addEventListener("hashchange", openHash);

  setLanguage(pickLanguage());
  openHash();
})();
