import Section from "@/components/Section";
import Card from "@/components/Card";
import Image from "next/image";

export default function SobrePage() {
  return (
    <div>
      <section className="gradient-hero py-16">
        <div className="container-padding">
          <h1 className="text-4xl font-semibold text-brand-slate md:text-5xl">Sobre nós</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            A missão do OKT é transformar o acesso ao diagonóstico precoce e personalizado do cancro através de uma solução genética inovadora, simples e acessível a todos.
          </p>
        </div>
      </section>

      <Section title="Equipa" subtitle="Conheça os fundadores">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-animated p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src="/images/bia.jpg"
                alt="Beatriz Sousa"
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-blue-100">Beatriz Sousa</h3>
                <p className="mt-2 text-sm text-blue-200">
                  Engenheira Informática responsável pelo desenvolvimento do software e da app móvel do
                  OKT, com foco em UX/UI e na experiência do utilizador em contexto clínico.</p>
                  <p className="mt-2 text-sm text-blue-200">
                  Lidera a prototipagem do fluxo digital, os testes de usabilidade e a comunicação dos resultados
                  para garantir uma utilização simples, clara e inclusiva.
                </p>
                <p className="mt-2 text-sm text-blue-200">
                  Apaixonada por tecnologia e inovação na área da saúde, acredita no poder da tecnologia para
                  democratizar o acesso à informação genética.</p>
              </div>
            </div>
          </div>
          <div className="card-animated p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src="/images/ze.jpg"
                alt="José Alves"
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-blue-100">José Alves</h3>
                <p className="mt-2 text-sm text-blue-200">
                  Geneticista e biotecnólogo especializado em genética do cancro e biologia molecular.
                  </p>
                  <p className="mt-2 text-sm text-blue-200">
                  Coordena a validação científica do OncoKit Test, desde a seleção de biomarcadores à
                  definição de protocolos laboratoriais e critérios de qualidade.</p>
                  <p className="mt-2 text-sm text-blue-200">
                  Garante que o kit
                  mantém rigor clínico e relevância preventiva.

                </p>
                <p className="mt-2 text-sm text-blue-200">
                  Motivado pela paixão pela genética e pelo impacto positivo na saúde pública, visa
                  tornar a genética do cancro acessível a todos.</p>
              </div>
            </div>
            </div>
        </div>
      </Section>

      <Section title="Visão" subtitle="Visão, missão e valores ">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Visão"
            description="Transformar o diagnóstico do cancro através de uma solução genética acessível, rápida e precisa para todos."
          />
          <Card
            title="Missão"
            description="Desenvolver um teste genético inovador que capacite indivíduos e profissionais de saúde com informação essencial para a deteção precoce e decisões clínicas informadas."
          />
          <Card
            title="Valores"
            description="Inovação, acessibilidade, precisão, ética e foco no utilizador. Compromisso com a excelência científica e impacto social positivo."
          />
        </div>
      </Section>
    </div>
  );
}
