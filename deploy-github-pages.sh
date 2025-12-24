#!/bin/bash

# GitHub Pages 部署脚本
# 用法: ./deploy-github-pages.sh <your-github-username>

set -e

# 检查参数
if [ -z "$1" ]; then
    echo "错误: 请提供您的 GitHub 用户名"
    echo "用法: ./deploy-github-pages.sh <your-github-username>"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="danduola-ai-site"
REMOTE_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "🚀 开始部署到 GitHub Pages..."
echo "📦 仓库: ${REMOTE_URL}"

# 1. 添加远程仓库（如果不存在）
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "➕ 添加远程仓库..."
    git remote add origin "${REMOTE_URL}"
else
    echo "✓ 远程仓库已存在"
fi

# 2. 提交当前更改到 main 分支
echo "💾 提交代码到 main 分支..."
git add .
git commit -m "Deploy Danduola AI site - $(date +%Y-%m-%d\ %H:%M:%S)" || echo "没有新的更改需要提交"

# 3. 推送 main 分支
echo "⬆️  推送 main 分支..."
git push -u origin main

# 4. 构建项目
echo "🔨 构建静态网站..."
npm run build

# 5. 部署到 gh-pages 分支
echo "📤 部署到 gh-pages 分支..."
cd out

# 初始化独立的 git 仓库
git init
git add -A
git commit -m "Deploy to GitHub Pages - $(date +%Y-%m-%d\ %H:%M:%S)"

# 强制推送到 gh-pages 分支
git push -f "${REMOTE_URL}" main:gh-pages

cd ..

echo ""
echo "✅ 部署成功！"
echo ""
echo "📝 接下来的步骤："
echo "1. 访问: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/settings/pages"
echo "2. 在 'Source' 下拉菜单中选择 'gh-pages' 分支"
echo "3. 点击 'Save'"
echo "4. 等待几分钟后访问: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/"
echo ""

