'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Locale } from '@/locales';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { name: t.navbar.solutions, href: '#solutions' },
    { name: t.navbar.customers, href: '#customers' },
    { name: t.navbar.resources, href: '#resources' },
  ];

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setLangMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-deep-black">
                {t.navbar.logo}
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Products with Mega Menu */}
            <div className="relative">
              <button 
                className="text-dark-gray hover:text-deep-black transition-colors duration-200 font-medium flex items-center"
                onMouseEnter={() => setProductsMenuOpen(true)}
              >
                {t.navbar.products}
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-dark-gray hover:text-deep-black transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#signin"
              className="text-dark-gray hover:text-deep-black transition-colors duration-200 font-medium"
            >
              {t.navbar.signIn}
            </Link>
          </div>

          {/* Language Switcher + CTA - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center px-3 py-2 text-dark-gray hover:text-deep-black transition-colors duration-200"
                aria-expanded={langMenuOpen}
              >
                <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-sm font-medium">{t.languages[locale]}</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language dropdown */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="block w-full text-left px-4 py-2 text-sm text-dark-gray hover:bg-light-gray transition-colors"
                  >
                    {t.languages.en}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('zh-CN')}
                    className="block w-full text-left px-4 py-2 text-sm text-dark-gray hover:bg-light-gray transition-colors"
                  >
                    {t.languages['zh-CN']}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('zh-TW')}
                    className="block w-full text-left px-4 py-2 text-sm text-dark-gray hover:bg-light-gray transition-colors"
                  >
                    {t.languages['zh-TW']}
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="#demo"
              className="inline-flex items-center px-6 py-2.5 bg-coral text-white font-semibold rounded-md hover:bg-red-500 transition-colors duration-200"
            >
              {t.navbar.requestDemo}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-gray hover:text-deep-black hover:bg-light-gray transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#products"
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-gray hover:text-deep-black hover:bg-light-gray transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navbar.products}
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-dark-gray hover:text-deep-black hover:bg-light-gray transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#signin"
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-gray hover:text-deep-black hover:bg-light-gray transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navbar.signIn}
            </Link>

            {/* Language selector - Mobile */}
            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-dark-gray mb-2">Language</div>
              <div className="space-y-1">
                <button
                  onClick={() => { handleLanguageChange('en'); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm text-dark-gray hover:bg-light-gray transition-colors"
                >
                  {t.languages.en}
                </button>
                <button
                  onClick={() => { handleLanguageChange('zh-CN'); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm text-dark-gray hover:bg-light-gray transition-colors"
                >
                  {t.languages['zh-CN']}
                </button>
                <button
                  onClick={() => { handleLanguageChange('zh-TW'); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm text-dark-gray hover:bg-light-gray transition-colors"
                >
                  {t.languages['zh-TW']}
                </button>
              </div>
            </div>

            <Link
              href="#demo"
              className="block mx-3 my-2 px-6 py-2.5 bg-coral text-white font-semibold rounded-md text-center hover:bg-red-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navbar.requestDemo}
            </Link>
          </div>
        </div>
      )}

      {/* Background overlay when mega menu is open */}
      {productsMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30"
          style={{ top: '64px' }}
          onMouseEnter={() => setProductsMenuOpen(false)}
        />
      )}

      {/* Products Mega Menu */}
      {productsMenuOpen && (
        <div 
          className="absolute left-0 right-0 z-40 bg-white shadow-xl border-t border-gray-200"
          onMouseLeave={() => setProductsMenuOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-3 gap-8">
              {/* Column 1: Classification & Matching */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  {t.megaMenu.coreCapabilities}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      href="#classification" 
                      className="block hover:bg-light-gray rounded-lg p-3 transition-colors group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="text-deep-black font-semibold group-hover:text-coral transition-colors">
                        {t.features.classification.title}
                      </div>
                      <div className="text-sm text-dark-gray mt-1">
                        {t.features.classification.subtitle}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#matching" 
                      className="block hover:bg-light-gray rounded-lg p-3 transition-colors group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="text-deep-black font-semibold group-hover:text-coral transition-colors">
                        {t.features.matching.title}
                      </div>
                      <div className="text-sm text-dark-gray mt-1">
                        {t.features.matching.subtitle}
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Review & Compliance */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  {t.megaMenu.auditCompliance}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      href="#review" 
                      className="block hover:bg-light-gray rounded-lg p-3 transition-colors group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="text-deep-black font-semibold group-hover:text-coral transition-colors">
                        {t.features.review.title}
                      </div>
                      <div className="text-sm text-dark-gray mt-1">
                        {t.features.review.subtitle}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#compliance" 
                      className="block hover:bg-light-gray rounded-lg p-3 transition-colors group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="text-deep-black font-semibold group-hover:text-coral transition-colors">
                        {t.features.compliance.title}
                      </div>
                      <div className="text-sm text-dark-gray mt-1">
                        {t.features.compliance.subtitle}
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Filling & Audit */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  {t.megaMenu.automation}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      href="#filling" 
                      className="block hover:bg-light-gray rounded-lg p-3 transition-colors group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="text-deep-black font-semibold group-hover:text-coral transition-colors">
                        {t.features.filling.title}
                      </div>
                      <div className="text-sm text-dark-gray mt-1">
                        {t.features.filling.subtitle}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#audit" 
                      className="block hover:bg-light-gray rounded-lg p-3 transition-colors group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="text-deep-black font-semibold group-hover:text-coral transition-colors">
                        {t.features.audit.title}
                      </div>
                      <div className="text-sm text-dark-gray mt-1">
                        {t.features.audit.subtitle}
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
