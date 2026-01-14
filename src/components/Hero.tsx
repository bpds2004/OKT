import Link from "next/link";
import EmojiBurst from "./EmojiBurst";

export default function Hero() {
  return (
    <section className="gradient-hero pt-28">
      <div className="container-padding pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              OncoKit Test
            </p>
            <p className ="mt-4 max-w-3xl text-3xl font-bold leading-tight text-blue-900 sm:text-4xl md:text-1xl">
              A cada ano, mais de 9 milhões de pessoas morrem de cancro. </p>
              <p className="mt-4 max-w-3xl text-1xl font-bold leading-tight text-blue-900 ">
                A deteção precoce começa em casa — OncoKit Test, rápido, acessível e vital para a sua saúde.
            </p>
            <EmojiBurst emojis={["✨", "🧬", "💡", "💙"]} size="text-3xl" />
            
            {/* <p className="mt-4 text-lg text-blue-800">
              Uma solução doméstica, rápida e acessível para apoiar a prevenção do cancro
               com informação clara e partilhável com profissionais de saúde.
            </p> */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/produto"
                className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Ver o produto
              </Link>
              <Link
                href="/sobre"
                className="rounded-full border border-blue-300/70 px-6 py-3 text-sm font-semibold text-blue-900 transition hover:border-brand-blue hover:text-brand-blue"
              >
                Conhecer a equipa
              </Link>
            </div>
          </div>
          <div className="card-animated p-8">
            <p className="text-sm font-semibold text-blue-200">Resumo rápido</p>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li>Teste genético rápido e simples.</li>
              <li>Dispositivo compacto para análise genética.</li>
              <li>Relatório simples com resultado positivo ou negativo.</li>
              <li>Integração com app fácil e intuitiva. </li>
            </ul>
           
          </div>
        </div>
      </div>
    </section>
  );
}
