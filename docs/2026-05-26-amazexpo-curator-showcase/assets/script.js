const demos = [
  {
    id: "opportunity",
    title: "參展商商機平台",
    role: "Exhibitor",
    accent: "#1769e0",
    icon: "line-chart",
    src: "../2026-05-19-b2b-opportunity-platform/",
    fallbackTabs: ["商機總覽", "潛在買主追蹤", "公司與產品管理"],
    summary: "商機總覽、潛在買主追蹤、產品型錄與 MATCH 行程。"
  },
  {
    id: "organizer",
    title: "主辦方營運後台",
    role: "Organizer",
    accent: "#16845b",
    icon: "layout-dashboard",
    src: "../2026-05-20-amazexpo-organizer-dashboard/",
    fallbackTabs: ["展會與租戶管理", "參展商建置", "戰情 Dashboard"],
    summary: "展會管理、參展商建置、OMO 數據與即時戰情。"
  },
  {
    id: "buyer",
    title: "買主端體驗",
    role: "Buyer",
    accent: "#b85c00",
    icon: "scan-search",
    src: "../2026-05-19-amazexpo-buyer-demo/",
    fallbackTabs: [],
    summary: "語音註冊、展商探索、MATCH 邀約、行程與個人檔案。"
  }
];

const selector = document.querySelector("#demo-selector");
const statusNode = document.querySelector("#active-status");
const viewerTitle = document.querySelector("#viewer-title");
const viewerKicker = document.querySelector("#viewer-kicker");
const frame = document.querySelector("#demo-frame");
const reloadButton = document.querySelector("#reload-demo");

let activeId = demos[0].id;

function getActiveDemo() {
  return demos.find((demo) => demo.id === activeId) || demos[0];
}

function renderSelector() {
  selector.innerHTML = demos.map((demo) => `
    <button
      class="demo-card ${demo.id === activeId ? "is-active" : ""}"
      type="button"
      data-demo="${demo.id}"
      style="--accent: ${demo.accent}"
      aria-pressed="${demo.id === activeId}"
    >
      <span class="card-top">
        <span class="card-icon"><i data-lucide="${demo.icon}" aria-hidden="true"></i></span>
        <span class="role-pill">${demo.role}</span>
      </span>
      <span>
        <h3>${demo.title}</h3>
        <p>${demo.summary}</p>
      </span>
    </button>
  `).join("");

  selector.querySelectorAll("[data-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveDemo(button.dataset.demo);
    });
  });

  refreshIcons();
}

function setActiveDemo(nextId) {
  activeId = nextId;
  const demo = getActiveDemo();
  document.documentElement.style.setProperty("--blue", demo.accent);
  statusNode.textContent = `目前顯示：${demo.title}`;
  viewerTitle.textContent = demo.title;
  viewerKicker.textContent = demo.role;
  frame.title = `${demo.title}展示畫面`;
  frame.src = demo.src;
  renderSelector();
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function chooseDemoTab(doc, demo) {
  if (!demo.fallbackTabs.length) return;

  const buttons = Array.from(doc.querySelectorAll("button"));
  const target = buttons.find((button) => {
    const text = normalizeText(button.textContent);
    return demo.fallbackTabs.some((label) => text.includes(label));
  });

  if (target && !target.getAttribute("aria-pressed")) {
    target.click();
  }
}

function removeStageLegend(element) {
  const removable =
    element.closest(".milestone-strip, .legend, header") ||
    element.closest("div");

  if (removable && removable !== element.ownerDocument.body) {
    removable.remove();
  }
}

function scrubPresentationChrome(doc) {
  const allNodes = Array.from(doc.body.querySelectorAll("*"));

  allNodes.forEach((node) => {
    const text = normalizeText(node.textContent);

    if (text === "M1" || text === "M2" || text === "M3") {
      node.remove();
      return;
    }

    if (node.matches(".badge.m1, .badge.m2, .badge.m3")) {
      node.remove();
      return;
    }

    if (text.includes("系統升級簡介")) {
      const button = node.closest("button");
      if (button) button.remove();
      return;
    }

    const hasStageLegend =
      text.includes("專案導入階段圖例") ||
      text.includes("開發階段圖例") ||
      text.includes("M1：") ||
      text.includes("M2：") ||
      text.includes("M3：");

    if (hasStageLegend) {
      removeStageLegend(node);
    }
  });
}

function installFrameFilter() {
  const demo = getActiveDemo();

  try {
    const doc = frame.contentDocument;
    if (!doc || !doc.body) return;

    let style = doc.querySelector("style[data-curator-filter]");
    if (!style) {
      style = doc.createElement("style");
      style.dataset.curatorFilter = "true";
      style.textContent = `
        .badge.m1,
        .badge.m2,
        .badge.m3 {
          display: none !important;
        }
      `;
      doc.head.appendChild(style);
    }

    window.setTimeout(() => {
      chooseDemoTab(doc, demo);
      scrubPresentationChrome(doc);
    }, 80);

    let pending = false;
    const observer = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(() => {
        pending = false;
        scrubPresentationChrome(doc);
      });
    });

    observer.observe(doc.body, { childList: true, subtree: true });
  } catch (error) {
    statusNode.textContent = "展示頁已載入";
  }
}

reloadButton.addEventListener("click", () => {
  frame.src = getActiveDemo().src;
});

frame.addEventListener("load", installFrameFilter);

window.addEventListener("load", refreshIcons);

setActiveDemo(activeId);
