import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";

const howSteps = [
  {
    title: "Recolha simples da amostra",
    description: "O kit orienta a recolha de forma rápida e segura em casa.",
  },
  {
    title: "Processamento no dispositivo",
    description: "O leitor compacto analisa a amostra com precisão genética.",
  },
  {
    title: "Relatório na app e partilha com médico",
    description: "Resultados claros prontos para exportar e discutir.",
  },
];

const impactCards = [
  {
    title: "Rapidez",
    description: "Informação essencial em minutos para decisões mais cedo.",
  },
  {
    title: "Acessibilidade",
    description: "Modelo pensado para reduzir barreiras de custo e deslocação.",
  },
  {
    title: "Prevenção",
    description: "Foco em risco hereditário para apoiar decisões preventivas.",
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />

      <section className="py-8">
        <div className="container-padding">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-soft">
            Criado por Beatriz Sousa e José Alves
          </div>
        </div>
      </section>

      <Section title="Problema" subtitle="O desafio no diagnóstico precoce">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <ul className="space-y-4 text-sm text-slate-600">
              <li>• Diagnóstico tardio continua a ser uma das maiores causas de mortalidade.</li>
              <li>• Testes tradicionais podem ser caros e inacessíveis.</li>
              <li>• Muita gente só descobre o risco quando já é tarde.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 text-sm text-slate-600">
            O OKT responde a este cenário com uma abordagem doméstica, clara e pronta a ser
            partilhada com profissionais de saúde.
          </div>
        </div>
      </Section>

      <Section title="Solução" subtitle="Um teste genético simples e acessível">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Teste genético focado em cancro hereditário, feito em casa.",
            "Resultados rápidos e fáceis de compreender.",
            "Relatório pronto a partilhar com profissionais de saúde.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-soft"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Como funciona" subtitle="Três passos para um resultado claro">
        <div className="grid gap-6 md:grid-cols-3">
          {howSteps.map((step, index) => (
            <Card
              key={step.title}
              title={step.title}
              description={step.description}
              icon={
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  {index + 1}
                </div>
              }
            />
          ))}
        </div>
      </Section>

      <Section title="Impacto" subtitle="Resultados com significado real">
        <div className="grid gap-6 md:grid-cols-3">
          {impactCards.map((card) => (
            <Card key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </Section>

      <Section title="Galeria" subtitle="Veja o dispositivo, kit e app">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-brand-slate">
                Imagens do protótipo, do kit e da experiência na app.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Explore os visuais essenciais e mockups em alta qualidade.
              </p>
            </div>
            <Link
              href="/galeria"
              className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white"
            >
              Ver galeria completa
            </Link>
          </div>
        </div>
      </Section>

      <Section title="Concursos" subtitle="Acompanhe a nossa presença em iniciativas">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-brand-slate">
                Indicadores de tração e participação em concursos.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                A lista completa está sempre atualizada numa área dedicada.
              </p>
            </div>
            <Link
              href="/concursos"
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700"
            >
              Ver concursos
            </Link>
          </div>
        </div>
      </Section>

      <section className="py-16">
        <div className="container-padding">
          <div className="rounded-3xl bg-brand-blue px-8 py-12 text-white shadow-soft">
            <p className="text-lg font-semibold">CTA final</p>
            <p className="mt-4 text-2xl font-semibold md:text-3xl">
              A cada ano, mais de 9 milhões de pessoas morrem de cancro. A deteção precoce
              começa em casa — OncoKit Test, rápido, acessível e vital para a sua saúde.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/produto"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue"
              >
                Conhecer o produto
              </Link>
              <Link
                href="/sobre"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white"
              >
                Falar com a equipa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
