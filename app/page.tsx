'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { content } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Heart, BookOpen } from 'lucide-react';
import { ParticleWave } from '@/components/particle-wave';

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 relative pt-24">
        {/* Background Elements */}
        <ParticleWave />
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Brand */}
            <div className="space-y-8 animate-slide-up">
              <div className="relative">
                <h1 className="font-display text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]">
                  SYNTHETIC
                </h1>
                <div className="absolute -top-10 -left-10 w-24 h-24 border border-primary/20 rounded-full animate-spin-slow" />
              </div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-lg font-light">
                {content.hero.tagline[language]}
              </p>

              <div className="flex gap-4 pt-4">
                <Link href="/manifesto">
                  <Button variant="outline" size="lg" className="rounded-full px-8 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                    {content.nav.manifesto[language]}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Quick Read Card (Glassmorphism) */}
            <div className="relative group animate-slide-up [animation-delay:200ms]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-10 blur-2xl rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative bg-card/50 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                <div className="absolute top-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-2xl">⚡</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-4xl font-bold tracking-tight">
                      Synthetic
                    </h2>
                    <p className="text-sm font-mono text-muted-foreground mt-2 uppercase tracking-widest">
                      {content.hero.quickReadSubtitle[language]}
                    </p>
                  </div>
                  
                  <p className="text-lg leading-relaxed font-light">
                    {content.hero.quickReadDescription[language]}
                  </p>
                  
                  <Link href="/quick-read" className="block">
                    <Button className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group">
                      {content.hero.quickReadCta[language]}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section (Bento Grid) */}
        <section className="container mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              {content.pillars.title[language]}
            </h2>
            <div className="h-px bg-border flex-1 ml-8 mb-4 hidden md:block" />
            <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mb-2">
              01 — 03
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Ethics & Money */}
            <div className="group relative bg-card border border-border p-8 rounded-2xl hover:border-accent transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <Brain size={120} />
              </div>
              <div className="relative z-10 space-y-4 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                    <span className="font-mono text-lg">01</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold group-hover:text-accent-foreground transition-colors">
                    {content.pillars.ethics.title[language]}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {content.pillars.ethics.description[language]}
                </p>
              </div>
            </div>

            {/* Love & Relationships */}
            <div className="group relative bg-card border border-border p-8 rounded-2xl hover:border-accent transition-all duration-500 hover:-translate-y-2 overflow-hidden md:mt-12">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <Heart size={120} />
              </div>
              <div className="relative z-10 space-y-4 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                    <span className="font-mono text-lg">02</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold group-hover:text-accent-foreground transition-colors">
                    {content.pillars.love.title[language]}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {content.pillars.love.description[language]}
                </p>
              </div>
            </div>

            {/* Study & Career */}
            <div className="group relative bg-card border border-border p-8 rounded-2xl hover:border-accent transition-all duration-500 hover:-translate-y-2 overflow-hidden md:mt-24">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <BookOpen size={120} />
              </div>
              <div className="relative z-10 space-y-4 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                    <span className="font-mono text-lg">03</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold group-hover:text-accent-foreground transition-colors">
                    {content.pillars.study.title[language]}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {content.pillars.study.description[language]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12 border-y border-border bg-primary text-primary-foreground overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-4xl font-display font-bold mx-8 uppercase tracking-widest opacity-80">
                Synthetic • Wetware vs Software •
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
