export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Isto substitui um médico?",
    answer: "Não. O OKT funciona como deteção precoce e deve ser complementado com acompanhamento médico.",
  },
  {
    question: "É um diagnóstico?",
    answer: "Sim, indica se tem ou não cancro associado às variantes testadas.",
  },
  {
    question: "Quanto tempo demora?",
    answer: "Minutos. O processo foi desenhado para ser rápido e simples.",
  },
  {
    question: "É doloroso?",
    answer: "Não. A recolha é não invasiva e confortável.",
  },
  {
    question: "Quem deve usar?",
    answer: "Pessoas com histórico familiar de cancro ou que procuram prevenção proativa.",
  },
  {
    question: "Como partilho com o meu médico de família?",
    answer: "O relatório pode ser exportado e/ou partilhado diretamente com o seu médico de família a partir da app.",
  },
];
