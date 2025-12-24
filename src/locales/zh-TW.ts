// Traditional Chinese translations
import { Translation } from './en';

export const zhTW: Translation = {
  navbar: {
    logo: '單哆啦AI',
    products: '產品',
    solutions: '解決方案',
    customers: '客戶',
    resources: '資源',
    signIn: '登入',
    requestDemo: '申請演示',
  },
  megaMenu: {
    coreCapabilities: '核心能力',
    auditCompliance: '審計與合規',
    automation: '自動化',
  },
  hero: {
    title: {
      line1: '下一代',
      line2: '智能財務',
      line3: '由 Agentic AI 驅動',
    },
    subtitle: '通過能夠思考、學習和行動的自主智能體，革新您的財務運營——將費用管理從被動處理轉變為主動智能。',
    ctaPrimary: '申請演示',
    ctaSecondary: '探索平台',
    certifications: {
      soc2: 'SOC 2 認證',
      gdpr: 'GDPR 合規',
    },
    floatingCards: {
      classification: '智能分類',
      classificationSub: '99.2% 準確率',
      smartReview: '智能審核',
      smartReviewSub: '即時智能體',
      compliance: '智能合規',
      complianceSub: 'RAG 驅動',
    },
  },
  features: {
    title: '六大核心能力',
    subtitle: '通過 AI 驅動的自動化，實現從文檔採集到事後審計的全生命週期財務運營轉型。',
    cta: '查看平台演示',
    classification: {
      title: '智能分類',
      subtitle: '智能文檔分類',
    },
    matching: {
      title: '智能比對',
      subtitle: '無縫對賬',
    },
    review: {
      title: '智能審核',
      subtitle: '全面審計',
    },
    compliance: {
      title: '智能合規',
      subtitle: '法規遵從',
    },
    filling: {
      title: '智能填報',
      subtitle: '自動化表單處理',
    },
    audit: {
      title: '智能審計',
      subtitle: '端到端可追溯',
    },
    list: [
      {
        title: '智能分類',
        subtitle: '智能文檔分類',
        description: '利用高精度內容識別和自主判斷，自動對財務文檔（從發票到收據）進行分類，達到行業領先的準確率。',
        techStack: ['計算機視覺', '自然語言處理', '多模態大模型'],
      },
      {
        title: '智能比對',
        subtitle: '無縫對賬',
        description: '通過先進的 OCR 和語義匹配技術，無縫對賬紙質收據與數字條目，消除手動交叉核對，確保數據完整性。',
        techStack: ['OCR', '語義分析', '模糊匹配'],
      },
      {
        title: '智能審核',
        subtitle: '全面審計',
        description: '部署由大語言模型驅動的多維審計智能體，執行全面的政策檢查、異常檢測和合規驗證——即時提供可執行的建議。',
        techStack: ['LLM 智能體', '政策引擎', '異常檢測'],
      },
      {
        title: '智能合規',
        subtitle: '法規遵從',
        description: '利用基於 RAG 的智能體和向量數據庫，提供即時合規指導和風險警報，確保遵守全球法規標準和內部政策。',
        techStack: ['RAG', '向量數據庫', '合規引擎'],
      },
      {
        title: '智能填報',
        subtitle: '自動化表單處理',
        description: '通過 RPA 和瀏覽器自動化實現表單創建和提交的自動化。語義分析智能匹配支持文檔並自動填充費用報告，節省數小時的手工工作。',
        techStack: ['RPA', '瀏覽器自動化', '智能解析'],
      },
      {
        title: '智能審計',
        subtitle: '端到端可追溯',
        description: '通過上下文感知 AI 和先進的記憶系統實現事後審計。端到端追蹤每筆交易，提供完整的審計跟蹤，確保透明度和問責制。',
        techStack: ['上下文工程', '記憶系統', '審計跟蹤'],
      },
    ],
    learnMore: '瞭解更多',
  },
  stats: {
    metrics: [
      {
        value: '99.2%',
        label: '分類準確率',
        description: '高精度文檔識別',
      },
      {
        value: '87%',
        label: '流程自動化',
        description: '端到端工作流覆蓋',
      },
      {
        value: '10 倍',
        label: '處理速度提升',
        description: '相比人工審核',
      },
      {
        value: '100%',
        label: '審計覆蓋率',
        description: '完整交易可追溯性',
      },
    ],
    trustedBy: '受全球領先企業信賴',
    caseStudy: {
      badge: '案例研究',
      title: '全球零售商實現 10 倍費用處理提速',
      description: '手動審核瓶頸限制了對支出模式和合規風險的可見性。通過部署單哆啦的智能分類和審核智能體，該組織在保持 100% 審計覆蓋的同時，實現了 87% 的費用工作流自動化。',
      cta: '閱讀完整案例',
      metrics: [
        { value: '10 倍', label: '處理速度提升' },
        { value: '100%', label: '審計覆蓋率' },
        { value: '87%', label: '工作流自動化' },
        { value: '$250萬', label: '年度成本節省' },
      ],
    },
  },
  footer: {
    tagline: '由 Agentic AI 驅動的下一代智能財務',
    platform: {
      title: '平台',
      links: [
        { name: '智能分類', href: '#classification' },
        { name: '智能比對', href: '#matching' },
        { name: '智能審核', href: '#review' },
        { name: '智能合規', href: '#compliance' },
        { name: '智能填報', href: '#filling' },
        { name: '智能審計', href: '#audit' },
      ],
    },
    solutions: {
      title: '解決方案',
      links: [
        { name: '欺詐檢測', href: '#' },
        { name: '成本削減', href: '#' },
        { name: '風險管理', href: '#' },
        { name: '流程自動化', href: '#' },
      ],
    },
    company: {
      title: '公司',
      links: [
        { name: '關於我們', href: '#' },
        { name: '客戶案例', href: '#' },
        { name: '博客', href: '#' },
        { name: '聯繫我們', href: '#' },
      ],
    },
    copyright: '© 2025 單哆啦 AI。保留所有權利。',
    legal: [
      { name: '隱私政策', href: '#' },
      { name: '服務條款', href: '#' },
      { name: '安全', href: '#' },
    ],
  },
  languages: {
    en: 'English',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
  },
};

