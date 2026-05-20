(function () {
  const app = document.getElementById("app");
  let activeTab = "參展商建置";
  let liveCount = 8437;

  const tabs = [
    { name: "系統升級簡介", m: "M1" },
    { name: "展會與租戶管理", m: "M1" },
    { name: "戰情 Dashboard", m: "M3" },
    { name: "參展商建置", m: "M1" },
    { name: "買主與 OMO 數據", m: "M2" },
    { name: "會展活動與集章", m: "M1" },
    { name: "媒合與會議設定", m: "M3" }
  ];

  const icon = (name, classes = "w-4 h-4") =>
    `<i data-lucide="${name}" class="${classes}" aria-hidden="true"></i>`;

  const milestoneBadge = (m) => {
    const colors = {
      M1: "bg-blue-100 text-blue-700 border-blue-200",
      M2: "bg-emerald-100 text-emerald-700 border-emerald-200",
      M3: "bg-purple-100 text-purple-700 border-purple-200"
    };
    return `<span class="ml-2 text-[10px] px-1.5 py-0.5 rounded border font-bold shadow-sm ${colors[m]}">${m}</span>`;
  };

  const statusBadge = (status) => {
    if (status === "已啟用") {
      return `<span class="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-1 rounded text-xs font-medium inline-flex items-center">${icon("check-circle-2", "w-3 h-3 mr-1")}已啟用</span>`;
    }
    if (status === "待發送邀請") {
      return `<span class="bg-orange-50 text-orange-600 border border-orange-200 px-2 py-1 rounded text-xs font-medium inline-flex items-center">待發送邀請</span>`;
    }
    return `<span class="bg-slate-100 text-slate-500 border border-slate-200 px-2 py-1 rounded text-xs font-medium inline-flex items-center">邀請已送出 (未登入)</span>`;
  };

  function renderUpgradeIntro() {
    return `
      <section class="space-y-6 fade-panel">
        <div class="bg-white rounded-md shadow-sm border border-slate-200 p-5 md:p-8">
          <h2 class="text-xl md:text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6 flex items-center">
            ${icon("shield-alert", "w-6 h-6 mr-2 text-[#1890ff]")}
            超級管理員中控台：從「單一活動」到「多租戶國際展會」
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-5 md:p-6 border border-blue-100 rounded-lg bg-blue-50/30">
              <h3 class="font-bold text-blue-700 flex items-center text-lg mb-4">🔄 核心架構轉換</h3>
              <ul class="space-y-5 text-sm text-slate-700">
                <li class="flex items-start">
                  <span class="line-through text-slate-400 mr-2 mt-0.5 whitespace-nowrap">活動管理</span>
                  ${icon("arrow-right", "w-5 h-5 mx-2 text-blue-400 mt-0.5 flex-shrink-0")}
                  <div>
                    <strong class="text-blue-600 text-base">展會與租戶管理 ${milestoneBadge("M1")}</strong>
                    <p class="text-slate-500 text-xs mt-1">升級為多租戶架構，支援多場展會同時運作且資料隔離。</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="line-through text-slate-400 mr-2 mt-0.5 whitespace-nowrap">廠商管理</span>
                  ${icon("arrow-right", "w-5 h-5 mx-2 text-blue-400 mt-0.5 flex-shrink-0")}
                  <div>
                    <strong class="text-blue-600 text-base">參展商建置 ${milestoneBadge("M1")}</strong>
                    <p class="text-slate-500 text-xs mt-1">新增批次匯入 (Excel/CSV) 與自動發送開通邀請信功能。</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="line-through text-slate-400 mr-2 mt-0.5 whitespace-nowrap">電子簽章報到</span>
                  ${icon("arrow-right", "w-5 h-5 mx-2 text-blue-400 mt-0.5 flex-shrink-0")}
                  <div>
                    <strong class="text-blue-600 text-base">買主與 OMO 數據中心 ${milestoneBadge("M2")}</strong>
                    <p class="text-slate-500 text-xs mt-1">整合語音報到、QR 掃碼等線上線下軌跡，作為 AI 算分基礎。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex flex-col gap-6">
              <div class="p-5 md:p-6 border border-rose-100 rounded-lg bg-rose-50/30 flex-1">
                <h3 class="font-bold text-rose-700 flex items-center text-lg mb-4">🗑️ 移除與保留</h3>
                <ul class="space-y-4 text-sm text-slate-700">
                  <li>
                    <strong class="text-rose-600 text-base flex items-center">${icon("trash-2", "w-4 h-4 mr-2")}移除：職缺管理 / 報名須知</strong>
                    <p class="text-slate-500 text-xs mt-1 ml-6">展會核心在於產品與商機，求職與過度特化的表單欄位予以移除。</p>
                  </li>
                  <li>
                    <strong class="text-amber-600 text-base flex items-center">${icon("ticket", "w-4 h-4 mr-2")}保留：展會活動與集章 ${milestoneBadge("M1")}</strong>
                    <p class="text-slate-500 text-xs mt-1 ml-6">轉化為展會行銷工具，以遊戲化機制提升買主填寫資料的完整度。</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-5 md:p-6 border border-emerald-100 rounded-lg bg-emerald-50/30 md:col-span-2">
              <h3 class="font-bold text-emerald-700 flex items-center text-lg mb-4">✨ 策展方全新賦能 (New Features)</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
                <div>
                  <strong class="text-emerald-600 text-base flex items-center">${icon("activity", "w-4 h-4 mr-2")}戰情 Dashboard ${milestoneBadge("M3")}</strong>
                  <p class="text-slate-500 text-xs mt-1 ml-6">視覺化呈現入場人數、Lead Score 分佈與即時商機推播。</p>
                </div>
                <div>
                  <strong class="text-emerald-600 text-base flex items-center">${icon("calendar-check", "w-4 h-4 mr-2")}媒合與會議室設定 ${milestoneBadge("M3")}</strong>
                  <p class="text-slate-500 text-xs mt-1 ml-6">控管現場會議室空間，並設定 AI 媒合分數門檻與規則。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderExhibitionManagement() {
    const expos = [
      { name: "2026 南方人才永續暨智慧轉型展", location: "ICC Tainan 大臺南會展中心", time: "2026/07/16 09:00 至 2026/07/18 17:00", regTime: "2026/05/18 00:00 至 2026/07/15 23:00", organizer: "南方策展主辦" },
      { name: "SEMICON Taiwan 2026 國際半導體展", location: "台北南港展覽館 1 館及 2 館", time: "2026/09/02 10:00 至 2026/09/04 17:00", regTime: "2026/06/01 00:00 至 2026/08/30 23:00", organizer: "SEMI 國際半導體產業協會" },
      { name: "2025 臺中市政府「富市台中 就業成功」就業博覽會", location: "世貿貿易中心二館", time: "2025/11/01 10:00 至 2025/11/01 15:00", regTime: "2025/08/01 00:00 至 2025/10/22 23:00", organizer: "臺中市就業服務處" }
    ];

    return `
      <section class="space-y-6 fade-panel">
        <div class="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded text-sm flex items-center">
          ${icon("info", "w-4 h-4 mr-2 flex-shrink-0")}
          超級管理員可以管理所有展會，包括編輯、刪除以及新增展會（多租戶邏輯隔離）。
        </div>
        <div class="bg-white rounded-md shadow-sm border border-slate-200">
          <div class="px-5 md:px-6 py-4 border-b border-slate-100 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center bg-[#fafafa]">
            <h3 class="font-bold text-slate-800 text-base">展會與租戶管理 ${milestoneBadge("M1")}</h3>
            <button class="bg-[#1890ff] text-white px-4 py-1.5 rounded flex items-center justify-center text-xs font-medium hover:bg-blue-600 transition shadow-sm">
              ${icon("plus", "w-4 h-4 mr-1.5")}新增展會
            </button>
          </div>
          <div class="p-4 md:p-6 overflow-x-auto">
            <table class="app-table w-full text-left text-sm whitespace-nowrap border border-slate-200">
              <thead class="bg-[#fafafa] border-b border-slate-200 text-slate-600">
                <tr>
                  <th class="px-4 py-3 font-semibold">展會名稱</th>
                  <th class="px-4 py-3 font-semibold">展會地點</th>
                  <th class="px-4 py-3 font-semibold">展會時間</th>
                  <th class="px-4 py-3 font-semibold">報名時間</th>
                  <th class="px-4 py-3 font-semibold">主辦單位</th>
                  <th class="px-4 py-3 font-semibold text-center">操作</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                ${expos.map((expo) => `
                  <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-4 py-4 font-bold text-slate-800">${expo.name}</td>
                    <td class="px-4 py-4 text-slate-600">${expo.location}</td>
                    <td class="px-4 py-4 text-slate-600">${expo.time}</td>
                    <td class="px-4 py-4 text-slate-600">${expo.regTime}</td>
                    <td class="px-4 py-4 text-slate-600">${expo.organizer}</td>
                    <td class="px-4 py-4 text-center">
                      <div class="flex items-center justify-center space-x-3">
                        <button class="text-slate-500 hover:text-blue-600 flex items-center transition-colors">${icon("edit-2", "w-3.5 h-3.5 mr-1")}編輯</button>
                        <button class="text-slate-500 hover:text-red-600 flex items-center transition-colors">${icon("trash-2", "w-3.5 h-3.5 mr-1")}刪除</button>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  function renderExhibitorManagement() {
    const exhibitors = [
      { name: "台灣積體電路製造股份有限公司 (TSMC)", booth: "Booth A01-A05", contact: "陳志偉", email: "contact@tsmc.com", status: "已啟用" },
      { name: "日月光半導體製造股份有限公司 (ASE)", booth: "Booth C01", contact: "林芳如", email: "info@ase.com", status: "已啟用" },
      { name: "東京威力科創股份有限公司 (TEL)", booth: "Booth B12", contact: "山田健太", email: "sales@tel.com", status: "待發送邀請" },
      { name: "聯發科技股份有限公司 (MediaTek)", booth: "Booth D03", contact: "王大明", email: "event@mediatek.com", status: "未登入" }
    ];

    return `
      <section class="space-y-6 fade-panel">
        <div class="bg-white rounded-md shadow-sm border border-slate-200">
          <div class="px-5 md:px-6 py-4 border-b border-slate-100 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center bg-[#fafafa]">
            <h3 class="font-bold text-slate-800 text-base">批次建置參展商資料 ${milestoneBadge("M1")}</h3>
            <button class="bg-white border border-slate-300 text-slate-600 px-4 py-1.5 rounded flex items-center justify-center text-xs font-medium hover:bg-slate-50 transition shadow-sm">
              ${icon("download", "w-4 h-4 mr-1.5")}下載 CSV 範本
            </button>
          </div>
          <div class="p-4 md:p-6">
            <div class="flex flex-col lg:flex-row gap-6">
              <button class="flex-1 border-2 border-dashed border-slate-300 rounded-lg p-8 min-h-[184px] flex flex-col items-center justify-center text-slate-500 bg-slate-50 hover:bg-slate-100 transition cursor-pointer text-center">
                ${icon("file-spreadsheet", "w-10 h-10 mb-3 text-slate-400")}
                <span class="font-bold text-slate-700 mb-1">點擊或拖曳 Excel/CSV 檔案至此</span>
                <span class="text-xs text-slate-400">支援包含展商名稱、攤位號碼、聯絡人信箱之清單匯入</span>
              </button>
              <div class="w-full lg:w-1/3 border border-slate-200 rounded-lg p-6 flex flex-col justify-center bg-white shadow-sm">
                <h4 class="font-bold text-slate-800 mb-2 flex items-center">${icon("target", "w-4 h-4 mr-2 text-[#1890ff]")}自動爬蟲建置</h4>
                <p class="text-xs text-slate-500 mb-4">輸入大會官網網址，系統將自動解析公開展商清單與攤位資訊。</p>
                <div class="flex flex-col sm:flex-row gap-2">
                  <input type="text" placeholder="https://..." class="flex-1 min-w-0 px-3 py-1.5 border border-slate-300 rounded text-sm focus:border-[#1890ff] outline-none">
                  <button class="bg-slate-800 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-slate-700 transition">執行解析</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-md shadow-sm border border-slate-200">
          <div class="px-5 md:px-6 py-4 border-b border-slate-100 flex flex-col xl:flex-row gap-3 xl:justify-between xl:items-center bg-[#fafafa]">
            <div class="flex items-center space-x-4">
              <h3 class="font-bold text-slate-800 text-base">參展商清單</h3>
              <span class="text-xs text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">總計: 170 家</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-2">
              <label class="relative">
                ${icon("search", "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5")}
                <input type="text" placeholder="搜尋展商..." class="w-full sm:w-48 pl-8 pr-3 py-1.5 border border-slate-300 rounded text-xs focus:border-[#1890ff] outline-none">
              </label>
              <button class="bg-[#1890ff] text-white px-4 py-1.5 rounded flex items-center justify-center text-xs font-medium hover:bg-blue-600 transition shadow-sm">
                ${icon("send", "w-3.5 h-3.5 mr-1.5")}批次發送啟用邀請
              </button>
            </div>
          </div>
          <div class="p-4 md:p-6 overflow-x-auto">
            <table class="app-table w-full text-left text-sm border border-slate-200 min-w-[840px]">
              <thead class="bg-[#fafafa] border-b border-slate-200 text-slate-600">
                <tr>
                  <th class="px-4 py-3 font-semibold w-10 text-center"><input type="checkbox" class="rounded border-slate-300"></th>
                  <th class="px-4 py-3 font-semibold">公司名稱</th>
                  <th class="px-4 py-3 font-semibold">攤位號碼</th>
                  <th class="px-4 py-3 font-semibold">聯絡人 / 信箱</th>
                  <th class="px-4 py-3 font-semibold text-center">狀態</th>
                  <th class="px-4 py-3 font-semibold text-center">操作</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                ${exhibitors.map((exhibitor) => `
                  <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-4 py-3 text-center"><input type="checkbox" class="rounded border-slate-300"></td>
                    <td class="px-4 py-3 font-bold text-slate-800">${exhibitor.name}</td>
                    <td class="px-4 py-3 text-slate-600">${exhibitor.booth}</td>
                    <td class="px-4 py-3 text-slate-600">
                      <div>${exhibitor.contact}</div>
                      <div class="text-xs text-slate-400">${exhibitor.email}</div>
                    </td>
                    <td class="px-4 py-3 text-center">${statusBadge(exhibitor.status)}</td>
                    <td class="px-4 py-3 text-center">
                      <div class="flex items-center justify-center space-x-3">
                        <button class="text-slate-500 hover:text-[#1890ff] flex items-center transition-colors" title="編輯">${icon("edit-2", "w-3.5 h-3.5")}</button>
                        <button class="text-slate-500 hover:text-red-600 flex items-center transition-colors" title="刪除">${icon("trash-2", "w-3.5 h-3.5")}</button>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  function renderDashboard() {
    return `
      <section class="space-y-6 fade-panel">
        <div class="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center bg-white p-4 rounded-md shadow-sm border border-slate-200">
          <div class="flex flex-col sm:flex-row sm:items-center gap-2">
            <span class="text-sm font-bold text-slate-700 sm:mr-2">當前檢視展會：</span>
            <select class="border border-slate-300 rounded px-3 py-1.5 text-sm font-medium text-slate-700 outline-none focus:border-[#1890ff] bg-[#fafafa]">
              <option>SEMICON Taiwan 2026 國際半導體展</option>
              <option>2026 南方人才永續暨智慧轉型展</option>
            </select>
          </div>
          <div class="flex items-center text-sm">
            <span class="relative flex h-3 w-3 mr-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span class="text-slate-600 font-medium">系統運作正常 | Kafka 事件即時收集中</span>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          ${metricCard("monitor-play", "總 OMO 互動事件", `<span id="live-count">${liveCount.toLocaleString()}</span>`, "border-l-[#1890ff]")}
          ${metricCard("users", "現場報到總人數", "4,281", "border-l-emerald-500")}
          ${metricCard("file-text", "促成媒合會議", "187", "border-l-purple-500")}
          ${metricCard("building-2", "參展商活躍數", "142", "border-l-amber-500")}
        </div>
        <div class="bg-white p-8 md:p-12 text-center text-slate-500 rounded-md border border-slate-200 shadow-sm">
          ${icon("bar-chart-2", "w-12 h-12 mx-auto mb-4 text-slate-300")}
          <p>進階戰情圖表 (Echarts) 與買主分佈地圖開發中...</p>
        </div>
      </section>
    `;
  }

  function metricCard(iconName, label, value, borderColor) {
    return `
      <div class="bg-white rounded-md p-5 border border-slate-200 shadow-sm border-l-4 ${borderColor}">
        <div class="text-slate-500 text-sm font-medium mb-1 flex items-center">${icon(iconName, "w-4 h-4 mr-2")}${label}</div>
        <div class="text-3xl font-bold text-slate-800">${value}</div>
      </div>
    `;
  }

  function renderPlaceholder() {
    return `
      <section class="bg-white p-10 md:p-12 text-center text-slate-500 rounded-md border border-slate-200 shadow-sm fade-panel">
        此模組介面開發中...
      </section>
    `;
  }

  function renderPanel() {
    if (activeTab === "系統升級簡介") return renderUpgradeIntro();
    if (activeTab === "展會與租戶管理") return renderExhibitionManagement();
    if (activeTab === "參展商建置") return renderExhibitorManagement();
    if (activeTab === "戰情 Dashboard") return renderDashboard();
    return renderPlaceholder();
  }

  function refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function render() {
    app.innerHTML = `
      <div class="min-h-screen bg-[#f4f6f8] font-sans text-slate-800 pb-12">
        <div class="bg-white text-slate-600 px-4 md:px-8 py-3 text-xs flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between border-b border-slate-200 shadow-sm">
          <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span class="font-bold flex items-center text-slate-800">${icon("target", "w-4 h-4 mr-2 text-[#1890ff]")}開發階段圖例：</span>
            <span class="flex items-center"><span class="w-3 h-3 rounded-full bg-blue-400 mr-1.5"></span>M1：架構與基礎設定</span>
            <span class="flex items-center"><span class="w-3 h-3 rounded-full bg-emerald-400 mr-1.5"></span>M2：OMO 數據與名單</span>
            <span class="flex items-center"><span class="w-3 h-3 rounded-full bg-purple-400 mr-1.5"></span>M3：AI 分析與戰情室</span>
          </div>
          <div class="flex items-center w-fit font-bold text-[#1890ff] bg-blue-50 px-3 py-1 rounded border border-blue-100">
            ${icon("user", "w-4 h-4 mr-1.5")}系統超級管理員 (主辦方)
          </div>
        </div>

        <div class="bg-[#f4f6f8] pt-6 px-4 md:px-8">
          <nav class="flex space-x-2 overflow-x-auto pb-0 hide-scrollbar" aria-label="Organizer modules">
            ${tabs.map((tab) => `
              <button
                class="tab-button px-5 py-2.5 text-sm font-medium rounded-t-md border-t border-x transition-colors duration-200 flex items-center whitespace-nowrap ${activeTab === tab.name ? "bg-[#1890ff] text-white border-[#1890ff]" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}"
                data-tab="${tab.name}"
              >
                ${tab.name}
                ${activeTab === tab.name ? milestoneBadge(tab.m) : ""}
              </button>
            `).join("")}
          </nav>
        </div>

        <header class="bg-white border-y border-slate-200 shadow-sm mb-6">
          <div class="app-shell px-4 md:px-8 py-5 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center max-w-[1600px] mx-auto">
            <h1 class="text-2xl font-bold text-slate-800">${activeTab}</h1>
            <div class="flex space-x-3">
              <span class="text-sm text-slate-500 flex items-center">${icon("info", "w-4 h-4 mr-1")}AMAZEXPO 365 策展營運中心</span>
            </div>
          </div>
        </header>

        <main class="app-shell max-w-[1600px] mx-auto px-4 md:px-8">
          ${renderPanel()}
        </main>
      </div>
    `;

    document.querySelectorAll(".tab-button").forEach((button) => {
      button.addEventListener("click", () => {
        activeTab = button.dataset.tab;
        render();
      });
    });

    refreshIcons();
  }

  setInterval(() => {
    liveCount += Math.floor(Math.random() * 3);
    const liveCountNode = document.getElementById("live-count");
    if (liveCountNode) {
      liveCountNode.textContent = liveCount.toLocaleString();
    }
  }, 3000);

  render();
})();
