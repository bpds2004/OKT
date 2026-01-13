export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-padding grid gap-6 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-brand-slate">OKT – OncoKit Test</p>
          <p className="mt-2 text-sm text-slate-600">
            Criado por Beatriz Sousa e José Alves
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Este projeto é informativo e não substitui aconselhamento médico.
          </p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-700">Contactos</p>
          <p className="mt-2">geral@onco-kit-test.pt</p>
          <p>Portugal</p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-700">Social</p>
          <div className="mt-2 flex gap-3">
            {["LinkedIn", "Instagram", "X"].map((network) => (
              <button
                key={network}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs transition hover:border-brand-blue hover:text-brand-blue"
                type="button"
              >
                {network}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
