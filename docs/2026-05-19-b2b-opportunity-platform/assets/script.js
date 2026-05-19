const icons = {
  arrowRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
  barChart: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M7 16v-5"></path><path d="M12 16V7"></path><path d="M17 16v-8"></path></svg>',
  calendarCheck: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>',
  clock: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>',
  close: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  download: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>',
  edit: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>',
  file: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>',
  image: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path></svg>',
  loader: '<svg class="icon small spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M21 12a9 9 0 0 1-9 9"></path><path d="M3 12a9 9 0 0 1 9-9"></path></svg>',
  plus: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
  search: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',
  sparkles: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2Z"></path><path d="M5 3v4"></path><path d="M3 5h4"></path><path d="M19 17v4"></path><path d="M17 19h4"></path></svg>',
  target: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
  trash: '<svg class="icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="m19 6-1 14H6L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>',
  trending: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"></path><path d="M16 7h6v6"></path></svg>',
  upload: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M17 8 12 3 7 8"></path><path d="M12 3v12"></path></svg>',
  userCheck: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m16 11 2 2 4-4"></path></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  zap: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46L12 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46L12 14Z"></path></svg>'
};

const state = {
  activeTab: "系統升級簡介",
  showAddForm: false,
  isGenerating: false,
  scheduleView: "scheduled",
  leadQuery: "",
  leadLevel: "",
  companyData: {
    desc: "專注於高階製程設備研發，提供全球領先的解決方案，協助國際買主導入自動化檢測與智慧工廠場域。",
    products: "自動化光學檢測機台 (AOI)、智慧工廠整合系統",
    tags: ["#AI檢測", "#海外代理商"]
  },
  products: [
    {
      name: "次世代 AOI 檢測機",
      category: "實體設備",
      catalog: "PDF (2MB)",
      date: "2026-05-18",
      status: "展示中"
    }
  ]
};

const tabs = [
  { name: "系統升級簡介", m: "M1" },
  { name: "商機總覽", m: "M3" },
  { name: "潛在買主追蹤", m: "M2" },
  { name: "公司與產品管理", m: "M1" },
  { name: "MATCH! 媒合行程", m: "M2" }
];

const leads = [
  { id: 1, name: "山田健太", title: "採購總監", company: "Tokyo Electron", country: "日本", score: 94, level: "A級", interactions: "瀏覽 30 分、下載型錄、回訪產品頁", lastActive: "10 分鐘前" },
  { id: 2, name: "김민준", title: "研發經理", company: "Samsung Elec.", country: "韓國", score: 87, level: "A級", interactions: "實體掃碼 2 次、瀏覽解決方案", lastActive: "25 分鐘前" },
  { id: 3, name: "Olivia Chen", title: "Business Development", company: "Lam Research", country: "美國", score: 73, level: "B級", interactions: "收藏攤位、檢視公司簡介", lastActive: "1 小時前" }
];

const schedules = {
  scheduled: [
    ["2026-05-20 (三) 14:00", "Samsung Elec.", "김민준 (研發經理)", "展場 VIP 洽談室 B", "即將到來", "變更時間"],
    ["2026-05-21 (四) 10:30", "Tokyo Electron", "山田健太 (採購總監)", "線上會議室 2", "已確認", "查看詳情"],
    ["2026-05-22 (五) 15:00", "Lam Research", "Olivia Chen", "展位 A-082", "已確認", "查看詳情"]
  ],
  inbound: [
    ["2026-05-20 (三) 16:00", "ASML", "Daan Jansen (Sourcing Lead)", "買主建議：線上會議", "待回覆", "接受邀請"],
    ["2026-05-21 (四) 13:30", "Applied Materials", "Rachel Wu", "展場 VIP 洽談室 A", "待回覆", "接受邀請"]
  ],
  pending: [
    ["2026-05-22 (五) 11:00", "Tokyo Electron", "山田健太 (採購總監)", "線上會議室 1", "等待買主回覆", "撤回邀請"]
  ]
};

function badge(m) {
  return `<span class="badge ${m.toLowerCase()}">${m}</span>`;
}

function icon(name) {
  return icons[name] || "";
}

function setState(next) {
  Object.assign(state, next);
  render();
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="app-shell">
      <header class="milestone-strip">
        <div class="legend">
          <span class="legend-title">${icon("target")} 專案導入階段圖例</span>
          <span class="legend-item"><span class="legend-dot dot-m1"></span>M1：展商資料建置</span>
          <span class="legend-item"><span class="legend-dot dot-m2"></span>M2：買家追蹤、行事曆</span>
          <span class="legend-item"><span class="legend-dot dot-m3"></span>M3：AI 引擎、戰情總覽</span>
        </div>
      </header>

      <nav class="tab-zone" aria-label="主要功能頁籤">
        <div class="tabs">
          ${tabs.map((tab) => `
            <button class="tab-button ${state.activeTab === tab.name ? "is-active" : ""}" data-tab="${tab.name}">
              ${tab.name}${badge(tab.m)}
            </button>
          `).join("")}
        </div>
      </nav>

      <section class="page-bar">
        <div class="page-bar-inner">
          <h1 class="page-title">${state.activeTab}</h1>
          <div class="actions">
            <button class="button" data-action="import-excel">${icon("download")}匯入 Excel ${badge("M1")}</button>
            ${state.activeTab === "公司與產品管理" && !state.showAddForm ? `
              <button class="button primary" data-action="show-product-form">${icon("plus")}新增產品/型錄 ${badge("M1")}</button>
            ` : ""}
          </div>
        </div>
      </section>

      <main class="content">
        ${renderActivePage()}
      </main>
    </div>
  `;

  bindEvents();
}

function renderActivePage() {
  if (state.activeTab === "系統升級簡介") return renderUpgradeIntro();
  if (state.activeTab === "商機總覽") return renderDashboard();
  if (state.activeTab === "潛在買主追蹤") return renderLeadsTracking();
  if (state.activeTab === "公司與產品管理") return renderCompanyAndProducts();
  if (state.activeTab === "MATCH! 媒合行程") return renderMatchSchedule();
  return "";
}

function renderUpgradeIntro() {
  return `
    <section class="surface">
      <div class="intro-hero">
        <h2>${icon("zap")}從「求職平台」到「B2B 商機平台」的進化</h2>
        <p>調整方向是把展商後台的重心從職缺與履歷流程，轉向全年展示、買主互動、MATCH! 會議與 AI lead scoring。</p>
      </div>
      <div class="intro-grid">
        <article class="intro-panel blue">
          <h3>${icon("arrowRight")}功能置換了什麼？</h3>
          <ul class="feature-list">
            <li class="swap-row">
              <span class="removed">新增職缺</span>${icon("arrowRight")}
              <div><strong>公司與產品管理</strong><p>不再發布職缺，改為上架產品、型錄與建立數位展間。</p></div>
            </li>
            <li class="swap-row">
              <span class="removed">履歷狀態表</span>${icon("arrowRight")}
              <div><strong>潛在買主追蹤</strong><p>不再單純看應徵者，改為追蹤高意願買主的互動軌跡。</p></div>
            </li>
          </ul>
        </article>

        <article class="intro-panel rose">
          <h3>${icon("trash")}拿掉了什麼？</h3>
          <ul class="feature-list">
            <li class="feature-row">
              <strong class="feature-title">${icon("trash")}周邊供應商</strong>
              <p>此模組不屬於參展商核心商機需求，已從展商後台移除，介面聚焦在買主互動。</p>
            </li>
            <li class="feature-row">
              <strong class="feature-title">${icon("trash")}冗餘的求職流程</strong>
              <p>移除活動申請、問卷填寫、教學手冊等非 B2B 商機必要頁籤。</p>
            </li>
          </ul>
        </article>

        <article class="intro-panel green">
          <h3>${icon("calendarCheck")}哪些是全新開發？</h3>
          <ul class="feature-list">
            <li class="feature-row">
              <strong class="feature-title">${icon("calendarCheck")}MATCH! 媒合行程</strong>
              <p>新增雙向會議預約機制，支援防衝堂檢查、線上與實體行事曆。</p>
            </li>
            <li class="feature-row">
              <strong class="feature-title">${icon("barChart")}商機戰情 Dashboard</strong>
              <p>新增漏斗與互動趨勢圖，並推播「買主剛下載型錄」等即時事件。</p>
            </li>
          </ul>
        </article>

        <article class="intro-panel purple">
          <h3>${icon("sparkles")}系統多了什麼強大武器？</h3>
          <ul class="feature-list">
            <li class="feature-row">
              <strong class="feature-title">${icon("target")}動態 AI 算分 Lead Score</strong>
              <p>自動收集買主停留時間與掃碼次數，動態產生 A/B/C 意願等級。</p>
            </li>
            <li class="feature-row">
              <strong class="feature-title">${icon("sparkles")}AI 一鍵優化文案</strong>
              <p>展商上架產品後，系統可自動生成公司簡介與精準媒合標籤。</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  `;
}

function renderDashboard() {
  const stats = [
    ["攤位總訪客數", "1,247", "線上 820 | 實體 427", "blue", "users"],
    ["A 級高意願買主", "189", "較昨日成長 15%", "green", "userCheck"],
    ["待處理 MATCH!", "12", "需要您的回覆", "orange", "trending"],
    ["已排定會議", "5", "本週實體與線上", "purple", "calendarCheck"]
  ];
  const bars = [40, 60, 45, 80, 100, 75, 90];

  return `
    <section>
      <div class="stats-grid">
        ${stats.map(([label, value, subtitle, color, iconName]) => `
          <article class="stat-card ${color}">
            ${icon(iconName)}
            <div class="stat-value">${value}</div>
            <div class="stat-label">${label}</div>
            <div class="stat-subtitle">${subtitle}</div>
          </article>
        `).join("")}
      </div>

      <div class="dashboard-grid">
        <article class="surface">
          <div class="surface-header">
            <h2 class="surface-title">${icon("barChart")}買主互動趨勢（近七日）${badge("M3")}</h2>
          </div>
          <div class="surface-body">
            <div class="chart">
              ${bars.map((height, index) => `
                <div class="bar-group">
                  <div class="bar" style="height:${height}%"><span>${height * 12} 次互動</span></div>
                  <div class="bar-date">5/${12 + index}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </article>

        <article class="surface">
          <div class="surface-header">
            <h2 class="surface-title">${icon("trending")}最新商機動態事件推播 ${badge("M2")}</h2>
          </div>
          <div class="surface-body">
            <div class="event-list">
              <div class="event">
                <span class="event-mark blue">${icon("userCheck")}</span>
                <p><strong>Tokyo Electron（山田健太）</strong> 的 Lead Score 達到 A 級！<small>10 分鐘前 · 觸發原因：連續瀏覽產品頁 30 分鐘</small></p>
              </div>
              <div class="event">
                <span class="event-mark purple">${icon("calendarCheck")}</span>
                <p><strong>Samsung Elec.</strong> 接受了您的 MATCH! 會議邀請。<small>45 分鐘前 · 會議時間：2026-05-20 14:00</small></p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderLeadsTracking() {
  const query = state.leadQuery.trim().toLowerCase();
  const rows = leads.filter((lead) => {
    const matchesQuery = !query || `${lead.name} ${lead.company} ${lead.country}`.toLowerCase().includes(query);
    const matchesLevel = !state.leadLevel || lead.level === state.leadLevel;
    return matchesQuery && matchesLevel;
  });

  return `
    <div class="surface" style="margin-bottom:20px">
      <div class="surface-header">
        <h2 class="surface-title">篩選條件 ${badge("M2")}</h2>
      </div>
      <div class="filter-row">
        <div class="field grow">
          <label for="lead-query">買主名稱或公司</label>
          <div class="input-wrap">
            ${icon("search")}
            <input id="lead-query" type="search" value="${escapeHtml(state.leadQuery)}" placeholder="搜尋買主名稱或公司">
          </div>
        </div>
        <div class="field">
          <label for="lead-level">意願等級</label>
          <select id="lead-level">
            <option value="">全部等級</option>
            <option value="A級" ${state.leadLevel === "A級" ? "selected" : ""}>A 級（高意願）</option>
            <option value="B級" ${state.leadLevel === "B級" ? "selected" : ""}>B 級（潛在）</option>
          </select>
        </div>
        <button class="button primary" data-action="apply-lead-filter">${icon("search")}搜尋</button>
      </div>
    </div>

    <section class="surface">
      <div class="surface-header">
        <h2 class="surface-title">買家名單與互動總覽 ${badge("M2")}</h2>
        <span class="hint-line">A級表示高度採購意願；B級表示持續關注中。</span>
      </div>
      <div class="surface-body table-wrap">
        <table>
          <thead>
            <tr>
              <th>買主姓名</th>
              <th>所屬公司</th>
              <th>AI 評分 Lead Score ${badge("M3")}</th>
              <th>互動指標</th>
              <th>最近互動時間</th>
              <th style="text-align:center">操作 ${badge("M2")}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((lead) => `
              <tr>
                <td><strong>${lead.name}</strong><span class="subline">${lead.title}</span></td>
                <td>${lead.company}<span class="subline">${lead.country}</span></td>
                <td class="score">${lead.score}（${lead.level}）</td>
                <td class="muted">${lead.interactions}</td>
                <td class="muted">${lead.lastActive}</td>
                <td style="text-align:center"><button class="button ghost-blue" data-action="send-match">${icon("calendarCheck")}發送 MATCH!</button></td>
              </tr>
            `).join("") || `<tr><td colspan="6"><div class="empty">沒有符合篩選條件的買主。</div></td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderCompanyAndProducts() {
  if (state.showAddForm) return renderProductForm();

  return `
    <div class="surface" style="margin-bottom:20px">
      ${state.isGenerating ? `<div class="overlay"><div class="overlay-pill">${icon("loader")}正在參考產品資料，優化您的文案...</div></div>` : ""}
      <div class="surface-header">
        <h2 class="surface-title">公司基本資料建置 ${badge("M1")}
          <button class="button ai" data-action="ai-generate" ${state.isGenerating ? "disabled" : ""}>
            ${state.isGenerating ? icon("loader") : icon("sparkles")}${state.isGenerating ? "AI 分析產品中..." : "AI 一鍵優化簡介"}
          </button>
          ${badge("M3")}
        </h2>
        <button class="button">${icon("edit")}編輯 ${badge("M1")}</button>
      </div>
      <div class="surface-body">
        <div class="company-layout">
          <div class="logo-box">${icon("image")}<span>未上傳單位標誌</span></div>
          <div class="detail-grid">
            <div class="detail-row">
              <div class="detail-label">公司名稱</div>
              <div class="detail-value"><strong>TEST_展商_Tech</strong></div>
              <div class="detail-label">產業別</div>
              <div class="detail-value">半導體設備</div>
            </div>
            <div class="detail-row wide">
              <div class="detail-label">公司簡介</div>
              <div class="detail-value">${state.companyData.desc}${state.companyData.desc.includes("AI 生成") && !state.isGenerating ? `<span class="ai-dot" aria-hidden="true"></span>` : ""}</div>
            </div>
            <div class="detail-row wide">
              <div class="detail-label">主要產品</div>
              <div class="detail-value product">${state.companyData.products}</div>
            </div>
            <div class="detail-row wide">
              <div class="detail-label">尋找夥伴條件<br><span class="subline">媒合標籤</span></div>
              <div class="detail-value"><div class="tags">${state.companyData.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="surface">
      <div class="surface-header">
        <h2 class="surface-title">已發布產品與型錄 ${badge("M1")}</h2>
        <button class="button primary" data-action="show-product-form">${icon("plus")}新增產品/型錄 ${badge("M1")}</button>
      </div>
      <div class="surface-body table-wrap">
        <table>
          <thead>
            <tr>
              <th>產品名稱</th>
              <th>分類</th>
              <th style="text-align:center">數位型錄</th>
              <th>發布時間</th>
              <th style="text-align:center">狀態</th>
            </tr>
          </thead>
          <tbody>
            ${state.products.map((product) => `
              <tr>
                <td><strong>${product.name}</strong></td>
                <td class="muted">${product.category}</td>
                <td style="text-align:center"><span class="status blue">${icon("file")}${product.catalog}</span></td>
                <td class="muted">${product.date}</td>
                <td style="text-align:center"><span class="status green">${product.status}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderProductForm() {
  return `
    <section class="surface">
      <div class="surface-header">
        <h2 class="surface-title">新增產品/型錄 ${badge("M1")}</h2>
        <button class="icon-button" title="關閉" aria-label="關閉" data-action="hide-product-form">${icon("close")}</button>
      </div>
      <div class="surface-body">
        <form class="form-shell" id="product-form">
          <div class="form-grid">
            <div class="field">
              <label for="product-name"><span class="required">*</span>產品/服務名稱</label>
              <input id="product-name" required placeholder="請輸入產品名稱">
            </div>
            <div class="form-two">
              <div class="field">
                <label for="product-category">產品分類</label>
                <select id="product-category">
                  <option>實體設備</option>
                  <option>軟體系統</option>
                  <option>技術服務</option>
                </select>
              </div>
              <div class="field">
                <label for="product-tags">尋找夥伴/買主標籤</label>
                <input id="product-tags" placeholder="例如：AI伺服器, 散熱模組">
              </div>
            </div>
            <div class="notice">
              <div class="notice-title">${icon("target")}上傳與展示提醒</div>
              <ul>
                <li>產品型錄 PDF 檔案大小不得超過 10MB。</li>
                <li>所有上架的產品與型錄均可於 365 平台全年展示。</li>
              </ul>
            </div>
            <div class="field">
              <label><span class="required">*</span>數位型錄上傳（PDF）</label>
              <div class="upload-zone">${icon("upload")}<span>點擊上傳檔案，或將檔案拖曳至此</span></div>
            </div>
          </div>
          <div class="form-actions">
            <button class="button" type="button" data-action="hide-product-form">取消</button>
            <button class="button primary" type="submit">儲存並發布</button>
          </div>
        </form>
      </div>
    </section>
  `;
}

function renderMatchSchedule() {
  const viewLabels = {
    scheduled: "已排定的會議 (3)",
    inbound: "我收到的邀請 (2)",
    pending: "等待回覆中 (1)"
  };
  const rows = schedules[state.scheduleView];

  return `
    <section class="surface">
      <div class="surface-header">
        <div class="schedule-tabs" role="tablist" aria-label="MATCH! 行程狀態">
          ${Object.entries(viewLabels).map(([key, label]) => `
            <button class="schedule-tab ${state.scheduleView === key ? "is-active" : ""}" data-schedule-view="${key}" role="tab">${label}</button>
          `).join("")}
        </div>
      </div>
      <div class="surface-body table-wrap">
        <table>
          <thead>
            <tr>
              <th>日期與時間</th>
              <th>買主 / 單位</th>
              <th>會議地點</th>
              <th style="text-align:center">狀態</th>
              <th style="text-align:center">操作 ${badge("M2")}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((row) => `
              <tr>
                <td><strong style="display:inline-flex;align-items:center;gap:7px">${icon("clock")}${row[0]}</strong></td>
                <td>${row[1]}<span class="subline">${row[2]}</span></td>
                <td class="muted">${row[3]}</td>
                <td style="text-align:center"><span class="status ${row[4].includes("待") || row[4].includes("等待") ? "gray" : "green"}">${row[4]}</span></td>
                <td style="text-align:center"><button class="button">${row[5]}</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => setState({ activeTab: button.dataset.tab, showAddForm: false }));
  });

  document.querySelectorAll("[data-action='show-product-form']").forEach((button) => {
    button.addEventListener("click", () => setState({ showAddForm: true }));
  });

  document.querySelectorAll("[data-action='hide-product-form']").forEach((button) => {
    button.addEventListener("click", () => setState({ showAddForm: false }));
  });

  document.querySelectorAll("[data-schedule-view]").forEach((button) => {
    button.addEventListener("click", () => setState({ scheduleView: button.dataset.scheduleView }));
  });

  const leadQuery = document.querySelector("#lead-query");
  if (leadQuery) {
    leadQuery.addEventListener("input", (event) => {
      state.leadQuery = event.target.value;
      render();
      const nextInput = document.querySelector("#lead-query");
      nextInput.focus();
      nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
    });
  }

  const leadLevel = document.querySelector("#lead-level");
  if (leadLevel) {
    leadLevel.addEventListener("change", (event) => setState({ leadLevel: event.target.value }));
  }

  document.querySelectorAll("[data-action='send-match']").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = "MATCH! 媒合行程";
      state.scheduleView = "pending";
      render();
    });
  });

  document.querySelectorAll("[data-action='ai-generate']").forEach((button) => {
    button.addEventListener("click", handleAIGenerate);
  });

  const form = document.querySelector("#product-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#product-name").value.trim() || "新產品型錄";
      const category = document.querySelector("#product-category").value;
      state.products = [
        {
          name,
          category,
          catalog: "PDF (待審)",
          date: "2026-05-19",
          status: "展示中"
        },
        ...state.products
      ];
      state.showAddForm = false;
      render();
    });
  }
}

function handleAIGenerate() {
  if (state.isGenerating) return;
  state.isGenerating = true;
  render();
  window.setTimeout(() => {
    state.companyData = {
      desc: "【AI 生成】本公司致力於半導體高階檢測設備研發。結合深度學習與精密光學技術，為全球客戶提供次世代 AOI 檢測解決方案，有效提升產線良率並降低生產成本，是您實現智慧製造的最佳夥伴。",
      products: "次世代 AOI 檢測機、AI 視覺瑕疵檢測系統、晶圓級光學量測模組",
      tags: ["#AOI檢測設備", "#半導體智慧製造", "#先進封裝檢測", "#技術代理合作"]
    };
    state.isGenerating = false;
    render();
  }, 1200);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

render();
