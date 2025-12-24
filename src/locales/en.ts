// English translations
export const en = {
  navbar: {
    logo: 'Danduola.AI',
    products: 'Products',
    solutions: 'Solutions',
    customers: 'Customers',
    resources: 'Resources',
    signIn: 'Sign In',
    requestDemo: 'Request Demo',
  },
  megaMenu: {
    coreCapabilities: 'Core Capabilities',
    auditCompliance: 'Audit & Compliance',
    automation: 'Automation',
  },
  hero: {
    title: {
      line1: 'Next-Gen',
      line2: 'Smart Financing',
      line3: 'Powered by Agentic AI',
    },
    subtitle: 'Revolutionize your financial operations with autonomous agents that think, learn, and act—transforming expense management from reactive processing to proactive intelligence.',
    ctaPrimary: 'Request Demo',
    ctaSecondary: 'Explore Platform',
    certifications: {
      soc2: 'SOC 2 Certified',
      gdpr: 'GDPR Compliant',
    },
    floatingCards: {
      classification: 'Classification',
      classificationSub: '99.2% Accuracy',
      smartReview: 'Smart Review',
      smartReviewSub: 'Real-time Agent',
      compliance: 'Compliance',
      complianceSub: 'RAG-Powered',
    },
  },
  features: {
    title: 'Six Core Capabilities',
    subtitle: 'Transform financial operations with AI-powered automation across the entire expense lifecycle—from document capture to post-event auditing.',
    cta: 'See Platform in Action',
    classification: {
      title: 'Intelligent Classification',
      subtitle: 'Smart Document Categorization',
    },
    matching: {
      title: 'Intelligent Matching',
      subtitle: 'Seamless Reconciliation',
    },
    review: {
      title: 'Intelligent Review',
      subtitle: 'Comprehensive Audit',
    },
    compliance: {
      title: 'Intelligent Compliance',
      subtitle: 'Regulatory Adherence',
    },
    filling: {
      title: 'Intelligent Filling',
      subtitle: 'Automated Form Processing',
    },
    audit: {
      title: 'Intelligent Audit',
      subtitle: 'End-to-End Traceability',
    },
    list: [
      {
        title: 'Intelligent Classification',
        subtitle: 'Smart Document Categorization',
        description: 'Leverage high-precision content recognition and autonomous judgment to automatically categorize financial documents—from invoices to receipts—with industry-leading accuracy.',
        techStack: ['Computer Vision', 'NLP', 'Multi-modal LLM'],
      },
      {
        title: 'Intelligent Matching',
        subtitle: 'Seamless Reconciliation',
        description: 'Seamlessly reconcile paper receipts with digital entries through advanced OCR and semantic matching, eliminating manual cross-referencing and ensuring data integrity.',
        techStack: ['OCR', 'Semantic Analysis', 'Fuzzy Matching'],
      },
      {
        title: 'Intelligent Review',
        subtitle: 'Comprehensive Audit',
        description: 'Deploy multi-dimensional audit agents powered by LLMs to perform comprehensive policy checks, anomaly detection, and compliance verification—delivering actionable recommendations in real-time.',
        techStack: ['LLM Agents', 'Policy Engine', 'Anomaly Detection'],
      },
      {
        title: 'Intelligent Compliance',
        subtitle: 'Regulatory Adherence',
        description: 'Harness RAG-based agents and vector databases to provide real-time compliance guidance and risk alerts, ensuring adherence to global regulatory standards and internal policies.',
        techStack: ['RAG', 'Vector DB', 'Compliance Engine'],
      },
      {
        title: 'Intelligent Filling',
        subtitle: 'Automated Form Processing',
        description: 'Automate form creation and submission with RPA and browser automation. Semantic analysis intelligently matches supporting documents and auto-populates expense reports, saving hours of manual work.',
        techStack: ['RPA', 'Browser Automation', 'Smart Parsing'],
      },
      {
        title: 'Intelligent Audit',
        subtitle: 'End-to-End Traceability',
        description: 'Enable post-event auditing with context-aware AI and advanced memory systems. Trace every transaction end-to-end with full audit trails, ensuring transparency and accountability.',
        techStack: ['Context Engineering', 'Memory System', 'Audit Trail'],
      },
    ],
    learnMore: 'Learn More',
  },
  stats: {
    metrics: [
      {
        value: '99.2%',
        label: 'Classification Accuracy',
        description: 'High-precision document recognition',
      },
      {
        value: '87%',
        label: 'Process Automation',
        description: 'End-to-end workflow coverage',
      },
      {
        value: '10x',
        label: 'Faster Processing',
        description: 'Compared to manual review',
      },
      {
        value: '100%',
        label: 'Audit Coverage',
        description: 'Full transaction traceability',
      },
    ],
    trustedBy: 'Trusted by Leading Enterprises Worldwide',
    caseStudy: {
      badge: 'CASE STUDY',
      title: 'Global Retailer Achieves 10x Faster Expense Processing',
      description: 'Manual review bottlenecks limited visibility into spending patterns and compliance risks. By deploying Danduola\'s intelligent classification and review agents, the organization automated 87% of expense workflows while maintaining 100% audit coverage.',
      cta: 'Read Full Case Study',
      metrics: [
        { value: '10x', label: 'Faster processing speed' },
        { value: '100%', label: 'Audit coverage rate' },
        { value: '87%', label: 'Workflow automation' },
        { value: '$2.5M', label: 'Annual cost savings' },
      ],
    },
  },
  footer: {
    tagline: 'Next-Gen Smart Financing Powered by Agentic AI',
    platform: {
      title: 'Platform',
      links: [
        { name: 'Classification', href: '#classification' },
        { name: 'Matching', href: '#matching' },
        { name: 'Review', href: '#review' },
        { name: 'Compliance', href: '#compliance' },
        { name: 'Filling', href: '#filling' },
        { name: 'Audit', href: '#audit' },
      ],
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Fraud Detection', href: '#' },
        { name: 'Cost Reduction', href: '#' },
        { name: 'Risk Management', href: '#' },
        { name: 'Process Automation', href: '#' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    copyright: '© 2025 Danduola AI. All rights reserved.',
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
    ],
  },
  languages: {
    en: 'English',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
  },
};

export type Translation = typeof en;

