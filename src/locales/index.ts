import { en } from './en';
import { zhCN } from './zh-CN';
import { zhTW } from './zh-TW';

export const translations = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
};

export type Locale = keyof typeof translations;

export { en, zhCN, zhTW };

