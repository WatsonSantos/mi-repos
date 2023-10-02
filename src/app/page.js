"use client";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Message from "@/components/Alert/Message";

import Link from "next/link";

export default function Home() {
  const [user, setUser] = useState("");

  async function getRepo(username) {
    if (user === "") {
      Message("Error", "Insira um nome de utilizador!");
      return false;
    }
  }

  return (
    <>
      <ToastContainer />
      <main className="flex flex-col items-center justify-center h-screen  bg-gradient-to-r from-indigo-300 to-fuchsia-200 sm:pt-20">
        <Link href="#" className="absolute top-8 right-8">
          <AiFillGithub className="text-xl" />
        </Link>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl  text-[#1ED950] mb-12 md:mb-0">𝓜𝓲 𝓡𝓮𝓹𝓸𝓼</h1>
          <div className="flex flex-col  items-center justify-center md:flex-row h-full w-full p-8 md:p-32">
            <input
              value={user || ""}
              onChange={(event) => setUser(event.target.value)}
              type="text"
              placeholder="Insira o utilizador do GitHub"
              className="p-3 w-full md:w-96 mb-5 md:mb-0 md:mr-3 outline-none border-[1px] border-indigo-700 focus:drop-shadow-md text-zinc-700 rounded-sm transition-all focus:placeholder:bottom-8 focus:placeholder:text-xs"
            />
            {user.length > 0 ? (
              <button
                className="flex items-center justify-center py-3 md:px-8 w-full md:w-auto outline-none bg-indigo-700 hover:bg-indigo-600 transition-all text-white rounded-sm"
                onClick={() => getRepo(user)}
              >
                <Link href={`/repositorios/${user}`}>Procurar</Link>
              </button>
            ) : (
              <Link
                className="flex items-center justify-center py-3 md:px-8 w-full md:w-auto outline-none bg-indigo-700 hover:bg-indigo-600 transition-all text-white rounded-sm"
                onClick={() => getRepo(user)}
                href={""}
              >
                Procurar
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
