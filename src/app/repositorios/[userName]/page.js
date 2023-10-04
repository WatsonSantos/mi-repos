"use client";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbArrowBackUp } from "react-icons/tb";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

import Message from "@/components/Alert/Message";

import Loading from "@/app/loading";
import Footer from "@/components/Footer";

import Link from "next/link";

export default function Repositories({ params }) {
  //benildebonfim
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function getRepo(username) {
    setIsLoading(true);
    await fetch(`https://api.github.com/users/${username}/repos`).then(
      async (data) => {
        await data.json().then((res) => {
          if (res.length === 0) {
            Message("Error", "Repositório não encontrado!");
            setIsLoading(false);
          } else {
            //console.log(res);
            setData(res);
            setIsLoading(false);
            Message("Success", "Repositório encontrado!");
          }
        });
      }
    );
  }

  useEffect(() => {
    getRepo(params.userName);
  }, [params.userName]);
  return (
    <>
      <ToastContainer />
      <main className="flex flex-col items-center justify-center min-h-screen w-full  bg-gradient-to-r from-indigo-300 to-fuchsia-200 sm:pt-20">
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
          <>
            <div className="flex mt-24 md:mt-0 items-center justify-center rounded-full h-32 w-32 bg-indigo-700">
              <Image
                height={120}
                width={120}
                alt="user image"
                src={`${data[0].owner.avatar_url}`}
                className="rounded-full"
              />
            </div>
            <small className="text-zinc-700 mt-3 text-lg">
              {data[0].owner.login} 🚀
            </small>
            <ul className="flex flex-wrap items-center justify-center p-8 sm:p-12 lg:p-16 w-full h-full ">
              {data.map((repo) => {
                return (
                  <li
                    key={repo.id}
                    className="text-white mr-4 p-8 mb-4 h-36 w-full  md:w-64 text-lg
                  flex flex-col items-center cursor-pointer shadow-md 
                  justify-center transition-all overflow-hidden
                   bg-indigo-700 hover:bg-indigo-600 font-medium
                  hover:shadow-xl hover:shadow-indigo-950 relative"
                  >
                    <span className="absolute top-2 right-2">📌</span>
                    {repo.name}
                    <span className="ml-auto text-[10px] text-zinc-300 absolute right-2 bottom-2">
                      {repo.language}
                    </span>
                    <span className="ml-auto text-[10px] text-zinc-300 absolute left-2 bottom-2">
                      {repo.updated_at.slice(0, 10)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-7xl mb-4">😔</span>
            <h1 className="font-bold text-3xl mb-5 mt-4 text-gray-700 text-center">
              Repositório não encontrado!
            </h1>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
