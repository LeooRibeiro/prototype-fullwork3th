import React from 'react'

interface CardProps {
  titulo: string;
  descricao: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ titulo, descricao, image }) => {
    return (
        <div className="relative max-w-90 w-90 h-[488px] border-15 border-white shadow-2xl overflow-hidden">
          {/* Imagem de fundo */}
          <img
            src={image}
            alt="Gestão administrativa"
            className="w-full h-full object-cover"
          />
    
          {/* Bloco no topo direito */}
          <div className="absolute text-left top-10 right-0 bg-gray-100 p-5 shadow-lg max-w-[90%]">
            <h3 className="text-lg font-semibold mb-2">{titulo}</h3>
            <p className="text-sm text-gray-700 mb-2">
              {descricao}
            </p>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Saíba mais
            </a>
          </div>
        </div>
      );
}

export default Card;