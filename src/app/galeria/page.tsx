import Section from "@/components/Section";

export default function GaleriaPage() {
  return (
    <div>
      <section className="gradient-hero py-16">
        <div className="container-padding">
          <h1 className="text-4xl font-semibold text-brand-slate md:text-5xl">Galeria</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Estamos a preparar uma seleção visual cuidada sobre o dispositivo, os kits e a experiência digital.
          </p>
        </div>
      </section>

      <Section title="Imagens" subtitle="Conteúdo em preparação">
        <div className="card-animated p-8">
          <p className="text-lg font-semibold text-blue-100">Galeria disponível em breve.</p>
          <p className="mt-2 max-w-2xl text-sm text-blue-200">
            Estamos a finalizar os visuais para partilhar uma apresentação mais completa, bonita e intuitiva.
          </p>
        </div>
      </Section>
    </div>
  );
}
