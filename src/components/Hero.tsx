import Link from "next/link";

export default function Hero() {
  return (
    <section className="gradient-hero pt-28">
      <div className="container-padding pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">
              OncoKit Test
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-slate md:text-5xl">
              A deteção precoce pode salvar vidas. Quer saber como?
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Uma solução doméstica, rápida e acessível para apoiar a prevenção do cancro
               com informação clara e partilhável com profissionais de saúde.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/produto"
                className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Ver o produto
              </Link>
              <Link
                href="/sobre"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue"
              >
                Conhecer a equipa
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold text-brand-blue">Resumo rápido</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Teste genético em casa, farmácia ou hospital pensado para precaver descobrir tarde o cancro .</li>
              <li>Deteção de mutações em genes associados a vários tipos de cancro .</li>
              <li>Relatório simples com resultado positivo, negativo ou percentagem de risco.</li>
              <li>Integração fácil com profissionais de saúde.</li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
}
