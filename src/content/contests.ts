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
    description: "Participação com protótipo funcional do OKT para deteção precoce do cancro da mama e validação inicial.",
  },
  {
    name: "Startup Portugal",
   date: "2026",
  status: "Candidato",
   description: "Candidatura à aceleração e financiamento para escalar a solução de cancro da mama.",
   },
   {
    name: "Web Summit",
   date: "2026",
  status: "Candidato",
   description: "Candidatura para exposição e networking com foco em inovação para diagnóstico precoce do cancro da mama.",
   },
];
