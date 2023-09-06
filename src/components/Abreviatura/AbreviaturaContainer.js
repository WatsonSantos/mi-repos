"use client";

import useSWR from "swr";
import Loading from "@/app/loading";

//Usar o swr para evitar múltiplas renderizações causadas pelo useState, useEffect

export default function AbreviaturaContainer() {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const apiURl = "http://localhost:8000/abbreviations";
  const { data, error, isLoanding } = useSWR(apiURl, fetcher);
  console.log(data);

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <section className="w-full h-full   grid lg:grid-cols-2">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-start mb-6 mt-18 sm:mt-0">
          Abreviaturas no PS-Dicionário <br />
          <div className="underline-green"></div>
        </h1>

        <p className="leading-7">
          Abaixo são apresentadas abreviatuaras das palavras presentes no PS
          Dicionário de forma a ajudar-te a ter um experiência melhor ao
          pesquisar as palavras.
        </p>
      </div>
      <ul className="grid lg:grid-cols-2 sm:grid-cols-4 grid-cols-2 mt-12 lg:mt-2  lg:justify-items-end abbreviations">
        {data &&
          data.abbreviations.map((abbreviation) => (
            <div
              key={abbreviation.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="h-[0.1px] w-36 sm:w-32 lg:w-38 bg-[#88888891] mb-2 rounded-xl"></div>
              <li className="abbreviation mb-2">
                {abbreviation.name}: {abbreviation.abbreviation}
              </li>
            </div>
          ))}
      </ul>
    </section>
  );
}
