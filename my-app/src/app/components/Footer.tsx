import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-300 text-black py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between lg:justify-center gap-6">
        {/* Links principais */}
        <div className="ml-5 w-6/12 grid grid-cols-2 gap-6 text-sm font-medium text-center md:text-left lg:justify-center">
          <Link href="/sobre">
            <span className="hover:underline">Sobre Nós</span>
          </Link>
          <Link href="/contato">
            <span className="hover:underline">Fale Conosco</span>
          </Link>
          <Link href="/politica-de-privacidade">
            <span className="hover:underline">Política de Privacidade</span>
          </Link>
          <Link href="/termos-de-uso">
            <span className="hover:underline">Termos de Uso</span>
          </Link>
          <Link href="/rastrear-pedido">
            <span className="hover:underline">Rastrear Pedido</span>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-center md:text-right">
          © {new Date().getFullYear()} YourWork. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
