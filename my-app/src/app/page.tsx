import Image from "next/image";
import Header from "./components/Header";
import Card from "./components/Card";

import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[1420px] grid grid-cols-1 mx-auto">
      <Header />
      {/* section for header */}
      {/* section for apresentation */}
      <section
        id="start"
        className="mt-20 flex flex-col justify-center items-center text-center"
      >
        <p className="text-lg font-semibold">SOLUÇÕES EFECIENTES</p>
        <h1 className="mt-3 text-4xl w-7/12 md:text-6xl md:w-10/12 font-normal">
          Transforme sua gestão adminstrativa
        </h1>
        <Link href="/services">
          <button className="cursor-pointer mt-10 border-2 border-orange-200 py-3 text-white font-semibold px-6 bg-orange-300 duration-200">
            ACESSAR SERVIÇOS
          </button>
        </Link>
        <Image
          src="/images/imgInicio.jpg" // Caminho relativo à pasta public
          alt="Imagem de início"
          width={700}
          height={700}
          className="mt-10 w-[800px] h-[500px]"
        />
      </section>
      {/* About us */}
      <section
        id="about"
        className="mt-20 flex flex-col justify-center items-center text-center"
      >
        <p className="font-semibold">QUEM SOMOS</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Sua solução em terceirização{" "}
        </h2>
        <p className="mt-3 max-w-6/12">
          Atuamos com excelência na prestação de serviços terceirizados nas
          áreas administrativa e de tecnologia, contribuindo para a otimização
          de processos e o desenvolvimento estratégico de nossos parceiros.
        </p>
        <Link href="/services">
        <button className="mt-5 border-2 py-3 px-6 hover:bg-orange-300 hover:border-orange-200 hover:text-white duration-200 cursor-pointer">
          SAIBA MAIS
        </button>
        </Link>
      </section>
      {/* For Services */}
      <section
        id="services"
        className="pt-10 mt-10 border-t-2 border-gray-300 flex flex-col justify-center items-center text-center"
      >
        <p className="text-orange-300 font-semibold">SOLUÇÕES PRATICAS</p>
        <h2 className="mt-3 text-3xl max-w-7/12 sm:text-4xl md:text-5xl md:max-w-9/12 lg:max-w-6/12">
          Terceirização de serviços administrativos
        </h2>
        {/* grid images */}
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 w-9/12 justify-items-center gap-10 mt-10">
          <Card
            titulo="Gestão administrativa"
            descricao="Otimize suas operações com nossa gestão administrativa eficiente."
            image="/images/imgServico1.jpg"
          />
          <Card
            titulo="Controle de processos"
            descricao="Otimeze seu tempo, e faça melhorias no dia a dia de seu trabalho."
            image="/images/imgServico2.jpg"
          />
          <div className="lg:col-span-2">
            <Card
              titulo="Eficacia operacional"
              descricao="recursos solidos e prontos para usar em diversas situações."
              image="/images/imgServico3.jpg"
            />
          </div>
        </div>
      </section>
      {/* Companies */}
      <section className="border-gray-400 border-t-1 border-b-1 pb-15 pt-15 mt-20 flex flex-col justify-center items-center text-center">
        <p className="font-semibold text-orange-300 text-2xl">Clientes</p>
        <h2 className="text-5xl font-normal mt-5">
          Facilitando o trabalho de muitos
        </h2>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <Image
            src="/images/empresa1.svg"
            alt="Empresa 1"
            width={200}
            height={100}
            className="w-40 h-20 object-contain"
          />
          <Image
            src="/images/empresa2.svg"
            alt="Empresa 2"
            width={200}
            height={100}
            className="w-40 h-20 object-contain"
          />
          <Image
            src="/images/empresa3.svg"
            alt="Empresa 3"
            width={200}
            height={100}
            className="w-40 h-20 object-contain"
          />
        </div>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-8/12 mx-auto pt-10 mt-10 justify-items-center"
      >
        <div className="lg:col-span-2 text-center">
          <p className="text-orange-300 font-semibold text-md text-center">
            FALE CONOSCO
          </p>
          <h2 className="font-medium text-4xl">
            Estamos aqui para ajudar você!
          </h2>
        </div>
        <div className="mt-5 w-full">
          <form className="flex flex-col">
            <label className="font-semibold">Nome</label>
            <input
              type="text"
              placeholder="Nome completo"
              className="border-2 mt-1 border-gray-400 p-2 rounded"
            />
            <label className="font-semibold mt-5">E-mail</label>
            <input
              type="email"
              placeholder="@gmail.com"
              className="border-2 mt-1 border-gray-400 p-2 rounded"
            />
            <label className="font-semibold mt-5">Telefone</label>
            <input
              type="tel"
              placeholder="(xx) 9xxxx-xxxx"
              className="border-2 mt-1 border-gray-400 p-2 rounded"
            />
            <label className="font-semibold mt-5">Descrição</label>
            <textarea
              placeholder="Mensagem"
              className="border-2 mt-1 border-gray-400 p-2 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="cursor-pointer bg-orange-300 mt-10 text-white py-2 px-4 rounded hover:bg-orange-400 transition duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="h-auto w-full mt-5">
          <p className="font-medium text-4xl">Atendemos toda a semana:</p>
          <div className="mt-5">
            <p>Segunda a Sexta: 9:00am - 16:00pm</p>
            <p>Sabado e Domingo: 8:00am - 14:00pm</p>
          </div>
          <h2 className="font-medium text-4xl mt-10">Localização</h2>
          <p>
            <a>São Paulo, SP - BR</a>
          </p>
          <div className="w-full">
            <iframe
              className="mt-10 w-100 h-65"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d607.1649386690797!2d-45.447043551655!3d-23.686905297958997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1752261850067!5m2!1spt-BR!2sbr"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <footer className="w-full h-40 mt-25 bg-orange-300 p-5">
        <div className="gap-10 flex items-center">
          <a>AGENDAR CONSULTA</a>
          <a>INTAKE COMPLETO</a>
        </div>
        <p className="mt-15 text-gray-700 text-center">
          © 2023 YourWork. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
