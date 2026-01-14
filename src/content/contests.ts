export interface Contest {
  name: string;
  date: string;
  status: "Candidato" | "Finalista" | "Vencedor";
  description: string;
}

export const contests: Contest[] = [
  {
    name: "UICap Inov",
    date: "2026",
    status: "Finalista",
    description: "Participação com protótipo funcional do OKT e validação inicial.",
  },
  {
    name: "Startup Portugal",
   date: "2026",
  status: "Candidato",
   description: "Candidatura à aceleração e financiamento para startups inovadoras.",
   },
   {
    name: "Web Summit",
   date: "2026",
  status: "Candidato",
   description: "Candidatura para exposição e networking na maior conferência de tecnologia da Europa.",
   },
];
