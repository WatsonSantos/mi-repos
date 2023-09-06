"use client";

import styles from "../../../styles/navbar.module.css";

//import "../../../../public/css/nav.module.css"
import { useNotFoundPageStatusContext } from "@/hooks/context/notFoundPageStatus";

//import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
//bg-gray-800

export default function Navbar() {
  const { status, setStatus } = useNotFoundPageStatusContext();
  const [activeNav, setActiveNav] = useState("inicio");

  const [navbar, setNavbar] = useState(false);

  function activeNavLink(link) {
    setActiveNav(link);
  }

  return (
    <>
      <nav className="w-full fixed top-0 navbar">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 py-8 lg:py-14">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  alt="logo"
                  src="/img/layout/logo.png"
                  width={160}
                  height={160}
                  className="absolute -top-6 -left-4 mt-8 sm:mt-4 md:mt-2 z-50 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]"
                ></Image>
                {/* <h2 className="text-2xl text-black font-bold">Dicionário</h2> */}
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-custom_yellow transition ease-in-out duration-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-custom_yellow transition ease-in-out duration-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-1 md:flex md:space-x-8 lg:space-x-12 md:space-y-0 bg-yellow-400 p-10 md:p-0 md:bg-transparent md:text-sm lg:text-base">
                <li
                  onClick={() => activeNavLink("inicio")}
                  className={
                    activeNav === "inicio"
                      ? styles.active
                      : `transition ease-in-out duration-300 nav_li flex justify-start items-center text-zinc-700  hover:text-custom_yellow`
                  }
                >
                  <Link href="/" className="ml-4 nav_li-link">
                    Início
                  </Link>
                </li>
                <li
                  onClick={() => activeNavLink("dicionario")}
                  className={
                    activeNav === "dicionario"
                      ? styles.active
                      : `transition ease-in-out duration-300 nav_li flex justify-start items-center text-zinc-700  hover:text-custom_yellow`
                  }
                >
                  <Link href="/dicionario" className="ml-4 nav_li-link">
                    Dicionário
                  </Link>
                </li>
                <li
                  onClick={() => activeNavLink("abreviaturas")}
                  className={
                    activeNav === "abreviaturas"
                      ? styles.active
                      : "transition ease-in-out duration-300 nav_li flex justify-start items-center text-zinc-700  hover:text-custom_yellow"
                  }
                >
                  <Link href="/abreviaturas" className="ml-4 nav_li-link">
                    Abreviaturas
                  </Link>
                </li>
                <li
                  onClick={() => activeNavLink("sobre")}
                  className={
                    activeNav === "sobre"
                      ? styles.active
                      : "transition ease-in-out duration-300 nav_li flex justify-start items-center text-zinc-700  hover:text-custom_yellow"
                  }
                >
                  <Link href="" className="ml-4 nav_li-link">
                    Sobre
                  </Link>
                </li>
                <li 
                onClick={() => activeNavLink("contacto")}
                className={
                  activeNav === "contacto"
                    ? styles.active
                    :"transition ease-in-out duration-300 nav_li flex justify-start items-center text-zinc-700  hover:text-custom_yellow"}>
                  <Link href="#" className="ml-4 nav_li-link">
                    Contacto
                  </Link>
                </li>
                <li className="transition ease-in-out duration-300 p-2 px-4 rounded-md cursor-pointer nav_li flex justify-start items-center text-white bg-custom_yellow  lg:hover:bg-yellow_hover">
                  <Link href="#">Newsletter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
