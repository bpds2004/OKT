import Section from "@/components/Section";
import Card from "@/components/Card";

export default function SobrePage() {
  return (
    <div>
      <section className="gradient-hero py-16">
        <div className="container-padding">
          <h1 className="text-4xl font-semibold text-brand-slate md:text-5xl">Sobre nós</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            A missão do OKT é democratizar o acesso à genética do cancro com uma solução
            simples, doméstica e orientada para a prevenção.
          </p>
        </div>
      </section>

      <Section title="Equipa" subtitle="Especialistas com foco em impacto real">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Beatriz Sousa"
            description="Engenheira Informática (frontend, app, plataforma)"
          />
          <Card
            title="José Alves"
            description="Geneticista (genética clínica, validação, interpretação)"
          />
        </div>
      </Section>

      <Section title="Visão" subtitle="Visão, missão e valores (90 dias)">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Visão"
            description="Transformar o acesso à genética do cancro com uma solução simples e acessível."
          />
          <Card
            title="Missão"
            description="Desenvolver um protótipo funcional do OncoKit Test e validar o conceito com testes iniciais."
          />
          <Card
            title="Valores"
            description="Inovação rápida, acessibilidade, precisão, responsabilidade, prevenção."
          />
        </div>
      </Section>
    </div>
  );
}
