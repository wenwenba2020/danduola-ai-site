'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-deep-black leading-tight tracking-tight">
              <span className="block">{t.hero.title.line1}</span>
              <span className="block">{t.hero.title.line2}</span>
              <span className="block text-coral">{t.hero.title.line3}</span>
            </h1>

            {/* Subtitle - value proposition */}
            <p className="text-lg sm:text-xl text-dark-gray max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-coral text-white text-lg font-semibold rounded-md hover:bg-red-500 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {t.hero.ctaPrimary}
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-deep-black text-deep-black text-lg font-semibold rounded-md hover:bg-deep-black hover:text-white transition-all duration-200"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-dark-gray font-medium">{t.hero.certifications.soc2}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-dark-gray font-medium">{t.hero.certifications.gdpr}</span>
              </div>
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Background gradient decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-light-gray to-white rounded-2xl"></div>

            {/* Agentic AI workflow visualization + floating cards */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* HERO-01: Main visual - Professional analyzing data */}
              <div className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero-dashboard-analysis.jpg"
                  alt="Professional analyzing financial data and AI dashboard"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient for better floating card visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
              </div>

              {/* Floating card 1 - Classification */}
              <div className="absolute top-12 left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-lg border border-gray-200 max-w-[200px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-deep-black">{t.hero.floatingCards.classification}</div>
                    <div className="text-xs text-dark-gray">{t.hero.floatingCards.classificationSub}</div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 - Smart Review */}
              <div className="absolute top-48 left-0 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-lg border border-gray-200 max-w-[200px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-deep-black">{t.hero.floatingCards.smartReview}</div>
                    <div className="text-xs text-dark-gray">{t.hero.floatingCards.smartReviewSub}</div>
                  </div>
                </div>
              </div>

              {/* Floating card 3 - Compliance */}
              <div className="absolute bottom-20 left-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-lg border border-gray-200 max-w-[200px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-deep-black">{t.hero.floatingCards.compliance}</div>
                    <div className="text-xs text-dark-gray">{t.hero.floatingCards.complianceSub}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
