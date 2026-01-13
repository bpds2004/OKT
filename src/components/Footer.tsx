import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-padding grid gap-6 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-brand-slate">OKT – OncoKit Test</p>
          <p className="mt-2 text-sm text-slate-600">
            Criado por Beatriz Sousa e José Alves
          </p>
          
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-700">Contactos</p>
          <div className="mt-2 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg text-slate-700" />
              <a href="mailto:oncokit.test@gmail.com" className="hover:underline">oncokit.test@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-lg text-slate-700" />
              <span>Portugal</span>
            </div>
          </div>
        </div>
        {/* <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-700">Social</p>
          <div className="mt-2 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-200 p-2 text-xs transition hover:border-brand-blue hover:text-brand-blue">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-slate-200 p-2 text-xs transition hover:border-brand-blue hover:text-brand-blue">
              <FaInstagram />
            </a>
            <a href="#" aria-label="X" className="rounded-full border border-slate-200 p-2 text-xs transition hover:border-brand-blue hover:text-brand-blue">
              <FaTwitter />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
