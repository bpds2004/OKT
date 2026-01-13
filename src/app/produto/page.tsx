import Section from "@/components/Section";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import { faqItems } from "@/content/faq";

export default function ProdutoPage() {
  return (
    <div>
      <section className="gradient-hero py-16">
        <div className="container-padding">
          <h1 className="text-4xl font-semibold text-brand-slate md:text-5xl">
            O produto OKT
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            O OncoKit Test combina um dispositivo compacto e um kit doméstico para apoiar a
            deteção precoce do cancro de forma rápida, clara e acessível.
          </p>
        </div>
      </section>

      <Section title="O que é" subtitle="Um kit doméstico com tecnologia clínica">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Teste genético em casa"
            description="Recolha simples da amostra, sem necessidade de deslocações imediatas."
          />
          <Card
            title="Integração com profissionais"
            description="Resultados fáceis de partilhar com médicos e unidades de saúde."
          />
        </div>
      </Section>

      <Section title="O que vem no kit" subtitle="Tudo o que precisa num só pacote">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Dispositivo de leitura compacto",
            "Materiais de recolha segura",
            "Guia rápido e acesso à app",
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

      <Section title="Para quem é" subtitle="Prevenção focada em risco hereditário">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-soft">
          Indicado para pessoas com histórico familiar de cancro, equipas de prevenção e
          qualquer pessoa que queira informação genética clara para decisões mais cedo.
        </div>
      </Section>

      <Section title="O que o relatório mostra" subtitle="Resultados claros e fáceis de partilhar">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">Negativo</p>
            <p className="mt-2 text-sm text-emerald-700">
              Sem variantes associadas a risco identificado.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-semibold text-amber-700">VUS</p>
            <p className="mt-2 text-sm text-amber-700">
              Variante de significado incerto para análise clínica adicional.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <p className="text-sm font-semibold text-rose-700">Positivo</p>
            <p className="mt-2 text-sm text-rose-700">
              Variante associada a risco e recomendação de acompanhamento.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Perguntas frequentes" subtitle="Respostas rápidas">
        <FAQ  items={faqItems} />
        
      </Section>
    </div>
  );
}
