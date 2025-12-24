# Danduola (单哆啦) - Next-Gen Smart Financing Platform

[![Deploy to GitHub Pages](https://github.com/wenwenba2020/danduola-ai-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/wenwenba2020/danduola-ai-site/actions/workflows/deploy.yml)

基于 AppZen 设计风格构建的 Agentic AI 智能财务平台官网落地页。

🌐 **在线访问**: 
- **GitHub Pages**: https://wenwenba2020.github.io/danduola-ai-site/
- EdgeOne Pages: https://danduola-ai-site-gfjf6g3lfq.edgeone.run

> **💡 缓存说明**: GitHub Pages 使用 CDN 缓存，首次部署或更新后可能需要 15-30 分钟全球生效。如遇到旧版本，请硬刷新（`Ctrl+Shift+R`）或清除浏览器缓存。

## 项目概述

这是一个面向海外企业客户的专业级财务自动化平台落地页，采用现代 B2B SaaS 设计风格。项目使用 Next.js 16、TypeScript 和 Tailwind CSS 构建，展示 Danduola 基于 Agentic AI 的六大核心财务智能化能力。

**核心定位**: Next-Gen Smart Financing Powered by Agentic AI

## ✨ 项目亮点

- 🌍 **三语言支持**: 英语、简体中文、繁体中文一键切换
- 🖼️ **真实图片**: 使用 Pexels 高质量商业授权图片
- 📱 **响应式设计**: 完美适配桌面、平板、移动设备
- ⚡ **静态导出**: 纯静态网站，加载速度极快
- 🎨 **专业设计**: 参考 AppZen 的极简 B2B SaaS 风格
- 🚀 **CDN 部署**: 已部署到 EdgeOne Pages 全球 CDN

## 技术栈

- **框架**: Next.js 16 (App Router, Static Export)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **包管理器**: npm
- **图片来源**: Pexels (免费商用许可)

## 设计特点

### 视觉风格
- **极简主义**: 大量留白，清晰的视觉层级
- **配色方案**: 
  - 主色调：黑白灰（专业、严谨）
  - 强调色：珊瑚红 (#f87171) 用于 CTA 按钮
- **排版**: 超大号粗体标题，强烈的视觉冲击力
- **布局**: 模块化网格系统，响应式设计

### 核心组件

1. **Navbar** (`src/components/Navbar.tsx`)
   - Sticky 定位，固定在顶部
   - 品牌标识: Danduola.AI (英文) / 单哆啦AI (简体中文) / 單哆啦AI (繁体中文)
   - 多语言切换器（英语、简体中文、繁体中文）
   - 响应式汉堡菜单（移动端）
   - CTA: "Request Demo"

2. **Hero** (`src/components/Hero.tsx`)
   - 主 Slogan: "Next-Gen Smart Financing Powered by Agentic AI"
   - 专业的国际化价值主张
   - 双栏布局：左侧文本，右侧 AI 可视化
   - **真实图片**: 专业人士分析财务数据和 AI 仪表盘（来自 Pexels）
   - 悬浮卡片展示：智能分类、审核、合规
   - 信任标识: SOC 2、GDPR
   - 双 CTA: "Request Demo" + "Explore Platform"

3. **Features** (`src/components/Features.tsx`)
   - **六大核心功能模块**：
     1. Intelligent Classification (智能分类) - 高精度文档识别
     2. Intelligent Matching (智能比对) - 纸质与数字单据对比
     3. Intelligent Review (智能审核) - 多维度 LLM Agent 审核
     4. Intelligent Compliance (智能合规) - RAG 驱动的合规引擎
     5. Intelligent Filling (智能填报) - RPA + 语义分析自动填报
     6. Intelligent Audit (智能审计) - 上下文感知的可追溯审计
   - 3 列网格布局（桌面端）
   - 每个功能包含：图标、英文标题、中文副标题、描述、技术栈标签
   - 中部 CTA: "See Platform in Action"

4. **Stats** (`src/components/Stats.tsx`)
   - 关键指标：99.2% 分类准确率、87% 自动化率、10x 处理速度、100% 审计覆盖
   - 客户 Logo 墙（6-12 个企业 Logo）
   - 案例研究：全球零售商 10x 提速案例
   - 四象限指标卡片

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建静态网站

```bash
npm run build
```

构建完成后，所有静态文件将在 `out/` 目录中。

### 本地预览构建结果

由于项目使用静态导出，需要使用简单的 HTTP 服务器来预览：

```bash
npx serve out
```

## 部署与访问

本项目支持多种部署方式，包括 **GitHub Pages**、**EdgeOne Pages** 等静态网站托管平台。

### 方式 1：GitHub Pages 部署（推荐）

#### 快速部署脚本

```bash
# 运行自动部署脚本
./deploy-github-pages.sh <your-github-username>
```

#### 手动部署步骤

1. **创建 GitHub 仓库**
   - 访问 https://github.com/new
   - 创建公开仓库（GitHub Pages 免费版需要 Public）
   - 不要初始化 README

2. **推送代码并部署**
   ```bash
   # 添加远程仓库
   git remote add origin https://github.com/<username>/danduola-ai-site.git
   
   # 提交并推送代码
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   
   # 构建项目
   npm run build
   
   # 部署到 gh-pages 分支
   cd out
   git init
   git add -A
   git commit -m "Deploy to GitHub Pages"
   git push -f https://github.com/<username>/danduola-ai-site.git main:gh-pages
   cd ..
   ```

3. **配置 GitHub Pages**
   - 访问仓库的 Settings → Pages
   - Source 选择 `gh-pages` 分支
   - 点击 Save
   - 等待几分钟后访问: `https://<username>.github.io/danduola-ai-site/`

#### 重要说明
- 已在 `out/.nojekyll` 添加文件，确保 `_next/` 目录不被忽略
- 图片已配置 `unoptimized: true`，确保静态导出正常工作
- 所有资源路径使用相对路径，支持子目录部署

### 方式 2：EdgeOne Pages 部署

项目使用 MCP EdgeOne Pages 工具进行部署：

```bash
# 构建项目
npm run build

# 使用 EdgeOne Pages MCP 部署
# builtFolderPath: ./out
# projectType: static
```

🌐 **EdgeOne 预览地址**: https://danduola-ai-site-gfjf6g3lfq.edgeone.run

> **注意**: 预览链接带有 token 参数有时效性。建议在控制台绑定自定义域名以获得永久访问地址。

## 项目结构

```
danduola-ai-site/
├── src/
│   ├── app/
│   │   ├── globals.css        # 全局样式和 Tailwind 配置
│   │   ├── layout.tsx          # 根布局（含多语言 Provider）
│   │   └── page.tsx            # 首页
│   ├── components/
│   │   ├── Navbar.tsx          # 导航栏组件（含语言切换器）
│   │   ├── Hero.tsx            # Hero 区块组件
│   │   ├── Features.tsx        # 功能特性组件
│   │   ├── Stats.tsx           # 统计数据组件
│   │   └── Footer.tsx          # 页脚组件
│   ├── lib/
│   │   └── LanguageContext.tsx # 多语言上下文
│   └── locales/
│       ├── en.ts               # 英文翻译
│       ├── zh-CN.ts            # 简体中文翻译
│       ├── zh-TW.ts            # 繁体中文翻译
│       └── index.ts            # 翻译导出
├── public/
│   └── images/                 # 图片资源
│       ├── hero-dashboard-analysis.jpg
│       ├── laptop-financial-chart.jpg
│       ├── receipt-handling.jpg
│       ├── document-audit.jpg
│       ├── tax-compliance.jpg
│       ├── documents-laptop.jpg
│       ├── retail-case-study.jpg
│       └── CREDITS.md          # 图片归属信息
├── out/                        # 静态导出输出目录
├── next.config.ts              # Next.js 配置（静态导出）
├── package.json
├── MEDIA_REQUIREMENTS.md       # 媒体素材需求文档
└── README.md
```

## 品牌与配色方案

### 品牌标识
- **中文名称**: 单哆啦
- **英文名称**: Danduola
- **Slogan**: Next-Gen Smart Financing Powered by Agentic AI

### 配色方案
项目在 `src/app/globals.css` 中定义了专业的配色：

```css
--coral-red: #f87171;      /* CTA 按钮强调色（珊瑚红）*/
--deep-black: #111827;     /* 标题文字 */
--dark-gray: #374151;      /* 正文文字 */
--light-gray: #f3f4f6;     /* 背景色 */
```

### 设计原则
- **极简主义**: 大量留白，突出核心信息
- **专业性**: 面向海外企业客户的严谨表述
- **科技感**: 渐变色、悬浮卡片、玻璃拟态效果
- **信任感**: 数据驱动、案例佐证、社交证明

## 响应式设计

- **移动端** (< 768px): 单列布局，汉堡菜单
- **平板** (768px - 1024px): 2 列网格
- **桌面** (> 1024px): 4 列网格，完整导航栏

## 开发规范

- 所有组件使用 TypeScript 类型注解
- 遵循 React Hooks 最佳实践
- CSS 使用 Tailwind 原子化类名
- 代码注释清晰，便于维护

## 媒体素材需求

详细的图片和媒体素材需求请参阅 **[MEDIA_REQUIREMENTS.md](./MEDIA_REQUIREMENTS.md)**，包括：

- **HERO-01**: Hero 区块主视觉图 (800x1000px)
- **FEATURE-ICONS**: 六个功能图标 (64-96px)
- **LOGO-WALL**: 6-12 个客户 Logo (120x60px)
- **CASE-STUDY**: 案例研究配图 (可选)

## 已完成功能

### ✅ 内容增强
- [x] **真实图片集成**: 使用 Pexels MCP 选择并集成了 7 张高质量专业图片
- [x] **Hero 主视觉图**: 专业人士分析财务数据的场景图
- [x] **案例研究配图**: 零售业案例研究背景图

### ✅ 多语言支持
- [x] **三语言切换**: 英语、简体中文、繁体中文
- [x] **动态 Logo**: 根据语言显示不同品牌名称
  - 英文: Danduola.AI
  - 简体中文: 单哆啦AI
  - 繁体中文: 單哆啦AI
- [x] **完整翻译**: 所有 UI 文本、功能描述、CTA 按钮均已翻译
- [x] **持久化存储**: 使用 localStorage 保存用户语言偏好

### ✅ 部署优化
- [x] **静态导出配置**: 使用 `output: 'export'` 进行静态网站生成
- [x] **图片优化配置**: 禁用 Next.js 图片优化以适配 EdgeOne Pages
- [x] **公网部署**: 成功部署到 EdgeOne Pages CDN

## 后续优化计划

### 内容增强
- [ ] 添加真实客户 Logo（需获得授权）
- [ ] 设计自定义功能图标
- [ ] 准备案例研究详细页面

### 功能扩展
- [ ] 实现导航栏下拉菜单（Mega Menu）
- [ ] 添加平滑滚动动画 (Framer Motion)
- [ ] 集成表单系统（Request Demo）

### 技术优化
- [ ] 优化 SEO 元数据和 OG 标签
- [ ] 添加 Google Analytics / Mixpanel
- [ ] 实施 A/B 测试框架
- [ ] 添加性能监控（Sentry）

## 许可证

MIT License

---

**项目创建日期**: 2025-12-24
