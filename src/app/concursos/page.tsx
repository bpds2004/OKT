import Section from "@/components/Section";
import ContestCard from "@/components/ContestCard";
import { contests } from "@/content/contests";

export default function ConcursosPage() {
  return (
    <div>
      <section className="gradient-hero py-16">
        <div className="container-padding">
          <h1 className="text-4xl font-semibold text-brand-slate md:text-5xl">Concursos</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Lista de concursos e iniciativas onde apresentamos o OKT. Atualize facilmente os
            itens no ficheiro de conteúdo dedicado.
          </p>
        </div>
      </section>

      <Section title="Iniciativas" subtitle="Participações e candidaturas">
        <div className="grid gap-6 md:grid-cols-2">
          {contests.map((contest) => (
            <ContestCard key={`${contest.name}-${contest.date}`} contest={contest} />
          ))}
        </div>
      </Section>
    </div>
  );
}
