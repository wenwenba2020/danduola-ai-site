'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-deep-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4">Danduola</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.platform.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {t.footer.platform.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.solutions.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {t.footer.solutions.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {t.footer.company.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              {t.footer.legal.map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

