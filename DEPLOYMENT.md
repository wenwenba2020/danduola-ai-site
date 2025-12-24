# 部署指南 - Danduola AI Site

本文档提供详细的 GitHub Pages 部署指南。

## 🚀 方式一：自动部署（推荐）

使用 GitHub Actions 自动化工作流，每次推送代码时自动部署。

### 步骤

#### 1. 创建 GitHub 仓库

访问 https://github.com/new，创建新仓库：
- **仓库名称**: `danduola-ai-site`
- **可见性**: **Public**（GitHub Pages 免费版需要公开仓库）
- **不要**勾选 "Initialize this repository with a README"

#### 2. 推送代码到 GitHub

```bash
# 在项目根目录执行
cd /Users/robertzf/danduola-ai-site

# 添加远程仓库（替换 <your-username> 为您的 GitHub 用户名）
git remote add origin https://github.com/<your-username>/danduola-ai-site.git

# 提交所有更改
git add .
git commit -m "Initial commit: Danduola AI site with multi-language support"

# 推送到 GitHub
git push -u origin main
```

#### 3. 配置 GitHub Pages

1. 访问仓库页面: `https://github.com/<your-username>/danduola-ai-site`
2. 点击 **Settings** (设置)
3. 左侧菜单找到 **Pages**
4. 在 **Source** 部分，选择：
   - **Source**: GitHub Actions
5. 保存配置

#### 4. 等待自动部署

推送代码后，GitHub Actions 会自动：
- 安装依赖
- 构建静态网站
- 部署到 GitHub Pages

查看部署状态：
- 访问仓库的 **Actions** 标签
- 等待 "Deploy to GitHub Pages" 工作流完成（约 2-3 分钟）

#### 5. 访问网站

部署成功后，访问：
```
https://<your-username>.github.io/danduola-ai-site/
```

---

## 🛠️ 方式二：手动部署

如果不想使用 GitHub Actions，可以使用提供的部署脚本手动部署。

### 使用部署脚本

```bash
# 运行部署脚本（替换 <your-username> 为您的 GitHub 用户名）
./deploy-github-pages.sh <your-username>
```

脚本会自动：
1. 添加远程仓库
2. 提交并推送代码到 main 分支
3. 构建静态网站
4. 将构建产物推送到 gh-pages 分支

### 手动部署步骤

```bash
# 1. 添加远程仓库
git remote add origin https://github.com/<your-username>/danduola-ai-site.git

# 2. 提交代码
git add .
git commit -m "Deploy Danduola AI site"
git push -u origin main

# 3. 构建项目
npm run build

# 4. 部署到 gh-pages 分支
cd out
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f https://github.com/<your-username>/danduola-ai-site.git main:gh-pages
cd ..
```

**配置 GitHub Pages (手动部署需要)**：
1. 访问仓库的 Settings → Pages
2. Source 选择 `gh-pages` 分支
3. 点击 Save

---

## 📋 部署前检查清单

- [ ] 确保项目可以正常构建：`npm run build`
- [ ] 确认 `out/` 目录包含所有必要文件
- [ ] 检查 `out/.nojekyll` 文件是否存在
- [ ] 验证 `next.config.ts` 中的配置：
  - `output: 'export'`
  - `images: { unoptimized: true }`
- [ ] 确认所有图片资源在 `public/images/` 目录中

---

## 🔧 常见问题

### 1. 页面样式丢失或显示异常

**原因**: 资源路径问题

**解决方案**: 确保 `next.config.ts` 配置正确：
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

### 2. 图片不显示

**原因**: 
- 图片路径错误
- GitHub Pages 忽略了 `_next/` 目录

**解决方案**:
- 确保 `out/.nojekyll` 文件存在
- 检查图片是否在 `public/images/` 目录中
- 验证构建后图片是否在 `out/images/` 中

### 3. GitHub Actions 部署失败

**可能原因**:
- 仓库权限设置不正确
- Node.js 版本不兼容

**解决方案**:
1. 检查仓库的 Settings → Actions → General
2. 确保 "Workflow permissions" 设置为 "Read and write permissions"
3. 确保 "Allow GitHub Actions to create and approve pull requests" 已勾选

### 4. 404 错误

**原因**: GitHub Pages 配置未生效

**解决方案**:
1. 确认 Settings → Pages 中的 Source 配置正确
2. 等待几分钟让 DNS 生效
3. 清除浏览器缓存后重试

---

## 🌍 自定义域名（可选）

如果您有自己的域名，可以配置自定义域名：

### 1. 在仓库中添加 CNAME 文件

```bash
echo "danduola.yourdomain.com" > out/CNAME
git add out/CNAME
git commit -m "Add custom domain"
git push
```

### 2. 配置 DNS

在您的域名服务商添加 CNAME 记录：
```
CNAME   danduola   <your-username>.github.io
```

### 3. 在 GitHub Pages 设置中配置

1. Settings → Pages
2. Custom domain 输入: `danduola.yourdomain.com`
3. 勾选 "Enforce HTTPS"
4. 保存

---

## 📊 部署监控

### 查看部署状态

- 访问: `https://github.com/<your-username>/danduola-ai-site/actions`
- 查看最新的 workflow run 状态

### 部署日志

点击具体的 workflow run 可以查看详细日志，包括：
- 依赖安装
- 构建过程
- 部署结果

---

## 🔄 更新网站

### 使用自动部署

```bash
# 修改代码后
git add .
git commit -m "Update content"
git push

# GitHub Actions 会自动重新部署
```

### 使用手动部署

```bash
# 修改代码后
./deploy-github-pages.sh <your-username>
```

---

## 📝 技术细节

### 项目配置

- **静态导出**: `output: 'export'` 生成纯静态 HTML/CSS/JS
- **图片优化**: `unoptimized: true` 避免依赖 Next.js 图片 API
- **.nojekyll**: 防止 GitHub Pages 使用 Jekyll 处理，确保 `_next/` 目录正常工作

### 部署流程

1. **构建**: Next.js 生成静态文件到 `out/` 目录
2. **上传**: 将 `out/` 目录内容推送到 `gh-pages` 分支（手动）或 GitHub Actions 上传 artifact（自动）
3. **发布**: GitHub Pages 从分支或 artifact 部署网站
4. **CDN**: 网站通过 GitHub CDN 全球分发

---

**需要帮助？** 请访问 [GitHub Pages 文档](https://docs.github.com/en/pages)

