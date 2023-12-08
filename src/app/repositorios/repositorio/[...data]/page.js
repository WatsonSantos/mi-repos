"use client";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbArrowBackUp } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

import Message from "@/components/Alert/Message";

import Loading from "@/app/loading";
import Footer from "@/components/Footer";

import Link from "next/link";

export default function Repository({ params }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function getRepo(userName, repoName) {
    setIsLoading(true);
    await fetch(`https://api.github.com/repos/${userName}/${repoName}`).then(
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

  useEffect(() => {
    getRepo(params.data[0], params.data[1]);
  }, [params.data]);
  return (
    <>
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
              {params.data[0]} 🚀
            </small>
            <ul className="flex flex-wrap items-center justify-center p-8 sm:p-12 lg:p-16 w-full h-full ">
              <pre>{params.data[0]}</pre>
            </ul>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-red-600">{data[0] && data[0].length}</p>
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
