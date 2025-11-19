'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { content } from '@/lib/content';
import { useState, useEffect } from 'react';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-black tracking-tighter hover:text-accent transition-colors duration-300 relative group"
          >
            SYNTHETIC
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: content.nav.home[language] },
              { href: '/portfolio', label: content.nav.portfolio[language] },
              { href: '/cv', label: content.nav.cv[language] },
              { href: '/manifesto', label: content.nav.manifesto[language] },
              { href: '/contact', label: content.nav.contact[language] },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-muted/50 transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
            <Link
              href="/quick-read"
              className="ml-2 px-5 py-2 text-sm font-medium rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-accent/20"
            >
              {content.nav.quickRead[language]}
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-muted/30 backdrop-blur-sm rounded-full p-1 border border-border/50">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('pt')}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                language === 'pt'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
