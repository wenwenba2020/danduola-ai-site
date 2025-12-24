# GitHub Pages 快速部署指南

## 🎯 最简单的 3 步部署

### 步骤 1：创建 GitHub 仓库

1. 访问：https://github.com/new
2. **Repository name**: `danduola-ai-site`
3. 选择 **Public**
4. **不要**勾选任何初始化选项
5. 点击 **Create repository**

---

### 步骤 2：推送代码

复制 GitHub 显示的命令（替换 `<your-username>` 为您的用户名）：

```bash
cd /Users/robertzf/danduola-ai-site

# 添加远程仓库
git remote add origin https://github.com/<your-username>/danduola-ai-site.git

# 提交所有文件
git add .
git commit -m "Initial commit: Danduola AI multi-language site"

# 推送到 GitHub
git push -u origin main
```

---

### 步骤 3：启用 GitHub Pages

1. 访问您的仓库页面
2. 点击 **Settings**（设置）
3. 左侧菜单点击 **Pages**
4. 在 **Source** 下拉菜单中选择：**GitHub Actions**
5. 保存

**就这么简单！** 🎉

GitHub Actions 会自动：
- 安装依赖
- 构建网站
- 部署到 GitHub Pages

---

## 📊 查看部署进度

1. 返回仓库首页
2. 点击 **Actions** 标签
3. 查看 "Deploy to GitHub Pages" 工作流
4. 等待绿色 ✓（约 2-3 分钟）

---

## 🌐 访问您的网站

部署成功后，访问：

```
https://<your-username>.github.io/danduola-ai-site/
```

---

## ✅ 构建状态检查

运行以下命令验证本地构建：

```bash
# 构建测试
npm run build

# 本地预览
npx serve out -p 3001
```

然后访问 http://localhost:3001 查看效果。

---

## 🔧 已完成的配置

✅ 静态导出配置（`next.config.ts`）  
✅ 图片优化禁用（适配 GitHub Pages）  
✅ `.nojekyll` 文件（确保 `_next/` 目录不被忽略）  
✅ GitHub Actions 工作流（`.github/workflows/deploy.yml`）  
✅ 所有图片资源已准备（`out/images/`）  
✅ 多语言支持（英语、简体中文、繁体中文）  

---

## 📝 后续更新网站

修改代码后，只需简单推送：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新部署！

---

## 🆘 需要帮助？

参考详细文档：
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 完整部署指南
- [README.md](./README.md) - 项目文档

---

**祝部署顺利！** 🚀

