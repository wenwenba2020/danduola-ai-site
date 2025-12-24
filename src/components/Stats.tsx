'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientLogos = [
    { id: 1, name: 'Enterprise A' },
    { id: 2, name: 'Enterprise B' },
    { id: 3, name: 'Enterprise C' },
    { id: 4, name: 'Enterprise D' },
    { id: 5, name: 'Enterprise E' },
    { id: 6, name: 'Enterprise F' },
  ];

  // 多个 Case Study 案例
  const caseStudies = [
    {
      badge: t.stats.caseStudy.badge,
      title: t.stats.caseStudy.title,
      description: t.stats.caseStudy.description,
      cta: t.stats.caseStudy.cta,
      image: '/images/retail-case-study.jpg',
      metrics: t.stats.caseStudy.metrics,
    },
    {
      badge: 'CASE STUDY',
      title: 'Tech Startup Reduces Processing Time by 87%',
      description: 'A fast-growing SaaS company automated their expense approval workflow with intelligent agents, reducing processing time from days to hours while improving accuracy.',
      cta: 'Read Full Case Study',
      image: '/images/hero-dashboard-analysis.jpg',
      metrics: [
        { value: '87%', label: 'Time reduction' },
        { value: '99%', label: 'Accuracy rate' },
        { value: '$800K', label: 'Annual savings' },
        { value: '24/7', label: 'AI availability' },
      ],
    },
    {
      badge: 'CASE STUDY',
      title: 'Financial Services Firm Achieves 100% Compliance',
      description: 'A leading financial institution deployed Danduola AI to ensure regulatory compliance across thousands of transactions, achieving perfect audit scores.',
      cta: 'Read Full Case Study',
      image: '/images/tax-compliance.jpg',
      metrics: [
        { value: '100%', label: 'Compliance rate' },
        { value: '5000+', label: 'Daily transactions' },
        { value: '0', label: 'Audit findings' },
        { value: '60%', label: 'Cost reduction' },
      ],
    },
  ];

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 7000); // 每7秒切换

    return () => clearInterval(interval);
  }, [caseStudies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key metrics display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {t.stats.metrics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-coral mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-deep-black mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-dark-gray">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-12"></div>

        {/* Client Logo wall - Social Proof */}
        <div>
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-dark-gray uppercase tracking-wide">
              {t.stats.trustedBy}
            </p>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center"
              >
                {/* Logo placeholder - replace with real logo images */}
                <div className="w-full h-12 bg-gray-200 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <span className="text-xs font-semibold text-dark-gray">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Carousel */}
        <div className="mt-16 relative">
          {/* Carousel container */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-light-gray p-8 lg:p-12 relative overflow-hidden min-h-[500px]">
                    {/* Background image with overlay */}
                    <div className="absolute inset-0 opacity-15">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        unoptimized
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                      {/* Left: Case title and description */}
                      <div>
                        <div className="inline-block px-3 py-1 bg-coral/10 text-coral text-xs font-semibold rounded-full mb-4">
                          {study.badge}
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-black mb-4">
                          {study.title}
                        </h3>
                        <p className="text-dark-gray mb-6 leading-relaxed text-base sm:text-lg">
                          {study.description}
                        </p>
                        <a
                          href="#case-study"
                          className="inline-flex items-center text-coral font-semibold hover:text-red-600 transition-colors group"
                        >
                          {study.cta}
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                        </a>
                      </div>

                      {/* Right: Key metrics cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {study.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl lg:text-5xl font-bold text-coral mb-2">
                              {metric.value}
                            </div>
                            <div className="text-sm text-dark-gray">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-deep-black rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20"
            aria-label="Previous case study"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-deep-black rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20"
            aria-label="Next case study"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-coral'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
