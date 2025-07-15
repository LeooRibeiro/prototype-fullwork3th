"use client"; // Necessário se estiver usando App Router

import { useState } from "react";

export type Job = {
  tipo: string;
  administrativo: boolean;
  nomeFuncionario: string;
  localidade: string;
  descricao: string;
  contrato: string;
};

type AccordionJobCardProps = {
  job: Job;
};

export default function AccordionJobCard({ job }: AccordionJobCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      {/* card */}
      <div
        className="relative bg-white rounded shadow-md p-4 cursor-pointer transition hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* icon arrow */}
        <div className="absolute top-21 left-60">+</div>
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-sm text-gray-500">{job.tipo}</p>
            <h2 className="text-lg font-semibold text-gray-800">
              Funcionário: {job.nomeFuncionario}
            </h2>
            <p className="text-sm text-gray-600">{job.localidade}</p>
            <p className="text-sm text-gray-600 w-full flex justify-between">
              Área: {job.administrativo ? "Administrativo" : "Tecnologia"}
            </p>
          </div>
          <button
            className="border-2 border-gray-600 py-3 px-6 cursor-pointer duration-200 hover:border-orange-300 hover:bg-orange-300 hover:text-white"
            onClick={(e) => {
              e.stopPropagation(); // evita fechar o accordion
              alert(`Contratando ${job.nomeFuncionario}`);
            }}
          >
            Contratar
          </button>
        </div>

        {/* Conteúdo oculto */}
        {isOpen && (
          <div className="mt-4 border-t pt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700">{job.descricao}</p>
            </div>
            <div className="w-full md:w-40 flex-shrink-0">
              <p className="text-sm font-medium text-gray-600">
                Tipo de contrato:
              </p>
              <p className="text-sm text-gray-800">{job.contrato}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
