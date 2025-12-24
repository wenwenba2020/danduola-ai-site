/**
 * 网站配置
 * 统一管理网站的基础路径和其他配置
 */

// GitHub Pages 部署时的 basePath
// 本地开发时为空字符串，部署时为 '/danduola-ai-site'
export const basePath = process.env.NODE_ENV === 'production' 
  ? '/danduola-ai-site' 
  : '';

/**
 * 获取完整的图片路径
 * @param imagePath 相对于 /images/ 的图片路径，如 'hero-dashboard-analysis.jpg'
 * @returns 完整的图片路径
 */
export function getImagePath(imagePath: string): string {
  // 如果路径已经包含 basePath，直接返回
  if (imagePath.startsWith(basePath)) {
    return imagePath;
  }
  
  // 如果路径不以 / 开头，添加 /images/ 前缀
  if (!imagePath.startsWith('/')) {
    imagePath = `/images/${imagePath}`;
  }
  
  // 添加 basePath 前缀
  return `${basePath}${imagePath}`;
}

