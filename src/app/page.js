"use client";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Message from "@/components/Alert/Message";

import Loading from "@/app/loading";

import Link from "next/link";

export default function Home() {
  //benildebonfim
  const [erroMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getRepo(username) {
    if (user === "") {
      Message("Error", "Insira um nome de utilizador!");
      return false;
    }
    setIsLoading(true);
    await fetch(`https://api.github.com/users/${username}/repos`).then(
      async (data) => {
        await data.json().then((res) => {
          if (res.length === 0) {
            Message("Error", "Repositório não encontrado!");
            setIsLoading(false);
          } else {
            setData(res);
            setIsLoading(false);
            Message("Success", "Repositório encontrado!");
          }
        });
      }
    );
  }

  return (
    <>
      <ToastContainer />
      <main className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-indigo-300 to-fuchsia-200 sm:pt-20">
        <Link href="#" className="absolute top-8 right-8">
          <AiFillGithub className="text-xl" />
        </Link>
        {isLoading === true ? (
          <Loading />
        ) : (
          <>
            {data.length > 0 ? (
              <ul>
                {data.map((repo) => {
                  return <li key={repo.id}>{repo.name}</li>;
                })}
              </ul>
            ) : (
              <>
                <h1 className="text-5xl mb-12 sm:mb-0 sm:mt-18 text-[#1ED950]">
                  𝓜𝓲 𝓡𝓮𝓹𝓸𝓼
                </h1>
                <div className="flex flex-col  items-center justify-center md:flex-row w-full p-4 sm:p-32">
                  <input
                    value={user || ""}
                    onChange={(event) => setUser(event.target.value)}
                    type="text"
                    placeholder="Insira o utilizador do GitHub"
                    className="p-3 w-full md:w-96 mb-4 md:mb-0 md:mr-3 outline-none border-[1px] border-indigo-700 focus:drop-shadow-md text-zinc-700 rounded-sm transition-all focus:placeholder:bottom-8 focus:placeholder:text-xs"
                  />
                  <button
                    className="py-3 md:px-8 w-full md:w-auto outline-none bg-indigo-700 hover:bg-indigo-600 transition-all text-white rounded-sm"
                    onClick={() => getRepo(user)}
                  >
                    Procurar
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </main>
    </>
  );
}
