import Image from "next/image";

import Card from "./components/Card";

export default function Home() {
  return (
    <div className="max-w-[1420px] mx-auto">
      <header className="flex h-30 items-center justify-between shadow-lg shadow-gray-300 py-4 px-20">
        <h1 className="font-semibold text-4xl">Stefanini</h1>
        <div className="w-auto">
          <ul className="flex items-center gap-10 text-lg font-semibold h-auto w-full">
            <li>
              <a href="">INÍCIO</a>
            </li>
            <li>
              <a href="">SOBRE</a>
            </li>
            <li>
              <a href="">SERVIÇOS</a>
            </li>
            <li className="">
              <a
                href=""
                className="border-2 border-gray-600 py-3 px-6 cursor-pointer hover:bg-amber-500 duration-209"
              >
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </header>
      <section className="mt-20 flex flex-col justify-center items-center text-center">
        <p className="text-lg font-semibold">SOLUÇÕES EFECIENTES</p>
        <h1 className="mt-3 text-6xl font-normal">
          Transforme sua gestão adminstrativa
        </h1>
        <button className="mt-10 border-2 py-3 px-6 bg-amber-500 duration-200">
          ACESSAR SERVIÇOS
        </button>
        <Image
          src="/images/imgInicio.jpg" // Caminho relativo à pasta public
          alt="Imagem de início"
          width={700}
          height={700}
          className="mt-10 w-[800px] h-[500px]"
        />
      </section>
      {/* About us */}
      <section className="mt-20 flex flex-col justify-center items-center text-center">
        <p className="font-semibold">QUEM SOMOS</p>
        <h2 className="text-5xl font-normal">Sua solução em terceirização </h2>
        <p className="mt-3">
          Transformando a gestão de sua empresa com eficiência
        </p>
        <button className="mt-5 border-2 py-3 px-6 hover:border-purple-400 duration-200">
          SAIBA MAIS
        </button>
      </section>
      {/* Services */}
      <section className="pt-10 mt-10 border-t-2 border-gray-300 flex flex-col justify-center items-center text-center">
        <p className="text-purple-400 font-semibold">SOLUÇÕES PRATICAS</p>
        <h2 className="mt-3 text-5xl max-w-150">
          Terceirização de serviços administrativos
        </h2>
        {/* grid images */}
        <div className="grid grid-cols-2 w-9/12 justify-items-center gap-10 mt-10">
          <Card/>
          <Card/>
          <div className="col-span-2">
          <Card/>
          </div>
        </div>
      </section>
    </div>
  );
}
