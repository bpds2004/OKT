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
  // {
  //   name: "(Adicionar concurso)",
  //   date: "2026",
  //   status: "Candidato",
  //   description: "Espaço reservado para novas candidaturas e iniciativas.",
  // },
];
