'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { content } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function QuickReadPage() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Newsletter subscription:', email);
    // TODO: Implement newsletter subscription logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="font-display text-5xl font-bold text-balance">
              {content.quickReadPage.title[language]}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.quickReadPage.subtitle[language]}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-accent p-8 rounded-lg border border-border">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {content.quickReadPage.emailLabel[language]}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={content.quickReadPage.emailPlaceholder[language]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              {content.quickReadPage.subscribe[language]}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              {content.quickReadPage.frequency[language]}
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
