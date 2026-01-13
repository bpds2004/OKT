export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Isto substitui um médico?",
    answer: "Não. O OKT serve como apoio à prevenção e deve ser acompanhado por profissionais de saúde.",
  },
  {
    question: "É um diagnóstico?",
    answer: "Não. É uma ferramenta de apoio à prevenção e avaliação de risco genético.",
  },
  {
    question: "Quanto tempo demora?",
    answer: "Minutos. O processo foi desenhado para ser rápido e simples em casa.",
  },
  {
    question: "É doloroso?",
    answer: "Não. A recolha é não invasiva e confortável.",
  },
  {
    question: "Quem deve usar?",
    answer: "Pessoas com histórico familiar de cancro hereditário ou que procuram prevenção proativa.",
  },
  {
    question: "Como partilho com uma unidade de saúde?",
    answer: "O relatório pode ser exportado e partilhado diretamente com a sua unidade de saúde.",
  },
];
