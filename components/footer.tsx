'use client';

import { useLanguage } from '@/lib/language-context';
import { content } from '@/lib/content';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="w-full bg-[var(--footer-bg)] text-[var(--footer-text)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h3 className="font-display text-lg font-bold">
            {content.footer.moneyTitle[language]}
          </h3>
          <p className="text-sm leading-relaxed opacity-90">
            {content.footer.moneyText[language]}
          </p>
          <div className="pt-6 border-t border-[var(--footer-text)]/20">
            <p className="text-xs italic opacity-70">
              {content.footer.tagline[language]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
