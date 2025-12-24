// Simplified Chinese translations
import { Translation } from './en';

export const zhCN: Translation = {
  navbar: {
    logo: '单哆啦AI',
    products: '产品',
    solutions: '解决方案',
    customers: '客户',
    resources: '资源',
    signIn: '登录',
    requestDemo: '申请演示',
  },
  megaMenu: {
    coreCapabilities: '核心能力',
    auditCompliance: '审计与合规',
    automation: '自动化',
  },
  hero: {
    title: {
      line1: '下一代',
      line2: '智能财务',
      line3: '由 Agentic AI 驱动',
    },
    subtitle: '通过能够思考、学习和行动的自主智能体，革新您的财务运营——将费用管理从被动处理转变为主动智能。',
    ctaPrimary: '申请演示',
    ctaSecondary: '探索平台',
    certifications: {
      soc2: 'SOC 2 认证',
      gdpr: 'GDPR 合规',
    },
    floatingCards: {
      classification: '智能分类',
      classificationSub: '99.2% 准确率',
      smartReview: '智能审核',
      smartReviewSub: '实时智能体',
      compliance: '智能合规',
      complianceSub: 'RAG 驱动',
    },
  },
  features: {
    title: '六大核心能力',
    subtitle: '通过 AI 驱动的自动化，实现从文档采集到事后审计的全生命周期财务运营转型。',
    cta: '查看平台演示',
    classification: {
      title: '智能分类',
      subtitle: '智能文档分类',
    },
    matching: {
      title: '智能比对',
      subtitle: '无缝对账',
    },
    review: {
      title: '智能审核',
      subtitle: '全面审计',
    },
    compliance: {
      title: '智能合规',
      subtitle: '法规遵从',
    },
    filling: {
      title: '智能填报',
      subtitle: '自动化表单处理',
    },
    audit: {
      title: '智能审计',
      subtitle: '端到端可追溯',
    },
    list: [
      {
        title: '智能分类',
        subtitle: '智能文档分类',
        description: '利用高精度内容识别和自主判断，自动对财务文档（从发票到收据）进行分类，达到行业领先的准确率。',
        techStack: ['计算机视觉', '自然语言处理', '多模态大模型'],
      },
      {
        title: '智能比对',
        subtitle: '无缝对账',
        description: '通过先进的 OCR 和语义匹配技术，无缝对账纸质收据与数字条目，消除手动交叉核对，确保数据完整性。',
        techStack: ['OCR', '语义分析', '模糊匹配'],
      },
      {
        title: '智能审核',
        subtitle: '全面审计',
        description: '部署由大语言模型驱动的多维审计智能体，执行全面的政策检查、异常检测和合规验证——实时提供可执行的建议。',
        techStack: ['LLM 智能体', '政策引擎', '异常检测'],
      },
      {
        title: '智能合规',
        subtitle: '法规遵从',
        description: '利用基于 RAG 的智能体和向量数据库，提供实时合规指导和风险警报，确保遵守全球法规标准和内部政策。',
        techStack: ['RAG', '向量数据库', '合规引擎'],
      },
      {
        title: '智能填报',
        subtitle: '自动化表单处理',
        description: '通过 RPA 和浏览器自动化实现表单创建和提交的自动化。语义分析智能匹配支持文档并自动填充费用报告，节省数小时的手工工作。',
        techStack: ['RPA', '浏览器自动化', '智能解析'],
      },
      {
        title: '智能审计',
        subtitle: '端到端可追溯',
        description: '通过上下文感知 AI 和先进的记忆系统实现事后审计。端到端追踪每笔交易，提供完整的审计跟踪，确保透明度和问责制。',
        techStack: ['上下文工程', '记忆系统', '审计跟踪'],
      },
    ],
    learnMore: '了解更多',
  },
  stats: {
    metrics: [
      {
        value: '99.2%',
        label: '分类准确率',
        description: '高精度文档识别',
      },
      {
        value: '87%',
        label: '流程自动化',
        description: '端到端工作流覆盖',
      },
      {
        value: '10 倍',
        label: '处理速度提升',
        description: '相比人工审核',
      },
      {
        value: '100%',
        label: '审计覆盖率',
        description: '完整交易可追溯性',
      },
    ],
    trustedBy: '受全球领先企业信赖',
    caseStudy: {
      badge: '案例研究',
      title: '全球零售商实现 10 倍费用处理提速',
      description: '手动审核瓶颈限制了对支出模式和合规风险的可见性。通过部署单哆啦的智能分类和审核智能体，该组织在保持 100% 审计覆盖的同时，实现了 87% 的费用工作流自动化。',
      cta: '阅读完整案例',
      metrics: [
        { value: '10 倍', label: '处理速度提升' },
        { value: '100%', label: '审计覆盖率' },
        { value: '87%', label: '工作流自动化' },
        { value: '$250万', label: '年度成本节省' },
      ],
    },
  },
  footer: {
    tagline: '由 Agentic AI 驱动的下一代智能财务',
    platform: {
      title: '平台',
      links: [
        { name: '智能分类', href: '#classification' },
        { name: '智能比对', href: '#matching' },
        { name: '智能审核', href: '#review' },
        { name: '智能合规', href: '#compliance' },
        { name: '智能填报', href: '#filling' },
        { name: '智能审计', href: '#audit' },
      ],
    },
    solutions: {
      title: '解决方案',
      links: [
        { name: '欺诈检测', href: '#' },
        { name: '成本削减', href: '#' },
        { name: '风险管理', href: '#' },
        { name: '流程自动化', href: '#' },
      ],
    },
    company: {
      title: '公司',
      links: [
        { name: '关于我们', href: '#' },
        { name: '客户案例', href: '#' },
        { name: '博客', href: '#' },
        { name: '联系我们', href: '#' },
      ],
    },
    copyright: '© 2025 单哆啦 AI。保留所有权利。',
    legal: [
      { name: '隐私政策', href: '#' },
      { name: '服务条款', href: '#' },
      { name: '安全', href: '#' },
    ],
  },
  languages: {
    en: 'English',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
  },
};

