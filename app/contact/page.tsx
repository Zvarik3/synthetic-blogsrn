'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { content } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Contact form submission:', { email, message });
    // TODO: Implement contact form logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="font-display text-5xl font-bold">
              {content.contact.title[language]}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.contact.subtitle[language]}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {content.contact.email[language]}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={content.contact.emailPlaceholder[language]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {content.contact.message[language]}
              </label>
              <Textarea
                id="message"
                placeholder={content.contact.messagePlaceholder[language]}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              {content.contact.send[language]}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
