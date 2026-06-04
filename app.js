const PASSWORD = "tensyoku1";
window.__careerSiteLoaded = true;

const base = "./assets/previews";

const lessonUrls = {
  "営業職": "./job-sales.html",
  "接客販売職": "./job-customer-sales.html",
  "カスタマーサポート・コールセンター営業管理": "./job-customer-support-callcenter-salesmanagement.html",
  "事務職": "./job-admin-office.html",
  "管理人事労務職": "./job-management-hr-labor.html",
  "金融専門職": "./job-financial-specialist.html",
  "ビジネス専門職士業": "./job-business-professional-licensed.html",
  "不動産専門職": "./job-real-estate-specialist.html",
  "専門サービス職": "./job-specialized-services.html",
  "コンサルタント職": "./job-consultant.html",
  "ITエンジニア職": "./job-it-engineer.html",
  "PM・PdM・EM職": "./job-pm-pdm-em.html",
  "クリエイティブWeb制作職": "./job-creative-web-production.html",
  "非Web制作クリエイター職": "./job-non-web-creative-production.html",
  "マーケティング企画広報職": "./job-marketing-planning-pr.html",
  "施工管理職": "./job-construction-management.html",
  "建築土木専門職": "./job-architecture-civil.html",
  "機械電気電子半導体職": "./job-mechanical-electrical-semiconductor.html",
  "化学素材職": "./job-chemical-materials.html",
  "食品化粧品日用品職": "./job-food-cosmetics-dailygoods.html",
  "軽作業運送職": "./job-lightwork-logistics.html",
  "技能工警備清掃職": "./job-skilled-security-cleaning.html",
  "医療看護薬剤医療営業研究開発職": "./job-medical-nursing-pharma-sales-dev.html",
  "公務員公共職員農林水産職": "./job-public-agri.html",
};

const jobs = [
  ["営業職", "営業・接客", "sales-image2-full", "営業職_web.pdf", "営業職の種類、向き不向き、働き方の違いを確認できます。", "17ページ"],
  ["接客販売職", "営業・接客", "customer-sales-image2", "接客販売職_web.pdf", "店舗・販売・接客に関わる仕事の違いを確認できます。", "14ページ"],
  ["カスタマーサポート・コールセンター営業管理", "営業・接客", "customer-support-callcenter-salesmanagement-image2", "カスタマーサポートコールセンター営業管理_web.pdf", "問い合わせ対応・サポート・営業管理の仕事を確認できます。", "10ページ"],
  ["事務職", "事務・管理", "admin-office-image2", "事務職_web.pdf", "一般事務、営業事務、専門事務などの違いを確認できます。", "12ページ"],
  ["管理人事労務職", "事務・管理", "management-hr-labor-image2", "管理人事労務職_web.pdf", "人事・労務・管理部門の仕事を確認できます。", "12ページ"],
  ["金融専門職", "専門職", "financial-specialist-image2", "金融専門職_web.pdf", "金融領域の仕事、必要な視点、キャリアを確認できます。", "12ページ"],
  ["ビジネス専門職士業", "専門職", "business-professional-licensed-image2", "ビジネス専門職士業_web.pdf", "士業・専門職系の仕事を確認できます。", "12ページ"],
  ["不動産専門職", "専門職", "real-estate-specialist-image2", "不動産専門職_web.pdf", "不動産領域の仕事と働き方を確認できます。", "15ページ"],
  ["専門サービス職", "専門職", "specialized-services-image2", "専門サービス職_web.pdf", "専門サービス系の仕事内容を確認できます。", "11ページ"],
  ["コンサルタント職", "専門職", "consultant-image2", "コンサルタント職_web.pdf", "課題解決型の仕事と分野ごとの違いを確認できます。", "18ページ"],
  ["ITエンジニア職", "IT・Web", "it-engineer", "ITエンジニア職_web.pdf", "ITエンジニアの種類、領域、向き不向きを確認できます。", "17ページ"],
  ["PM・PdM・EM職", "IT・Web", "pm-pdm-em-image2", "PM_PdM_EM職_web.pdf", "PM・PdM・EMの役割の違いを確認できます。", "10ページ"],
  ["クリエイティブWeb制作職", "IT・Web", "creative-web-production-image2", "クリエイティブWeb制作職_web.pdf", "Web制作・デザイン・制作進行の仕事を確認できます。", "17ページ"],
  ["非Web制作クリエイター職", "クリエイティブ", "non-web-creative-production-image2", "非Web制作クリエイター職_web.pdf", "Web以外の制作・クリエイティブ職を確認できます。", "10ページ"],
  ["マーケティング企画広報職", "企画・広報", "marketing-planning-pr-image2", "マーケティング企画広報職_web.pdf", "企画、マーケティング、広報の仕事を確認できます。", "14ページ"],
  ["施工管理職", "技術・建築", "construction-management-image2", "施工管理職_web.pdf", "施工管理の現場、役割、働き方を確認できます。", "15ページ"],
  ["建築土木専門職", "技術・建築", "architecture-civil-image2", "建築土木専門職_web.pdf", "建築・土木領域の専門職を確認できます。", "11ページ"],
  ["機械電気電子半導体職", "技術・製造", "mechanical-electrical-semiconductor-image2", "機械電気電子半導体職_web.pdf", "メーカー技術職の領域や違いを確認できます。", "12ページ"],
  ["化学素材職", "技術・製造", "chemical-materials-image2", "化学素材職_web.pdf", "化学・素材領域の仕事を確認できます。", "10ページ"],
  ["食品化粧品日用品職", "技術・製造", "food-cosmetics-dailygoods-image2", "食品化粧品日用品職_web.pdf", "身近な製品に関わる仕事を確認できます。", "10ページ"],
  ["軽作業運送職", "現場・物流", "lightwork-logistics-image2", "軽作業運送職_web.pdf", "軽作業・運送・物流の仕事を確認できます。", "13ページ"],
  ["技能工警備清掃職", "現場・サービス", "skilled-security-cleaning-image2", "技能工警備清掃職_web.pdf", "現場を支える仕事の違いを確認できます。", "10ページ"],
  ["医療看護薬剤医療営業研究開発職", "医療", "medical-nursing-pharma-sales-dev-image2", "医療看護薬剤医療営業研究開発職_web.pdf", "医療系資格職と企業側の支援職を確認できます。", "12ページ"],
  ["公務員公共職員農林水産職", "公共", "public-agri-image2", "公務員公共職員農林水産職_web.pdf", "公務員・公共・農林水産領域の仕事を確認できます。", "11ページ"],
];

const interviews = [
  {
    title: "面接対策実践ワーク",
    tag: "面接対策",
    description: "面接前に、話す内容・自己PR・志望理由を整理するためのワークです。",
    pages: "23ページ",
    url: "./documents/interview/面接対策実践ワーク_web.pdf",
    image: `${base}/interview-practice/slide-01.png`,
  },
];

const lockScreen = document.querySelector("#lockScreen");
const siteApp = document.querySelector("#siteApp");
const passwordForm = document.querySelector("#passwordForm");
const passwordInput = document.querySelector("#passwordInput");
const passwordError = document.querySelector("#passwordError");
const jobGrid = document.querySelector("#jobGrid");
const interviewGrid = document.querySelector("#interviewGrid");
const filterChoices = document.querySelectorAll(".filter-choice");
const jobSearch = document.querySelector("#jobSearch");
const jobResultText = document.querySelector("#jobResultText");

let activeFilter = "all";
let searchTerm = "";

function unlock() {
  lockScreen.classList.add("is-hidden");
  siteApp.classList.remove("is-hidden");
}

function getUnlockedState() {
  try {
    return (
      window.localStorage?.getItem("careerSiteUnlocked") === "true" ||
      window.sessionStorage?.getItem("careerSiteUnlocked") === "true"
    );
  } catch {
    return false;
  }
}

function saveUnlockedState() {
  try {
    window.localStorage?.setItem("careerSiteUnlocked", "true");
    window.sessionStorage?.setItem("careerSiteUnlocked", "true");
  } catch {
    // file:// previews may block storage; the current page can still unlock.
  }
}

if (getUnlockedState()) {
  unlock();
}

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value.trim() === PASSWORD) {
    saveUnlockedState();
    unlock();
    return;
  }
  passwordError.textContent = "パスワードが違います。もう一度入力してください。";
});

function jobToResource([title, tag, slug, pdf, description, pages, customImage, customUrl, statusLabel]) {
  return {
    title,
    tag,
    description,
    pages,
    url: customUrl ?? lessonUrls[title] ?? `./documents/jobs/${pdf}`,
    image: customImage ?? `${base}/${slug}/slide-01.png`,
    statusLabel: statusLabel ?? (lessonUrls[title] ? "教材を見る" : "PDFを見る"),
  };
}

function matchesFilter(resource) {
  const text = `${resource.title} ${resource.tag} ${resource.description}`;
  const filterMatch =
    activeFilter === "all" ||
    resource.tag === activeFilter ||
    (activeFilter === "技術" && resource.tag.startsWith("技術"));
  const searchMatch = !searchTerm || text.toLowerCase().includes(searchTerm.toLowerCase());
  return filterMatch && searchMatch;
}

function renderCard(resource) {
  const card = document.createElement("a");
  card.className = "resource-card";
  card.href = resource.url;
  card.innerHTML = `
    <div class="resource-thumb">
      <img src="${resource.image}" alt="${resource.title}の表紙" />
    </div>
    <div class="resource-body">
      <span class="resource-tag">${resource.tag}</span>
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <div class="resource-meta">
        <span>${resource.pages}</span>
        <span class="resource-status">${resource.statusLabel}</span>
      </div>
    </div>
  `;
  return card;
}

function renderResources() {
  jobGrid.innerHTML = "";
  const visibleJobs = jobs.map(jobToResource).filter(matchesFilter);
  for (const job of visibleJobs) {
    jobGrid.appendChild(renderCard(job));
  }
  jobResultText.textContent =
    activeFilter === "all" && !searchTerm
      ? "気になる職種を選んでください。"
      : `${visibleJobs.length}件の職種が見つかりました。`;

  interviewGrid.innerHTML = "";
  for (const item of interviews) {
    interviewGrid.appendChild(renderCard(item));
  }
}

filterChoices.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterChoices.forEach((item) => item.classList.toggle("is-active", item === button));
    renderResources();
  });
});

jobSearch.addEventListener("input", () => {
  searchTerm = jobSearch.value.trim();
  renderResources();
});

renderResources();
