import React from "react";
import Header from "../components/Header";
import AccordionJobCard, { Job } from "../components/AccordionJobCard";
import Image from "next/image";

export default function Services() {
  const trabalhos: Job[] = [
    {
      tipo: "Tecnologia",
      administrativo: false,
      nomeFuncionario: "Lucas Almeida",
      localidade: "Rio de Janeiro - RJ",
      descricao:
        "Desenvolvimento de APIs REST com Node.js e integração com sistemas.",
      contrato: "PJ ou CLT",
    },
    {
      tipo: "Administrativo",
      administrativo: true,
      nomeFuncionario: "Maria Souza",
      localidade: "Belo Horizonte - MG",
      descricao: "Gestão financeira e controle de planilhas mensais.",
      contrato: "CLT",
    },
    {
      tipo: "Administrativo",
      administrativo: true,
      nomeFuncionario: "Eloisa Costa",
      localidade: "Curitiba - PR",
      descricao: "Suporte administrativo e organização de documentos.",
      contrato: "CLT",
    },
    {
      tipo: "Administrativo",
      administrativo: true,
      nomeFuncionario: "Matheus",
      localidade: "Guarulhos - SP",
      descricao: "Gerenciamento de agenda e atendimento ao cliente.",
      contrato: "CLT",
    },
  ];

  return (
    <div className="max-w-[1420px] grid grid-cols-1 mx-auto">
      <Header />
      {/* for apresentation */}
      <section
        id="start"
        className="mt-20 flex flex-col justify-center text-left pl-7"
      >
        <p className="text-lg font-semibold">SUA TAREFA EM BOAS MÃOS</p>
        <h1 className="mt-3 text-4xl w-9/12 md:text-6xl md:w-10/12 font-normal">
          Conheça nossos serviços de terceirização
        </h1>
      </section>
      <section>
        <Image
          src="/images/imgInicio.jpg" // Caminho relativo à pasta public
          alt="Imagem de início"
          width={700}
          height={700}
          className="mt-10 w-[800px] h-[500px]"
        />
        <h2>Analise sua demanda para uma melhor </h2>
      </section>
      <section className="bg-orange-300 mt-10 px-7 py-5 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-2">Opções de terceirazação</h3>
        {trabalhos.map((job, index) => (
          <AccordionJobCard key={index} job={job} />
        ))}
      </section>
    </div>
  );
}
