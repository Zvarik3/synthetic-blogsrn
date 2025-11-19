'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { content } from '@/lib/content';

export default function ManifestoPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-12">
          <h1 className="font-display text-5xl font-bold text-center">
            {content.manifesto.title[language]}
          </h1>

          <div className="space-y-8">
            {content.manifesto.sections.map((section, index) => (
              <p
                key={index}
                className="text-xl leading-relaxed text-center text-balance"
              >
                {section[language]}
              </p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
