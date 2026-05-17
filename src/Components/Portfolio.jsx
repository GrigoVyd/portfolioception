import React, { useState, useMemo } from "react";
import { items, TAGS, TYPES, GOALS } from "../data/portfolioData";

const generateCV = (selectedGoal) => {
  const filtered = selectedGoal
    ? items.filter((i) => i.goals.includes(selectedGoal))
    : items.filter((i) => i.highlight);

  const goalLabel = selectedGoal ? GOALS[selectedGoal] : "General (Featured)";

  const typeOrder = ["experience", "education", "project", "award", "event"];
  const typeLabels = {
    experience: "Work Experience",
    education: "Education",
    project: "Projects & Research",
    award: "Awards & Recognition",
    event: "Events & Activities",
  };

  const grouped = {};
  typeOrder.forEach((t) => {
    const g = filtered.filter((i) => i.type === t);
    if (g.length) grouped[t] = g;
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <title>CV – Grigorii Vydrevich (${goalLabel})</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Montserrat', sans-serif;
      margin: 0; padding: 36px 48px;
      color: #1a1a1a; font-size: 12px; line-height: 1.55;
    }
    .cv-header { border-bottom: 2px solid #4E567E; padding-bottom: 12px; margin-bottom: 20px; }
    h1 { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 400; margin: 0 0 2px; color: #1a1a1a; }
    .cv-title { color: #4E567E; font-size: 0.9rem; font-weight: 600; margin: 0 0 2px; }
    .cv-goal-badge {
      display: inline-block; margin-top: 6px;
      background: #EDE9FE; color: #5B21B6;
      padding: 2px 10px; border-radius: 12px;
      font-size: 0.7rem; font-weight: 600;
    }
    .cv-contact { font-size: 0.75rem; color: #555; margin-top: 4px; }
    h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.1rem; color: #4E567E;
      border-bottom: 1px solid #c5cadf;
      margin: 22px 0 10px; font-weight: 600;
      padding-bottom: 3px; text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .item { display: flex; gap: 14px; margin-bottom: 12px; page-break-inside: avoid; }
    .item-date { min-width: 80px; color: #888; font-size: 0.75rem; padding-top: 1px; text-align: right; }
    .item-body { flex: 1; }
    .item-title { font-weight: 600; font-size: 0.85rem; margin: 0 0 1px; color: #1a1a1a; }
    .item-sub { color: #555; font-size: 0.75rem; margin: 0 0 4px; }
    .item-desc { color: #444; font-size: 0.78rem; margin: 0; }
    .tags { display: flex; gap: 3px; flex-wrap: wrap; margin: 3px 0 4px; }
    .tag {
      font-size: 0.6rem; padding: 1px 6px; border-radius: 8px;
      background: #E0E7FF; color: #3730A3; font-weight: 600;
    }
    @media print {
      body { margin: 0; padding: 20px 32px; }
      h2 { page-break-after: avoid; }
    }
  </style>
</head>
<body>
  <div class="cv-header">
    <h1>Grigorii Vydrevich</h1>
    <div class="cv-title">Physicist and Machine Learning Engineer</div>
    <div class="cv-contact">grigory.vydrevich@gmail.com · linkedin.com/in/grigorii-vydrevich · Aachen, Germany</div>
    <div class="cv-goal-badge">Tailored for: ${goalLabel}</div>
  </div>
  ${Object.entries(grouped)
    .map(
      ([type, typeItems]) => `
    <h2>${typeLabels[type] || type}</h2>
    ${typeItems
      .map(
        (item) => `
      <div class="item">
        <div class="item-date">${item.date}</div>
        <div class="item-body">
          <div class="item-title">${item.title}</div>
          <div class="item-sub">${item.subtitle}</div>
          <div class="tags">${item.tags
            .map(
              (t) =>
                `<span class="tag">${
                  (TAGS[t] && TAGS[t].label) || t
                }</span>`
            )
            .join("")}</div>
          <div class="item-desc">${item.description}</div>
        </div>
      </div>`
      )
      .join("")}`
    )
    .join("")}
  <script>setTimeout(() => window.print(), 400);<\/script>
</body>
</html>`;

  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
  }
};

const Portfolio = () => {
  const [activeTagFilters, setActiveTagFilters] = useState(new Set());
  const [activeTypeFilters, setActiveTypeFilters] = useState(new Set());
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [highlightOnly, setHighlightOnly] = useState(false);

  const toggleTag = (tag) =>
    setActiveTagFilters((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });

  const toggleType = (type) =>
    setActiveTypeFilters((prev) => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });

  const toggleGoal = (goal) =>
    setSelectedGoal((prev) => (prev === goal ? null : goal));

  const clearAll = () => {
    setActiveTagFilters(new Set());
    setActiveTypeFilters(new Set());
    setSelectedGoal(null);
    setHighlightOnly(false);
  };

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        if (highlightOnly && !item.highlight) return false;
        if (
          activeTagFilters.size > 0 &&
          !item.tags.some((t) => activeTagFilters.has(t))
        )
          return false;
        if (activeTypeFilters.size > 0 && !activeTypeFilters.has(item.type))
          return false;
        if (selectedGoal && !item.goals.includes(selectedGoal)) return false;
        return true;
      }),
    [activeTagFilters, activeTypeFilters, selectedGoal, highlightOnly]
  );

  const hasFilters =
    activeTagFilters.size > 0 ||
    activeTypeFilters.size > 0 ||
    selectedGoal ||
    highlightOnly;

  return (
    <section className="padding" id="portfolio">
      <div className="portfolio-wrap">
        <h2 className="portfolio-heading">Portfolio &amp; Experience</h2>
        <p className="portfolio-subheading">
          {items.length} entries · filter by theme, type, or application goal ·
          click any tag to filter
        </p>

        {/* ── Filter panel ─────────────────────────────────────── */}
        <div className="filter-panel">

          {/* Type row */}
          <div className="filter-row">
            <span className="filter-label">Type</span>
            <div className="filter-bubbles">
              {Object.entries(TYPES).map(([key, val]) => (
                <button
                  key={key}
                  className={`fb-type${activeTypeFilters.has(key) ? " fb--active" : ""}`}
                  style={{ "--fc": val.color }}
                  onClick={() => toggleType(key)}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme row */}
          <div className="filter-row">
            <span className="filter-label">Theme</span>
            <div className="filter-bubbles">
              {Object.entries(TAGS).map(([key, val]) => (
                <button
                  key={key}
                  className={`fb-tag${activeTagFilters.has(key) ? " fb--active" : ""}`}
                  style={{ "--fc": val.color, "--fbg": val.bg }}
                  onClick={() => toggleTag(key)}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          {/* Goal row */}
          <div className="filter-row filter-row--goal">
            <span className="filter-label">CV&nbsp;goal</span>
            <div className="filter-bubbles">
              {Object.entries(GOALS).map(([key, label]) => (
                <button
                  key={key}
                  className={`fb-goal${selectedGoal === key ? " fb--active" : ""}`}
                  onClick={() => toggleGoal(key)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="filter-actions">
              <button
                className={`fb-star${highlightOnly ? " fb--active" : ""}`}
                onClick={() => setHighlightOnly((v) => !v)}
                title="Show featured / starred items only"
              >
                ★ Featured
              </button>
              {hasFilters && (
                <button className="fb-clear" onClick={clearAll}>
                  Clear all
                </button>
              )}
              <button
                className="fb-download"
                onClick={() => generateCV(selectedGoal)}
              >
                ↓ Download CV
                {selectedGoal ? ` · ${GOALS[selectedGoal]}` : ""}
              </button>
            </div>
          </div>
        </div>

        {/* Result count */}
        <div className="portfolio-count">
          Showing {filteredItems.length} of {items.length}
        </div>

        {/* ── Timeline list ─────────────────────────────────────── */}
        <div className="tl-list">
          {filteredItems.length === 0 && (
            <div className="tl-empty">No items match the current filters.</div>
          )}
          {filteredItems.map((item) => {
            const typeInfo = TYPES[item.type];
            return (
              <div
                key={item.id}
                className={`tl-item${item.highlight ? " tl-item--star" : ""}`}
              >
                {/* Left: date + type badge */}
                <div className="tl-meta">
                  <span className="tl-date">{item.date}</span>
                  <span
                    className="tl-badge"
                    style={{
                      background: typeInfo.color + "18",
                      color: typeInfo.color,
                      border: `1px solid ${typeInfo.color}44`,
                    }}
                  >
                    {typeInfo.label}
                  </span>
                </div>

                {/* Right: content */}
                <div className="tl-content">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tl-title tl-title--link"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span className="tl-title">{item.title}</span>
                  )}
                  <p className="tl-sub">{item.subtitle}</p>
                  <div className="tl-tags">
                    {item.tags.map((tag) => {
                      const t = TAGS[tag];
                      return (
                        <button
                          key={tag}
                          className="tl-tag"
                          style={{
                            background: t.bg,
                            color: t.color,
                            borderColor: t.color + "55",
                          }}
                          onClick={() => toggleTag(tag)}
                          title={`Filter by ${t.label}`}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                  <p className="tl-desc">{item.description}</p>
                </div>

                {/* Star indicator */}
                {item.highlight && (
                  <span className="tl-star" title="Featured">★</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
