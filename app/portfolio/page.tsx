'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { content } from '@/lib/content';

export default function PortfolioPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="font-display text-5xl font-bold">
              {content.portfolio.title[language]}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.portfolio.subtitle[language]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.portfolio.projects.map((project, index) => (
              <div
                key={index}
                className="border border-border p-6 rounded-lg space-y-3 hover:border-accent transition-colors"
              >
                <h3 className="font-display text-xl font-bold">
                  {project.title[language]}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
