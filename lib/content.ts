export type Language = 'en' | 'pt';

export const content = {
  nav: {
    home: { en: 'Home', pt: 'Início' },
    portfolio: { en: 'Portfolio', pt: 'Portfólio' },
    cv: { en: 'CV', pt: 'CV' },
    manifesto: { en: 'Manifesto', pt: 'Manifesto' },
    contact: { en: 'Contact', pt: 'Contacto' },
    quickRead: { en: 'Quick Read', pt: 'Leitura Rápida' },
  },
  hero: {
    title: { en: 'SYNTHETIC', pt: 'SYNTHETIC' },
    tagline: {
      en: 'Where wetware meets software. A digital garden exploring psychology and data science.',
      pt: 'Onde o wetware encontra o software. Um jardim digital explorando psicologia e ciência de dados.',
    },
    quickReadTitle: { en: 'Synthetic', pt: 'Synthetic' },
    quickReadSubtitle: { en: 'Quick Read', pt: 'Leitura Rápida' },
    quickReadDescription: {
      en: 'One main idea. One link. One question. Delivered to your inbox.',
      pt: 'Uma ideia principal. Um link. Uma pergunta. Entregue na sua caixa de entrada.',
    },
    quickReadCta: { en: 'Subscribe', pt: 'Subscrever' },
  },
  pillars: {
    title: { en: 'Core Pillars', pt: 'Pilares Centrais' },
    ethics: {
      title: { en: 'Ethics & Money', pt: 'Ética & Dinheiro' },
      description: {
        en: 'How to earn with principle. The psychology of spending. Data ethics.',
        pt: 'Como ganhar com princípios. A psicologia do consumo. Ética de dados.',
      },
    },
    love: {
      title: { en: 'Love & Relationships', pt: 'Amor & Relações' },
      description: {
        en: 'Friendship, romance, and connection in the digital age.',
        pt: 'Amizade, romance e conexão na era digital.',
      },
    },
    study: {
      title: { en: 'Study & Career', pt: 'Estudo & Carreira' },
      description: {
        en: 'The struggle of learning. Academic pressure vs. self-taught freedom.',
        pt: 'A luta de aprender. Pressão académica vs. liberdade autodidata.',
      },
    },
  },
  footer: {
    moneyTitle: { en: 'How Synthetic makes money', pt: 'Como o Synthetic ganha dinheiro' },
    moneyText: {
      en: 'Affiliate links (transparently marked). No ads. No tracking. No bullshit.',
      pt: 'Links de afiliados (marcados transparentemente). Sem anúncios. Sem rastreamento. Sem conversa.',
    },
    tagline: { en: 'One life, many roles. All connected.', pt: 'Uma vida, muitos papéis. Tudo conectado.' },
  },
  manifesto: {
    title: { en: 'Manifesto', pt: 'Manifesto' },
    sections: [
      {
        en: 'We are not machines, but we think in patterns.',
        pt: 'Não somos máquinas, mas pensamos em padrões.',
      },
      {
        en: 'We are not code, but we can be debugged.',
        pt: 'Não somos código, mas podemos ser depurados.',
      },
      {
        en: 'SYNTHETIC is the bridge between the mind (wetware) and the algorithm (software).',
        pt: 'SYNTHETIC é a ponte entre a mente (wetware) e o algoritmo (software).',
      },
      {
        en: 'We do not unlock. We do not unleash. We build in public. We fail transparently. We share the raw data.',
        pt: 'Não desbloqueamos. Não libertamos. Construímos em público. Falhamos transparentemente. Partilhamos os dados brutos.',
      },
      {
        en: 'This is synthetic.',
        pt: 'Isto é synthetic.',
      },
    ],
  },
  cv: {
    title: { en: 'Curriculum Vitae', pt: 'Curriculum Vitae' },
    education: { en: 'Education', pt: 'Educação' },
    educationText: { en: 'Psychology Student, UTAD (Portugal)', pt: 'Estudante de Psicologia, UTAD (Portugal)' },
    skills: { en: 'Skills', pt: 'Competências' },
    skillsText: { en: 'Python · Data Science · Psychology · Writing', pt: 'Python · Data Science · Psicologia · Escrita' },
    philosophy: { en: 'Philosophy', pt: 'Filosofia' },
    philosophyText: {
      en: 'Bridging the gap between human consciousness and computational logic.',
      pt: 'Preencher o espaço entre a consciência humana e a lógica computacional.',
    },
  },
  contact: {
    title: { en: 'Contact', pt: 'Contacto' },
    subtitle: {
      en: 'Reach out for collaborations, questions, or just to say hello.',
      pt: 'Entre em contacto para colaborações, questões ou apenas para dizer olá.',
    },
    email: { en: 'Email', pt: 'Email' },
    emailPlaceholder: { en: 'your@email.com', pt: 'seu@email.com' },
    message: { en: 'Message', pt: 'Mensagem' },
    messagePlaceholder: { en: 'Your message...', pt: 'A sua mensagem...' },
    send: { en: 'Send', pt: 'Enviar' },
  },
  portfolio: {
    title: { en: 'Portfolio', pt: 'Portfólio' },
    subtitle: {
      en: 'Projects that bridge psychology and data science.',
      pt: 'Projetos que conectam psicologia e ciência de dados.',
    },
    projects: [
      {
        title: { en: 'Anxiety Patterns', pt: 'Padrões de Ansiedade' },
        description: {
          en: 'Visualizing cognitive distortions through data visualization.',
          pt: 'Visualizar distorções cognitivas através de visualização de dados.',
        },
      },
      {
        title: { en: 'Learning Curve', pt: 'Curva de Aprendizagem' },
        description: {
          en: 'Tracking the emotional journey of learning Python.',
          pt: 'Rastrear a jornada emocional de aprender Python.',
        },
      },
      {
        title: { en: 'Connection Matrix', pt: 'Matriz de Conexão' },
        description: {
          en: 'Mapping relationships and social networks.',
          pt: 'Mapear relações e redes sociais.',
        },
      },
    ],
  },
  quickReadPage: {
    title: { en: 'Quick Read', pt: 'Leitura Rápida' },
    subtitle: {
      en: 'Short, punchy, 1-minute reads. One main idea, one link, one question.',
      pt: 'Leituras curtas e impactantes de 1 minuto. Uma ideia principal, um link, uma pergunta.',
    },
    emailLabel: { en: 'Email Address', pt: 'Endereço de Email' },
    emailPlaceholder: { en: 'you@example.com', pt: 'voce@exemplo.com' },
    subscribe: { en: 'Subscribe', pt: 'Subscrever' },
    frequency: { en: 'Weekly. No spam. Unsubscribe anytime.', pt: 'Semanal. Sem spam. Cancelar a qualquer momento.' },
  },
};
