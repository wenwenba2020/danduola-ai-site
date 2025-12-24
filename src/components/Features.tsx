'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  // 图片映射：为每个特性卡片分配对应的图片
  const imageMap: Record<number, string> = {
    0: '/images/laptop-financial-chart.jpg',
    1: '/images/receipt-handling.jpg',
    2: '/images/document-audit.jpg',
    3: '/images/tax-compliance.jpg',
    4: '/images/documents-laptop.jpg',
    5: '/images/retail-case-study.jpg',
  };

  return (
    <section id="features" className="bg-light-gray py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-black mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature cards grid - 6 features: 3 rows × 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {t.features.list.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Feature Image - 大图为主 */}
              <div className="relative h-64 md:h-72 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={imageMap[index]}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-deep-black mb-2">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-dark-gray mb-4 font-medium uppercase tracking-wide">
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="text-dark-gray text-base leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn More link */}
                <Link
                  href={`#${['classification', 'matching', 'review', 'compliance', 'filling', 'audit'][index]}`}
                  className="inline-flex items-center text-coral font-semibold text-sm hover:text-red-600 transition-colors group-hover:gap-2 gap-1"
                >
                  {t.features.learnMore}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - mid-page */}
        <div className="text-center mt-16">
          <Link
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-deep-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            {t.features.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
