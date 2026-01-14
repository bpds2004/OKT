import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import EmojiBurst from "@/components/EmojiBurst";

const howSteps = [
  {
    title: "Recolha simples da amostra",
    description: "O kit orienta a recolha de forma rápida e segura.",
  },
  {
    title: "Processamento no dispositivo",
    description: "O leitor compacto analisa a amostra com precisão genética.",
  },
  {
    title: "Relatório na app e partilha com médico",
    description: "Resultados claros prontos para exportar e diagnosticar.",
  },
];

const impactCards = [
  {
    title: "Acessibilidade",
    description: "Dispositivo portátil e leve pensado para reduzir barreiras de custo e deslocação.",
  },
  {
    title: "Rapidez",
    description: "Informação essencial em minutos.                                        Decisões clínicas em tempo real.",
  },
  
  {
    title: "Precisão Clínica",
    description: "Tecnologia validada para deteção de variações e padrões mutacionais genéticos específicos.",
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* <section className="py-8">
        <div className="container-padding">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-soft">
            Criado por Beatriz Sousa e José Alves
          </div>
        </div>
      </section> */}

      <Section title="Problema" subtitle="O desafio no diagnóstico precoce">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-animated p-6">
            <ul className="space-y-4 text-sm text-blue-200">
              <li>• A taxa de mortalidade continua a ser elevada devido a diagnósticos tardios.</li>
              <li>• Testes tradicionais podem ser caros e/ou tardios.</li>
              <li>• </li>
            </ul>
          </div>
          
        </div>
      </Section>

      <Section title="Solução" subtitle="Um teste genético simples e acessível">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-animated p-6">
            <ul className="space-y-4 text-sm text-blue-200">
              <li>• Teste genético focado em cancro ativo e risco hereditário.</li>
              <li>• Resultados rápidos e fáceis de compreender.</li>
              <li>• Relatório pronto a partilhar com profissionais de saúde.</li>
              <li>• Disponível para realizar em casa, farmácias e centros de saúde.</li>
            </ul>
          </div>
          
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-100">
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
        <div className="card-animated p-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-blue-100">
                Imagens do dispositivo, dos kits e da experiência na app.
              </p>
              <p className="mt-2 text-sm text-blue-200">
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
        <div className="card-animated p-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-blue-100">
                Participação em concursos e congressos.
              </p>
              <p className="mt-2 text-sm text-blue-200">
                Veja onde o OKT tem sido apresentado e reconhecido.
              </p>
            </div>
            <Link
              href="/concursos"
              className="rounded-full border border-blue-300/60 px-5 py-2 text-sm font-semibold text-blue-100"
            >
              Ver concursos
            </Link>
          </div>
        </div>
      </Section>

      
    </div>
  );
}
