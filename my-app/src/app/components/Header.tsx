"use client";
import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="w-full h-20 flex items-center justify-between shadow-lg shadow-gray-300 py-4 px-6 relative">
      <h1 className="font-semibold text-3xl flex">Our<span className="rotate-340 block">W</span>ork</h1>

      {/* Botão de menu visível só no mobile */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Menu Desktop */}
      <ul className="hidden md:flex items-center gap-10 text-lg font-semibold">
        <li className="hover:text-orange-300 duration-200">
          <a href="#start">INÍCIO</a>
        </li>
        <li className="hover:text-orange-300 duration-200">
          <a href="#about">SOBRE</a>
        </li>
        <li className="hover:text-orange-300 duration-200">
          <a href="#services">SERVIÇOS</a>
        </li>
        <li>
          <a
            href="#contact"
            className="border-2 border-gray-600 py-3 px-6 cursor-pointer duration-200 hover:border-orange-300 hover:bg-orange-300 hover:text-white"
          >
            CONTATO
          </a>
        </li>
      </ul>

      {/* Menu Mobile */}
      {menuAberto && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-lg font-semibold md:hidden z-50">
          <li className="hover:text-orange-300 duration-200">
            <a href="#start">INÍCIO</a>
          </li>
          <li className="hover:text-orange-300 duration-200">
            <a href="#about">SOBRE</a>
          </li>
          <li className="hover:text-orange-300 duration-200">
            <a href="#services">SERVIÇOS</a>
          </li>
          <li>
            <a
              href="#contact"
              className="border-2 border-gray-600 py-3 px-6 cursor-pointer duration-200 hover:border-orange-300 hover:bg-orange-300 hover:text-white"
            >
              CONTATO
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
