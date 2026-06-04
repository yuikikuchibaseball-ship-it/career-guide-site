import fs from "node:fs";
import path from "node:path";

const siteRoot = process.cwd();
const projectRoot = path.resolve(siteRoot, "..");
const presentationRoot = path.join(projectRoot, "outputs/019e126e-c387-7ba0-8b6f-280c76b5a544/presentations");

const jobs = [
  ["営業職", "sales", "sales-image2-full", "営業職は「売る仕事」だけではなく、相手・商材・営業スタイルによって働き方が大きく変わります。"],
  ["接客販売職", "customer-sales", "customer-sales-image2", "接客販売職は、お客様との接点を通じて信頼をつくる仕事です。店舗・販売・提案の違いを見ていきます。"],
  ["カスタマーサポート・コールセンター営業管理", "customer-support-callcenter-salesmanagement", "customer-support-callcenter-salesmanagement-image2", "問い合わせ対応やサポート職は、相手の困りごとを受け止めて解決へ導く仕事です。"],
  ["事務職", "admin-office", "admin-office-image2", "事務職は単なる入力作業ではなく、組織の仕事が進むように整える役割があります。"],
  ["管理人事労務職", "management-hr-labor", "management-hr-labor-image2", "人事・労務・管理部門は、会社の仕組みと人を支える仕事です。"],
  ["金融専門職", "financial-specialist", "financial-specialist-image2", "金融専門職は、お金やリスクに関わる判断を支える仕事です。"],
  ["ビジネス専門職士業", "business-professional-licensed", "business-professional-licensed-image2", "士業・専門職は、専門知識で企業や個人の課題を解決する仕事です。"],
  ["不動産専門職", "real-estate-specialist", "real-estate-specialist-image2", "不動産専門職は、住まいや事業に関わる大きな意思決定を支える仕事です。"],
  ["専門サービス職", "specialized-services", "specialized-services-image2", "専門サービス職は、特定領域の知識や経験を使って相手を支援する仕事です。"],
  ["コンサルタント職", "consultant", "consultant-image2", "コンサルタント職は、相手の課題を整理し、解決策を考えて実行まで支援する仕事です。"],
  ["ITエンジニア職", "it-engineer", "../outputs/it-engineer-redesign-preview/background-only-preview", "ITエンジニア職は、システムやサービスを作り、改善し、支える仕事です。"],
  ["PM・PdM・EM職", "pm-pdm-em", "pm-pdm-em-image2", "PM・PdM・EMは、プロダクトや開発組織を前に進める役割です。"],
  ["クリエイティブWeb制作職", "creative-web-production", "creative-web-production-image2", "Web制作職は、見た目だけでなく、目的に合わせて伝わる体験を作る仕事です。"],
  ["非Web制作クリエイター職", "non-web-creative-production", "non-web-creative-production-image2", "Web以外の制作職は、映像・紙・空間など多様な表現で価値を届ける仕事です。"],
  ["マーケティング企画広報職", "marketing-planning-pr", "marketing-planning-pr-image2", "マーケティング・企画・広報は、商品や会社の価値を必要な人へ届ける仕事です。"],
  ["施工管理職", "construction-management", "construction-management-image2", "施工管理職は、現場を安全に、計画通りに進める司令塔のような仕事です。"],
  ["建築土木専門職", "architecture-civil", "architecture-civil-image2", "建築土木専門職は、暮らしや街の基盤を作る技術職です。"],
  ["機械電気電子半導体職", "mechanical-electrical-semiconductor", "mechanical-electrical-semiconductor-image2", "機械・電気・電子・半導体領域は、ものづくりの仕組みを支える技術職です。"],
  ["化学素材職", "chemical-materials", "chemical-materials-image2", "化学素材職は、製品の材料や品質、研究開発に関わる仕事です。"],
  ["食品化粧品日用品職", "food-cosmetics-dailygoods", "food-cosmetics-dailygoods-image2", "食品・化粧品・日用品職は、身近な商品を安全に届けるための仕事です。"],
  ["軽作業運送職", "lightwork-logistics", "lightwork-logistics-image2", "軽作業・運送職は、商品やサービスが届く流れを支える現場の仕事です。"],
  ["技能工警備清掃職", "skilled-security-cleaning", "skilled-security-cleaning-image2", "技能工・警備・清掃職は、現場の安全・品質・快適さを守る仕事です。"],
  ["医療看護薬剤医療営業研究開発職", "medical-nursing-pharma-sales-dev", "medical-nursing-pharma-sales-dev-image2", "医療領域の仕事は、人の健康や暮らしを支える専門性の高い仕事です。"],
  ["公務員公共職員農林水産職", "public-agri", "public-agri-image2", "公共・農林水産領域は、地域や暮らしの土台を支える仕事です。"],
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function slideFiles(sourceDir) {
  return fs
    .readdirSync(sourceDir)
    .filter((name) => /^slide-\d+\.png$/.test(name))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
}

function sourceDirFor(slug) {
  if (slug.startsWith("../")) return path.join(projectRoot, slug.replace(/^\.\.\//, ""));
  return path.join(presentationRoot, slug, "assets");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function pageHtml({ title, key, intro, total }) {
  const slides = Array.from({ length: total }, (_, index) => {
    const num = String(index + 1).padStart(2, "0");
    return `        <article class="lesson-slide">
          <img src="./assets/slides/${key}/slide-${num}.jpg" alt="${escapeHtml(title)}スライド${index + 1}" />
        </article>`;
  }).join("\n");

  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#07172f" />
    <title>${escapeHtml(title)}を理解する | 理想の転職へ</title>
    <link rel="manifest" href="./manifest.json" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body class="lesson-page">
    <main>
      <header class="lesson-hero">
        <a class="lesson-back" href="./index.html#jobs">職種一覧へ戻る</a>
        <p class="eyebrow">Job Lesson</p>
        <h1>${escapeHtml(title)}を理解する</h1>
        <p>${escapeHtml(intro)}</p>
      </header>

      <section class="lesson-flow" aria-label="${escapeHtml(title)}スライド教材">
${slides}
      </section>

      <section class="lesson-next">
        <h2>次に見るもの</h2>
        <p>${escapeHtml(title)}に興味がある方は、面接前に回答の組み立て方も確認してください。</p>
        <div class="lesson-actions">
          <a class="primary-action" href="./index.html#interview">面接対策を見る</a>
          <a class="secondary-action lesson-secondary" href="./index.html#jobs">他の職種を見る</a>
        </div>
      </section>
    </main>
    <script>
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
      }
    </script>
  </body>
</html>
`;
}

const lessonMap = {};

for (const [title, key, sourceSlug, intro] of jobs) {
  const src = sourceDirFor(sourceSlug);
  const slides = slideFiles(src);
  const dest = path.join(siteRoot, "assets/slides", key);
  ensureDir(dest);
  for (const slide of slides) {
    fs.copyFileSync(path.join(src, slide), path.join(dest, slide));
  }

  const html = pageHtml({ title, key, intro, total: slides.length });
  const fileName = `job-${key}.html`;
  fs.writeFileSync(path.join(siteRoot, fileName), html);
  lessonMap[title] = `./${fileName}`;
}

fs.writeFileSync(path.join(siteRoot, "tools/job-lesson-map.json"), JSON.stringify(lessonMap, null, 2));
console.log(`Generated ${jobs.length} lessons.`);
