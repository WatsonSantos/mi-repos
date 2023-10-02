"use client";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbArrowBackUp } from "react-icons/tb";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

import Message from "@/components/Alert/Message";

import Loading from "@/app/loading";

import Link from "next/link";

let dta = {
  id: 12623657627672,
  repoName: "Jogo de Galo",
  description:
    "Jogo de galo feito com HTML, JavaScript e CSS. Servou também para treinar as minhas habilidades",
  date: "12/02/2022",
  like: 10,
};

export default function Repositories({ params }) {
  //benildebonfim
  const [data, setData] = useState([
    {
      id: 12623657627672,
      repoName: "Jogo de Galo",
      description:
        "Jogo de galo feito com HTML, JavaScript e CSS. Servou também para treinar as minhas habilidades",
      date: "12/02/2022",
      like: 10,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function getRepo(repoName) {
    setIsLoading(true);
    await fetch(`https://api.github.com/users/${repoName}/repos`).then(
      async (data) => {
        await data.json().then((res) => {
          if (res.length === 0) {
            Message("Error", "Repositório não encontrado!");
            setIsLoading(false);
          } else {
            console.log(res);
            setData(res);
            setIsLoading(false);
            Message("Success", "Repositório encontrado!");
          }
        });
      }
    );
  }
  /*
  useEffect(() => {
    getRepo(params.repoName);
  }, [params.repoName]);*/
  return (
    <>
      <ToastContainer />
      <main className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-300 to-fuchsia-200 sm:pt-20 p-4 sm:p-20">
        <Link
          href="https://github.com/WatsonSantos/mi-repos"
          target="_blank"
          className="absolute top-8 right-8"
        >
          <AiFillGithub className="text-xl" />
        </Link>
        <button
          className="absolute top-6 left-8"
          onClick={() => {
            router.back();
          }}
        >
          <TbArrowBackUp className="text-3xl text-red-600 transition-all hover:text-red-500" />
        </button>
        {isLoading === true ? (
          <Loading />
        ) : data.length > 0 ? (
          <div className="relative w-full flex flex-col flex-wrap items-center justify-center p-8 sm:p-12 lg:p-16 bg-indigo-700">
            <h1 className="relative text-white text-2xl md:text-4xl mb-10 md:mb-20">
              {data[0].repoName} <span className="absolute text-base md:text-2xl -top-1 ml-1">📌</span>
            </h1>
            <p className="text-base text-zinc-200 mb-6 md:mb-0 ">{data[0].description}</p>
            <span className="absolute text-[10px] text-zinc-200 bottom-4 right-4">Likes: {data[0].like}</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-7xl mb-4">😔</span>
            <h1 className="font-bold text-3xl mb-5 mt-4 text-gray-700 text-center">
              Repositório não encontrado!
            </h1>
          </div>
        )}
      </main>
    </>
  );
}
