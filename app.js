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

const jobSearchKeywords = {
  "営業職": "法人営業 個人営業 ルート営業 新規営業 提案営業 インサイドセールス 外回り 商談 営業マン セールス 売る 交渉 顧客 未経験 未経験歓迎 第二新卒 学歴不問 高卒 資格なし 年収高い 年収400万 年収500万 年収600万 稼げる インセンティブ 土日休み 土日祝休み 転勤なし 女性活躍 人と話す 人と関わる",
  "接客販売職": "接客 販売 店舗 アパレル 美容師 美容部員 エステ ネイリスト 飲食 ホール カフェ レジ 受付 サービス お客様 コミュニケーション 未経験 未経験歓迎 第二新卒 学歴不問 高卒 資格なし 女性活躍 人と話す 人と関わる 平日休み シフト制 転勤なし",
  "カスタマーサポート・コールセンター営業管理": "コールセンター カスタマーサポート カスタマーサービス CS ヘルプデスク テレアポ テレオペ 受電 架電 問い合わせ オペレーター 営業事務 サポート 未経験 未経験歓迎 第二新卒 学歴不問 高卒 資格なし 在宅 リモート フルリモート 残業少ない 土日休み 土日祝休み 女性活躍 人と話す",
  "事務職": "一般事務 営業事務 経理事務 医療事務 学校事務 受付 データ入力 書類作成 バックオフィス オフィスワーク PC パソコン 未経験 未経験歓迎 第二新卒 学歴不問 高卒 資格なし 土日休み 土日祝休み 年間休日120日 休み多い 残業少ない 定時 在宅 リモート 転勤なし 女性活躍 黙々 一人作業",
  "管理人事労務職": "人事 労務 採用 総務 給与 社保 社会保険 勤怠 管理部門 バックオフィス 教育 研修 土日休み 土日祝休み 年間休日120日 残業少ない 在宅 リモート 転勤なし 女性活躍 年収400万 年収500万 人と関わる",
  "金融専門職": "銀行 証券 保険 FP ファイナンシャルプランナー 融資 資産運用 金融 住宅ローン 投資 土日休み 土日祝休み 年間休日120日 年収高い 年収400万 年収500万 年収600万 資格 転勤なし 女性活躍",
  "ビジネス専門職士業": "士業 税理士 会計士 社労士 行政書士 司法書士 弁護士 法務 会計 監査 コンサル 専門家 土日休み 土日祝休み 年間休日120日 年収高い 年収500万 年収600万 資格 在宅 リモート 転勤なし",
  "不動産専門職": "不動産 賃貸 売買 仲介 宅建 住宅 マンション 物件 管理 土地 建物 リフォーム 未経験 未経験歓迎 学歴不問 高卒 年収高い 年収400万 年収500万 インセンティブ 平日休み シフト制 転勤なし 人と話す",
  "専門サービス職": "教育 講師 インストラクター スクール 旅行 ホテル ブライダル 冠婚葬祭 介護 福祉 サービス 専門 未経験 未経験歓迎 学歴不問 高卒 資格なし 女性活躍 人と話す 人と関わる 平日休み シフト制 転勤なし",
  "コンサルタント職": "コンサル 経営コンサル ITコンサル 戦略 業務改善 課題解決 分析 提案 プロジェクト 土日休み 土日祝休み 年間休日120日 年収高い 年収500万 年収600万 在宅 リモート フレックス 人と話す",
  "ITエンジニア職": "IT エンジニア プログラマー SE システムエンジニア 開発 インフラ ネットワーク サーバー アプリ Web コーディング 未経験IT 未経験 未経験歓迎 第二新卒 学歴不問 高卒 資格なし 土日休み 土日祝休み 年間休日120日 残業少ない 在宅 リモート フルリモート フレックス 副業 転勤なし 年収高い 年収400万 年収500万 年収600万 黙々 一人作業",
  "PM・PdM・EM職": "PM PdM EM プロジェクトマネージャー プロダクトマネージャー エンジニアリングマネージャー 管理 開発管理 ディレクション 土日休み 土日祝休み 年間休日120日 在宅 リモート フルリモート フレックス 副業 年収高い 年収500万 年収600万 人と話す",
  "クリエイティブWeb制作職": "Web制作 Webデザイン デザイナー コーダー フロントエンド UI UX ホームページ 制作 ディレクター バナー 未経験 未経験歓迎 学歴不問 資格なし 土日休み 土日祝休み 在宅 リモート フルリモート フレックス 副業 女性活躍 黙々 一人作業",
  "非Web制作クリエイター職": "動画 映像 編集 カメラマン フォトグラファー グラフィック DTP イラスト 広告 制作 クリエイター デザイン 未経験 学歴不問 資格なし 在宅 リモート 副業 女性活躍 黙々 一人作業",
  "マーケティング企画広報職": "マーケティング 企画 広報 PR SNS 広告 運用 集客 販促 ブランディング メディア 商品企画 未経験 第二新卒 土日休み 土日祝休み 年間休日120日 在宅 リモート フルリモート フレックス 副業 転勤なし 女性活躍 年収400万 年収500万",
  "施工管理職": "施工管理 現場監督 建設 建築 土木 工事 職人 ゼネコン 現場 安全管理 工程管理 品質管理 未経験 未経験歓迎 第二新卒 学歴不問 高卒 資格なし 年収高い 年収400万 年収500万 年収600万 稼げる 手に職 転勤なし 男性活躍",
  "建築土木専門職": "建築 土木 設計 CAD 施工 図面 測量 建設 構造 住宅 インフラ 都市 土日休み 土日祝休み 年間休日120日 年収高い 年収400万 年収500万 手に職 資格 転勤なし 黙々",
  "機械電気電子半導体職": "機械 電気 電子 半導体 メーカー 製造 技術 設計 生産技術 設備保全 回路 自動車 未経験 第二新卒 土日休み 土日祝休み 年間休日120日 年収400万 年収500万 工場 メーカー 手に職 黙々 一人作業 転勤なし",
  "化学素材職": "化学 素材 材料 研究 開発 品質管理 品質保証 分析 実験 樹脂 繊維 土日休み 土日祝休み 年間休日120日 年収400万 年収500万 工場 メーカー 黙々 一人作業 女性活躍",
  "食品化粧品日用品職": "食品 化粧品 日用品 品質管理 品質保証 商品開発 研究 製造 工場 衛生 検査 未経験 土日休み 土日祝休み 年間休日120日 残業少ない メーカー 黙々 一人作業 女性活躍",
  "軽作業運送職": "軽作業 物流 倉庫 仕分け ピッキング 梱包 検品 配送 運送 ドライバー 工場 ライン作業 製造 現場 未経験 未経験歓迎 学歴不問 高卒 資格なし 残業少ない シフト制 平日休み 黙々 一人作業 転勤なし",
  "技能工警備清掃職": "技能工 警備 清掃 設備管理 ビルメンテナンス メンテナンス 整備 工場 作業員 職人 現場 未経験 未経験歓迎 学歴不問 高卒 資格なし 手に職 シフト制 平日休み 黙々 一人作業 転勤なし",
  "医療看護薬剤医療営業研究開発職": "医療 看護師 看護 薬剤師 薬局 病院 クリニック 介護 理学療法士 作業療法士 医療事務 MR 医療営業 研究開発 資格 女性活躍 年収400万 年収500万 土日休み シフト制 平日休み 人と関わる 転勤なし",
  "公務員公共職員農林水産職": "公務員 公共 団体 自治体 市役所 県庁 農業 林業 水産 漁業 地方 地域 土日休み 土日祝休み 年間休日120日 安定 転勤なし 地元 地方 女性活躍",
};

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
    keywords: jobSearchKeywords[title] ?? "",
    url: customUrl ?? lessonUrls[title] ?? `./documents/jobs/${pdf}`,
    image: customImage ?? `${base}/${slug}/slide-01.png`,
    statusLabel: statusLabel ?? (lessonUrls[title] ? "教材を見る" : "PDFを見る"),
  };
}

function normalizeSearchText(value) {
  return value.toLowerCase().replace(/\s+/g, "");
}

function searchQueries(value) {
  const query = normalizeSearchText(value);
  const aliases = {
    "未経験ok": "未経験",
    "未経験可": "未経験",
    "初心者": "未経験",
    "経験不問": "未経験",
    "土日祝日休み": "土日祝休み",
    "土日祝休": "土日祝休み",
    "完全週休2日": "土日休み",
    "完全週休二日": "土日休み",
    "週休2日": "土日休み",
    "週休二日": "土日休み",
    "年休120": "年間休日120日",
    "年間休日120日以上": "年間休日120日",
    "年収400万円": "年収400万",
    "年収500万円": "年収500万",
    "年収600万円": "年収600万",
    "400万": "年収400万",
    "500万": "年収500万",
    "600万": "年収600万",
    "在宅ワーク": "在宅",
    "リモートワーク": "リモート",
    "テレワーク": "リモート",
    "在宅勤務": "在宅",
    "副業ok": "副業",
    "残業少なめ": "残業少ない",
    "残業少": "残業少ない",
    "残業なし": "残業少ない",
    "資格不要": "資格なし",
    "資格不問": "資格なし",
    "学歴不問": "高卒",
  };
  return [query, aliases[query]].filter(Boolean);
}

function matchesFilter(resource) {
  const text = normalizeSearchText(`${resource.title} ${resource.tag} ${resource.description} ${resource.keywords}`);
  const queries = searchQueries(searchTerm);
  const filterMatch =
    activeFilter === "all" ||
    resource.tag === activeFilter ||
    (activeFilter === "技術" && resource.tag.startsWith("技術"));
  const searchMatch = queries.length === 0 || queries.some((query) => text.includes(query));
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
