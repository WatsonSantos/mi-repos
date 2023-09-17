"use client";
import { Square } from "@/components/Square/Squares";
//import useSWR from "swr";
import styles from "../../public/css/home.module.css";
import { useEffect, useState, useMemo } from "react";

import { useNotFoundPageStatusContext } from "@/hooks/context/notFoundPageStatus";

export default function Home() {
  const { status, setStatus } = useNotFoundPageStatusContext();
  //const [searchWordsview, setSearchWordsView] = useState(false);
  const [words, setWords] = useState([]);
  //const [newWords, setNewWords] = useState([]);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function getWords() {
    fetch("http://localhost:8000/words").then(async (resp) => {
      await resp.json().then((res) => {
        setWords(res.words);
      });
    });
  }
  // word.name.startsWith - Pega só a palavra completa
  const filtredWords = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return words.filter((word) =>
      word.name.toLowerCase().includes(lowerSearch)
    ); //Pega também partes da palavra
  }, [search, words]);

  useEffect(() => {
    getWords();
  }, []);

  return (
    <main
      className={`${styles.content_main} min-h-screen  w-full 2xl:px-48 lg:px-32  md:px-12 px-5`}
    >
      <Square />
      <form method="#" action="#" className="form-control w-full mt-48">
        <input
          value={search || ""}
          onChange={handleChange}
          className={`${styles.input} shadow-xl w-full rounded-lg h-14 border border-x-zinc-300 focus:border-yellow-400 outline-none px-10`}
          type="text"
          placeholder="Pesquise por palavras"
        />
      </form>
      <h3 className="text-zinc-800 font-bold text-lg mt-8 w-full">
        Mais pesquisadas recentemente
      </h3>
      <div className="h-0.5 bg-[#ebc009] mt-2 w-32"></div>
      <div className="recent-words mt-3 flex flex-row justify-center items-center overflow-hidden">
        <div className="text-black fixed lg:left-[136px] md:left-[55px] hidden md:block recent-words-btn recent-words-btn-left">
          {"<"}
        </div>
        <div className="text-black fixed lg:right-[136px] md:right-[55px] hidden md:block recent-words-btn recent-words-btn-ight">
          {">"}
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 mr-4 cursor-pointer">
          Buda
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center">
        {search !== "" && filtredWords.length !== 0 && (
          <ul className="relative shadow-xl overflow-y-scroll min-h-16 max-h-40  left-auto w-[100%] md:w-[80%] pt-2 bg-white lg:bottom-[106px] md:bottom-[106px] bottom-[107px] px-2 scroll-m-9 pb-3">
            {filtredWords.map((d) => (
              <li
                className="flex justify-start items-center mt-2 px-4 text-zinc-700 hover:w-full h-10 hover:text-custom_yellow cursor-pointer hover:bg-[#fdcf0111]"
                key={d.id}
              >
                {d.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
