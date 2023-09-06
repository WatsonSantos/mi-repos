"use client";

import '../../../styles/footer.css'

import { useNotFoundPageStatusContext } from "@/hooks/context/notFoundPageStatus";

import Image from "next/image";

export default function Footer() {
  const { status, setStatus } = useNotFoundPageStatusContext();
  return (
    <>
      <footer className="bg-gray-800 flex items-center justify-center">
        <div className="max-w-screen-xl pt-8 pb-8 mx-6 sm:mx-1 md:mx-2 lg:mx-3 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div >
              <Image
                width={100}
                height={180}
                src="/img/layout/logo2.png"
                className="-ml-8"
                alt="logo"
              />
              <p className="max-w-xs text-sm text-gray-400">
                Tradutor de Português para Criolo Fôro e Criolo Fôro para
                Português
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 mg:grid-cols-2 lg:grid-cols-4">
              <div className="md:mt-4 ">
                <p className="font-medium text-gray-500">Links importantes</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75 cursor-pointer" href="#">
                    {" "}
                    Dicionário{" "}
                  </a>
                  <a
                    className="hover:opacity-75 cursor-pointer"
                    href="/abreviaturas"
                  >
                    {" "}
                    Abreviaturas{" "}
                  </a>
                  <a className="hover:opacity-75 cursor-pointer" href="/sobre">
                    {" "}
                    Sobre{" "}
                  </a>
                  <a className="hover:opacity-75 cursor-pointer" href="#">
                    {" "}
                    Contactos{" "}
                  </a>
                </nav>
              </div>

              <div className="newsletter grid-cols-1 lg:col-span-2 sm:grid-cols-2 flex items-center justify-center">
                <input
                  required
                  type="email"
                  placeholder="Insira o seu E-mail"
                  className="newsletter-input w-56 md:w-full transition ease-linear placeholder:text-sm mr-3 p-2 px-3 rounded-sm outline-none border-2 border-white focus:border-custom_green"
                />
                <button
                  type="button"
                  className="newsletter-btn transition ease-linear btn text-white bg-custom_green px-4 py-3 rounded-3xl text-sm hover:bg-green_hover"
                >
                  Subscrever
                </button>
              </div>
            </div>
            <div className="flex  flex-col items-center md:items-start justify-start">
              <div className="bg-custom_green h-[.8px] w-full md:hidden"></div>
                <p className="flex items-center justify-start mt-4 text-xs text-slate-50">
                  Copyright © 2023 PS Dicionário
                </p>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
}
