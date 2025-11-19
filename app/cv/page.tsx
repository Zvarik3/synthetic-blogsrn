'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { content } from '@/lib/content';

export default function CVPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          <h1 className="font-display text-5xl font-bold text-center">
            {content.cv.title[language]}
          </h1>

          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6 space-y-2">
              <h2 className="font-display text-2xl font-bold">
                {content.cv.education[language]}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {content.cv.educationText[language]}
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 space-y-2">
              <h2 className="font-display text-2xl font-bold">
                {content.cv.skills[language]}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {content.cv.skillsText[language]}
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 space-y-2">
              <h2 className="font-display text-2xl font-bold">
                {content.cv.philosophy[language]}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {content.cv.philosophyText[language]}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
