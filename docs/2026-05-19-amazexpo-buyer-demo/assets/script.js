const state = {
  isLoggedIn: false,
  activeTab: "home",
  isRecording: false,
  isMapView: false,
  regStep: 0,
  favoriteIds: [1],
  selectedTag: "全部",
  userData: {
    name: "",
    company: "",
    title: "",
    passcode: "",
  },
};

const mockExhibitors = [
  { id: 1, name: "台積電 TSMC", industry: "半導體製造", booth: "A01-A05", tags: ["3nm製程", "先進封裝"] },
  { id: 2, name: "日月光 ASE", industry: "封測", booth: "C01-C03", tags: ["CoWoS", "異質整合"] },
  { id: 3, name: "聯電 UMC", industry: "半導體製造", booth: "B02-B04", tags: ["22nm", "車用晶片"] },
  { id: 4, name: "京元電子 KYEC", industry: "IC測試", booth: "D03", tags: ["AI晶片測試", "5G"] },
];

const mockMatches = [
  { id: 1, exhibitor: "台積電 TSMC", status: "pending", time: "待確認", message: "邀請您討論先進封裝合作" },
  { id: 2, exhibitor: "日月光 ASE", status: "accepted", time: "明日 14:30", message: "已接受您的洽談邀請" },
];

const mockSchedule = [
  { id: 1, title: "台積電 洽談會議", time: "2026/09/03 10:30", location: "Hall 1 洽談室 A", type: "實體" },
  { id: 2, title: "大會 AI 趨勢論壇", time: "2026/09/03 13:00", location: "主舞台", type: "論壇" },
  { id: 3, title: "聯電 線上展示", time: "2026/09/04 09:00", location: "線上會議室", type: "線上" },
];

const tags = ["全部", "AI 推薦", "半導體", "智慧製造", "綠能永續"];
const app = document.querySelector("#app");

function icon(name, size = 18) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px" aria-hidden="true"></i>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getAIMessage() {
  if (!state.isLoggedIn) {
    if (state.regStep === 0) return "您好！我是大會 AI 助理。請點擊麥克風，用說的告訴我您的「姓名、公司與職稱」，我來幫您填表。";
    if (state.regStep === 1) return "資料已抓取！請再次點擊麥克風說「確認」，我將為您生成現場免票券的通關密語。";
    return "太棒了！您的通關密語是「白日依山盡」。現場只要報電話末五碼加這句密語即可極速通關！點擊下方按鈕進入平台吧。";
  }

  if (state.activeTab === "home") {
    return state.isMapView
      ? "正在為您顯示展場平面地圖！您可以點擊攤位格子，直接查看該展商資訊喔。"
      : `歡迎回來，${state.userData.name}！想找特定的展商，還是需要我為您導覽展場地圖？`;
  }

  if (state.activeTab === "favorites") return "這些是您收藏的關注展商，需要我幫您直接發送 MATCH 邀請給他們嗎？";
  if (state.activeTab === "match") return `您目前有 ${mockMatches.filter((match) => match.status === "pending").length} 個待確認的媒合邀請。AI 已根據您的興趣優化了推薦名單。`;
  if (state.activeTab === "schedule") return `您已排定 ${mockSchedule.length} 個行程。下一個行程是明日 10:30 的台積電洽談。`;
  if (state.activeTab === "profile") return "在這裡可以更新您的需求標籤。資料越完整，AI 推薦的展商會越精準喔！";
  return "有什麼我可以幫忙的嗎？";
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function render() {
  app.innerHTML = state.isLoggedIn ? renderApp() : renderLogin();
  bindEvents();
  refreshIcons();
}

function renderLogin() {
  const passcode = state.regStep === 2
    ? `<div class="field">
        <label>現場通關密語</label>
        <div class="passcode-card">${escapeHtml(state.userData.passcode)}</div>
      </div>`
    : "";

  const action = state.regStep < 2
    ? `<button class="voice-button ${state.isRecording ? "is-recording" : ""}" data-action="voice" ${state.isRecording ? "disabled" : ""} aria-label="開始語音輸入">
        ${state.isRecording ? icon("loader-2", 30) : icon("mic", 30)}
      </button>`
    : `<button class="primary-button" data-action="login">
        進入專屬數位展間 ${icon("search", 18)}
      </button>`;

  return `
    <main class="login-screen">
      <section class="login-shell" aria-label="AMAZEXPO 365 註冊 demo">
        <div class="login-brand">
          <h1>AMAZEXPO 365</h1>
          <p>全年展覽商機媒合平台</p>
        </div>
        <div class="login-content">
          <div class="ai-portrait">
            <span>AI</span>
            ${state.isRecording ? '<b class="recording-dot" aria-hidden="true"></b>' : ""}
          </div>
          <div class="ai-bubble">${escapeHtml(getAIMessage())}</div>
          <div class="form-stack">
            <div class="field">
              <label for="buyer-name">姓名</label>
              <input id="buyer-name" readonly value="${escapeHtml(state.userData.name)}" placeholder="AI 自動萃取中...">
            </div>
            <div class="field">
              <label for="buyer-company">公司</label>
              <input id="buyer-company" readonly value="${escapeHtml(state.userData.company)}" placeholder="AI 自動萃取中...">
            </div>
            ${passcode}
          </div>
          ${action}
        </div>
      </section>
    </main>
  `;
}

function renderApp() {
  return `
    <div class="app-layout">
      <header class="app-header">
        <div class="header-shell">
          <div class="assistant-avatar">AI</div>
          <div class="header-main">
            <div class="ai-bubble">${escapeHtml(getAIMessage())}</div>
            <nav class="desktop-nav" aria-label="主要導覽">
              ${renderNavButtons()}
            </nav>
          </div>
        </div>
      </header>
      <main class="main-shell">
        ${renderActiveTab()}
      </main>
      <nav class="mobile-nav" aria-label="手機導覽">
        ${renderNavButtons()}
      </nav>
    </div>
  `;
}

function renderNavButtons() {
  const navItems = [
    ["home", "search", "探索"],
    ["favorites", "heart", "最愛"],
    ["match", "users", "MATCH", 1],
    ["schedule", "calendar", "行程"],
    ["profile", "user", "個人"],
  ];

  return navItems.map(([tab, iconName, label, badge]) => `
    <button class="nav-button ${state.activeTab === tab ? "is-active" : ""}" data-tab="${tab}">
      ${icon(iconName, 18)}
      <span>${label}</span>
      ${badge ? `<b class="badge">${badge}</b>` : ""}
    </button>
  `).join("");
}

function renderActiveTab() {
  if (state.activeTab === "home") return renderHome();
  if (state.activeTab === "favorites") return renderFavorites();
  if (state.activeTab === "match") return renderMatch();
  if (state.activeTab === "schedule") return renderSchedule();
  if (state.activeTab === "profile") return renderProfile();
  return "";
}

function renderHome() {
  return `
    <section class="view-stack" aria-label="展商探索">
      ${renderExploreToolbar()}
      ${state.isMapView ? renderMap() : renderExhibitorGrid(mockExhibitors)}
    </section>
  `;
}

function renderExploreToolbar() {
  return `
    <div class="toolbar-row">
      <div class="search-box">
        ${icon("search", 20)}
        <input class="search-input" type="search" placeholder="輸入關鍵字或產業標籤..." aria-label="搜尋展商">
      </div>
      <button class="ghost-button" data-action="toggle-map">
        ${state.isMapView ? icon("list", 18) : icon("map", 18)}
        <span>${state.isMapView ? "列表模式" : "地圖模式"}</span>
      </button>
    </div>
    <div class="tag-row" aria-label="展商篩選">
      ${tags.map((tag) => `<button class="tag-button ${tag === state.selectedTag ? "is-active" : ""}" data-tag="${tag}">${tag}</button>`).join("")}
    </div>
  `;
}

function renderExhibitorGrid(exhibitors) {
  return `
    <div class="exhibitor-grid">
      ${exhibitors.map(renderExhibitorCard).join("")}
    </div>
  `;
}

function renderExhibitorCard(exhibitor) {
  const favorite = state.favoriteIds.includes(exhibitor.id);
  return `
    <article class="exhibitor-card panel">
      <div class="card-head">
        <div>
          <h3>${escapeHtml(exhibitor.name)}</h3>
          <span class="booth-line">${icon("map-pin", 14)} Booth ${escapeHtml(exhibitor.booth)}</span>
        </div>
        <button class="icon-button ${favorite ? "is-favorite" : ""}" data-favorite="${exhibitor.id}" aria-label="${favorite ? "取消收藏" : "收藏"}${escapeHtml(exhibitor.name)}">
          ${icon("heart", 20)}
        </button>
      </div>
      <div class="chip-row">
        <span class="chip primary">${escapeHtml(exhibitor.industry)}</span>
        ${exhibitor.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="card-actions">
        <button class="secondary-button">${icon("file-text", 17)} 型錄</button>
        <button class="primary-button">${icon("users", 17)} MATCH!</button>
      </div>
    </article>
  `;
}

function renderMap() {
  return `
    <section class="map-panel panel">
      <div class="section-head">
        <h2>${icon("map", 20)} 南港展覽館 1F 導覽圖</h2>
        <span class="location-pill">目前位置: 南側入口</span>
      </div>
      <div class="floor-map" aria-label="南港展覽館 1F 攤位地圖">
        <button class="booth-tile tile-tsmc" data-tab="home"><strong>台積電</strong><span>A01-A05</span></button>
        <button class="booth-tile tile-ase" data-tab="home"><strong>日月光</strong><span>C01-C03</span></button>
        <div class="booth-tile tile-aisle">主要走道</div>
        <button class="booth-tile tile-kyec" data-tab="home"><strong>京元電子</strong><span>D03</span></button>
        <button class="booth-tile tile-umc" data-tab="home"><strong>聯電</strong><span>B02-B04</span></button>
        <div class="booth-tile tile-stage">大會主論壇舞台</div>
        <div class="you-marker">
          <span class="you-label">您在這裡</span>
          <span class="you-dot"></span>
        </div>
      </div>
    </section>
  `;
}

function renderFavorites() {
  const favorites = mockExhibitors.filter((exhibitor) => state.favoriteIds.includes(exhibitor.id));
  return `
    <section class="view-stack" aria-label="收藏展商">
      <div class="section-head">
        <h2>${icon("heart", 20)} 我的關注展商</h2>
        <span class="location-pill">${favorites.length} 家已收藏</span>
      </div>
      ${favorites.length ? renderExhibitorGrid(favorites) : `
        <div class="empty-state panel">
          <strong>尚未收藏展商</strong>
          <p>回到探索頁點選愛心，AI 助理就能替您整理關注名單。</p>
        </div>
      `}
    </section>
  `;
}

function renderMatch() {
  return `
    <section class="view-stack" aria-label="MATCH 媒合">
      <div class="section-head">
        <h2>${icon("bell", 20)} 待處理邀約</h2>
      </div>
      <div class="match-list">
        ${mockMatches.map((match) => `
          <article class="match-card panel">
            <div>
              <h3>${escapeHtml(match.exhibitor)}</h3>
              <p>${escapeHtml(match.message)}</p>
              <span class="status-pill ${match.status}">${match.status === "pending" ? "等待回覆" : escapeHtml(match.time)}</span>
            </div>
            ${match.status === "pending" ? `
              <div class="match-actions">
                <button class="secondary-button">${icon("x", 17)} 婉拒</button>
                <button class="primary-button">${icon("check", 17)} 接受洽談</button>
              </div>
            ` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSchedule() {
  return `
    <section class="view-stack" aria-label="我的行程">
      <div class="schedule-head">
        <h2>展會行程表</h2>
        <button class="ghost-button">${icon("plus", 17)} 新增私人行程</button>
      </div>
      <div class="timeline">
        ${mockSchedule.map((item) => `
          <article class="schedule-card panel">
            <div class="schedule-meta">
              <span class="type-chip">${escapeHtml(item.type)}</span>
              <span class="time-text">${escapeHtml(item.time)}</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${icon("map-pin", 16)} ${escapeHtml(item.location)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderProfile() {
  const initial = state.userData.name ? state.userData.name.trim().charAt(0) : "A";
  return `
    <section class="profile-stack view-stack" aria-label="個人中心">
      <article class="profile-card center panel">
        <button class="logout-button" data-action="logout" aria-label="登出">${icon("log-out", 18)}</button>
        <div class="profile-avatar">${escapeHtml(initial)}</div>
        <h2>${escapeHtml(state.userData.name)}</h2>
        <p class="subline">${escapeHtml(state.userData.company)} | ${escapeHtml(state.userData.title)}</p>
        <div class="profile-passcode">
          <small>通關密語</small>
          ${escapeHtml(state.userData.passcode)}
        </div>
      </article>
      <article class="profile-card panel">
        <h3 class="profile-section-title">尋找夥伴條件</h3>
        <div class="form-stack">
          <div class="field">
            <label>感興趣的產業</label>
            <div class="chip-row">
              <span class="chip primary">晶圓代工</span>
              <span class="chip primary">先進封裝</span>
              <button class="tag-button">+ 新增</button>
            </div>
          </div>
          <div class="field">
            <label for="budget">採購預算區間</label>
            <select id="budget">
              <option>請選擇...</option>
              <option>100萬 - 500萬</option>
              <option selected>500萬 - 1000萬</option>
            </select>
          </div>
        </div>
      </article>
    </section>
  `;
}

function bindEvents() {
  app.querySelectorAll("[data-action]").forEach((node) => {
    node.addEventListener("click", () => {
      const action = node.dataset.action;
      if (action === "voice") handleVoiceInput();
      if (action === "login") {
        state.isLoggedIn = true;
        state.activeTab = "home";
        render();
      }
      if (action === "toggle-map") {
        state.isMapView = !state.isMapView;
        render();
      }
      if (action === "logout") {
        state.isLoggedIn = false;
        state.activeTab = "home";
        render();
      }
    });
  });

  app.querySelectorAll("[data-tab]").forEach((node) => {
    node.addEventListener("click", () => {
      state.activeTab = node.dataset.tab;
      render();
    });
  });

  app.querySelectorAll("[data-tag]").forEach((node) => {
    node.addEventListener("click", () => {
      state.selectedTag = node.dataset.tag;
      render();
    });
  });

  app.querySelectorAll("[data-favorite]").forEach((node) => {
    node.addEventListener("click", () => {
      const id = Number(node.dataset.favorite);
      state.favoriteIds = state.favoriteIds.includes(id)
        ? state.favoriteIds.filter((favoriteId) => favoriteId !== id)
        : [...state.favoriteIds, id];
      render();
    });
  });
}

function handleVoiceInput() {
  state.isRecording = true;
  render();

  window.setTimeout(() => {
    state.isRecording = false;

    if (state.regStep === 0) {
      state.userData = {
        ...state.userData,
        name: "山田 健太",
        company: "Tokyo Electron",
        title: "採購經理",
      };
      state.regStep = 1;
    } else if (state.regStep === 1) {
      state.userData = {
        ...state.userData,
        passcode: "白日依山盡",
      };
      state.regStep = 2;
    }

    render();
  }, 900);
}

window.addEventListener("DOMContentLoaded", render);
window.addEventListener("load", refreshIcons);
