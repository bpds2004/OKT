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
            Os nossos produtos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            O OncoKit Test combina um dispositivo compacto e kits simples para apoiar a
            deteção precoce do cancro de forma rápida, clara e acessível.
          </p>
        </div>
      </section>


<Section title="O nosso dispositivo" >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Dispositivo de leitura compacto"
            description="Analisa amostras genéticas de forma rápida e precisa."
          /> 
           
          
        </div>
      </Section>

      <Section title="Os nossos kits" >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Teste genético hereditário"
            description="Identifica variantes genéticas associadas a risco hereditário de cancro. Teste feito a partir de swab oral."
          /> 
           
          <Card
            title="Teste genético de cancro ativo"
            description="Deteta variantes genéticas associadas a cancro ativo. Teste feito a partir de amostra de sangue."
          />
        </div>
      </Section>

      <Section title="O que vem no kit">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Dispositivo de leitura compacto"
          />
          <Card
            title="Materiais de recolha segura"
          />
          <Card
            title="Guia rápido e acesso à app"
          />
          
          
          
        </div>
      </Section>


      <Section title="O que o relatório mostra" >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">Negativo</p>
            <p className="mt-2 text-m text-emerald-700">
              Não há risco genético detetado associado ao cancro. </p> 
            <p className="mt-2 text-m text-emerald-700">Não tem cancro ativo identificado.
            </p>
          </div>
          
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <p className="text-sm font-semibold text-rose-700">Positivo</p>
            <p className="mt-2 text-m text-rose-700">
              Cancro hereditário identificado.</p>
            <p className="mt-2 text-m text-rose-700">
              Cancro ativo identificado.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Perguntas frequentes" >
        <FAQ  items={faqItems} />
        
      </Section>
    </div>
  );
}
