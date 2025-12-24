# Danduola AI Landing Page - Media Requirements

本文档详细说明了落地页所需的所有图片和媒体素材，包括位置、尺寸、格式和内容建议。

---

## 📋 总览

| ID | 位置 | 类型 | 数量 | 优先级 |
|----|------|------|------|--------|
| HERO-01 | Hero 区块主视觉 | 插图/照片 | 1 | ⭐⭐⭐ 高 |
| FEATURE-ICONS | 功能卡片图标 | 图标/插图 | 6 | ⭐⭐ 中 |
| LOGO-WALL | 客户 Logo 墙 | Logo 集合 | 6-12 | ⭐⭐ 中 |
| CASE-STUDY | 案例研究配图 | 截图/图表 | 1-2 | ⭐ 低 |

---

## 🎨 详细需求

### 1. HERO-01: Hero 区块主视觉

**位置**: 首屏右侧主视觉区域  
**文件**: `src/components/Hero.tsx` (第 57-64 行)

#### 规格要求
- **尺寸**: 800x1000px (4:5 比例)
- **格式**: PNG (透明背景) 或 JPG
- **文件大小**: < 500KB (建议优化以加快加载速度)
- **分辨率**: 144 DPI (适配 Retina 屏幕)

#### 内容建议
展示 Agentic AI 在财务场景中的应用，可选方案：

**方案 A: 抽象科技风**
- 3D 渐变球体或网格结构
- 数据流动可视化（粒子效果）
- 配色：蓝色渐变 (#4F46E5 → #06B6D4) 或紫粉渐变 (#EC4899 → #8B5CF6)
- 参考风格：Stripe、Linear 的 Hero 插图

**方案 B: 真实场景风**
- 现代化办公场景（模糊背景）
- 前景展示 AI Dashboard 界面
- 透明悬浮卡片展示关键指标
- 配色：柔和的蓝白色调

**方案 C: 数据可视化风**
- 仪表盘界面截图
- 智能体工作流程图
- 实时数据处理动画（静态图可用多帧示意）
- 配色：专业的深蓝 + 珊瑚红强调色

#### 生成工具建议
- **AI 生成**: Midjourney, DALL-E 3, Stable Diffusion
  - Prompt 示例: "Modern 3D isometric illustration of AI financial dashboard, floating UI cards, gradient blue and purple, tech aesthetic, clean background --ar 4:5"
- **设计工具**: Figma, Blender (3D), Adobe Illustrator
- **图库**: Unsplash, Freepik (需注意授权)

---

### 2. FEATURE-ICONS: 功能特性图标

**位置**: 六大功能卡片顶部图标区域  
**文件**: `src/components/Features.tsx` (第 32-137 行，当前使用 SVG 占位)

#### 规格要求
- **尺寸**: 64x64px 或 96x96px (推荐 96px 以支持高清屏)
- **格式**: SVG (首选) 或 PNG (透明背景)
- **风格**: 扁平化、线性图标或 2.5D 等距插图
- **配色**: 主色使用 `#f87171` (珊瑚红) 或配合渐变

#### 六个图标内容

| 功能 | 图标主题 | 设计要点 |
|------|----------|----------|
| **1. Intelligent Classification** (智能分类) | 文档分类、AI 识别 | 文件夹 + AI 扫描光束、分类标签 |
| **2. Intelligent Matching** (智能比对) | 对比、匹配 | 两份文档对齐、勾选标记、等号 |
| **3. Intelligent Review** (智能审核) | 审核通过、检查 | 放大镜 + 勾选、盾牌 + 星星 |
| **4. Intelligent Compliance** (智能合规) | 合规、安全 | 盾牌 + 勾选、锁 + 文件 |
| **5. Intelligent Filling** (智能填报) | 自动填写、表单 | 机器人手臂 + 笔、自动化齿轮 |
| **6. Intelligent Audit** (智能审计) | 审计追踪、历史记录 | 时间线 + 文档、审计图标 |

#### 设计工具建议
- **图标库**: Heroicons (已在代码中使用), Lucide, Phosphor Icons
- **自定义设计**: Figma + Iconify 插件
- **AI 生成**: Recraft.ai (图标生成), Iconscout AI

#### 实施方案
1. **快速方案**: 使用当前 Heroicons SVG（已集成）
2. **定制方案**: 设计统一风格的自定义图标集
3. **混合方案**: 选择 Lucide/Phosphor 等高质量开源图标库

---

### 3. LOGO-WALL: 客户 Logo 墙

**位置**: Stats 区块 - 社交证明部分  
**文件**: `src/components/Stats.tsx` (第 163-179 行)

#### 规格要求
- **数量**: 6-12 个客户 Logo
- **单个尺寸**: 120x60px (宽度优先，高度不超过 60px)
- **格式**: SVG (首选) 或 PNG (透明背景)
- **配色**: 单色灰度或原色（建议统一处理为灰度以保持视觉一致性）
- **命名规范**: `logo-companyname.svg` (例如: `logo-microsoft.svg`)

#### 内容建议
展示知名企业客户或合作伙伴 Logo：

**获取途径**:
1. **真实客户**: 需获得客户授权使用其 Logo
2. **占位示例**: 使用行业领域的代表性企业（仅用于演示）
3. **通用标识**: "Fortune 500 Enterprise", "Leading Retailer" 等文字标识

**参考企业类型**:
- 零售电商: Amazon, Walmart, Alibaba
- 科技公司: Microsoft, SAP, Oracle
- 金融机构: JP Morgan, Goldman Sachs
- 制造业: Siemens, GE, Bosch
- 教育机构: Harvard, MIT, Stanford
- 医疗健康: Johnson & Johnson, Pfizer

#### 设计处理
```css
/* 建议应用以下 CSS 滤镜实现灰度效果 */
filter: grayscale(100%) opacity(60%);

/* 悬停时恢复原色 */
filter: grayscale(0%) opacity(100%);
```

#### 法律注意事项
⚠️ **商标使用警告**: 
- 使用真实企业 Logo 前务必获得书面授权
- 未授权使用可能导致商标侵权
- 建议使用文字描述替代（如 "Leading Global Retailer"）

---

### 4. CASE-STUDY: 案例研究配图 (可选)

**位置**: Stats 区块 - 案例亮点左侧或背景  
**文件**: `src/components/Stats.tsx` (第 182-240 行)

#### 规格要求
- **尺寸**: 400x300px 或 16:9 比例 (如 640x360px)
- **格式**: PNG 或 JPG
- **类型**: Dashboard 截图、数据图表、流程图

#### 内容建议
**方案 A: Dashboard 截图**
- 展示 Danduola 平台界面
- 突出显示关键指标（分类准确率、处理速度等）
- 可用 Figma 设计 Mockup

**方案 B: 数据可视化**
- 柱状图: 处理效率提升对比（Before/After）
- 折线图: 成本节省趋势
- 饼图: 自动化覆盖率

**方案 C: 流程图**
- Agentic AI 工作流程可视化
- 六大功能模块关系图
- 数据流动示意图

#### 实施建议
由于案例研究内容可能随客户变化，建议：
1. 初期使用占位图（当前实现）
2. 待有真实案例数据后再替换
3. 可使用图表库 (如 Chart.js, Recharts) 动态生成

---

## 🛠️ 媒体素材生成工具推荐

### AI 图像生成
- **Midjourney**: 适合抽象科技风、高质量插图
- **DALL-E 3**: 适合具象场景、真实感渲染
- **Stable Diffusion**: 开源方案，可本地部署
- **Recraft.ai**: 专注于图标和矢量图生成

### 设计工具
- **Figma**: 网页设计、UI Mockup
- **Adobe Illustrator**: 矢量图标、Logo 设计
- **Blender**: 3D 插图、等距视图
- **Canva**: 快速图形设计（适合非设计师）

### 图标库
- **Heroicons**: MIT 协议，已集成
- **Lucide Icons**: 开源，设计精美
- **Phosphor Icons**: 多风格可选
- **Iconify**: 聚合多个图标库

### 免费图库 (需注意授权)
- **Unsplash**: 高质量摄影作品
- **Pexels**: 免费商用图片和视频
- **Freepik**: 矢量图和插图（部分需付费）
- **unDraw**: 开源 SVG 插图

---

## 📐 技术实施指南

### 图片优化
建议使用以下工具压缩图片：
- **TinyPNG**: 无损压缩 PNG/JPG
- **SVGOMG**: 优化 SVG 文件大小
- **ImageOptim**: macOS 本地压缩工具
- **Squoosh**: Google 在线压缩工具

### Next.js Image 组件
替换占位符时，使用 Next.js 的 `<Image>` 组件以获得最佳性能：

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-visual.png"
  alt="Danduola AI Financial Agent Dashboard"
  width={800}
  height={1000}
  priority // Hero 图片应设置优先加载
  className="rounded-2xl shadow-xl"
/>
```

### SVG 图标实施
对于功能图标，可保留当前 SVG 代码或替换为自定义 SVG：

```tsx
// 方案 1: 内联 SVG (当前实现)
<svg className="w-12 h-12 text-coral" ...>...</svg>

// 方案 2: 外部 SVG 文件
<Image src="/icons/classification.svg" alt="" width={64} height={64} />

// 方案 3: 使用图标库组件 (如 lucide-react)
import { FileSearch } from 'lucide-react';
<FileSearch className="w-12 h-12 text-coral" />
```

---

## ✅ 实施检查清单

### 优先级 1 (立即需要)
- [ ] HERO-01: 准备 Hero 区块主视觉图片 (800x1000px)
- [ ] 决定功能图标方案（使用现有 Heroicons 或定制）

### 优先级 2 (近期完成)
- [ ] LOGO-WALL: 收集 6-12 个客户 Logo（需授权）
- [ ] 优化所有图片文件大小（< 200KB 每个）

### 优先级 3 (可选增强)
- [ ] CASE-STUDY: 设计案例研究配图
- [ ] 添加 Favicon 和社交媒体分享图（OG Image）
- [ ] 准备移动端优化版本图片

---

## 📞 需要帮助？

如需进一步的设计支持或技术实施指导，请参考：
- Next.js Image 文档: https://nextjs.org/docs/app/building-your-application/optimizing/images
- Figma 社区模板: https://www.figma.com/community
- Midjourney 文档: https://docs.midjourney.com/

---

**文档版本**: 1.0  
**最后更新**: 2025-12-24  
**维护者**: Danduola Development Team

