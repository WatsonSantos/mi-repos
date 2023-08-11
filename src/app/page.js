
import styles from "../../public/css/home.module.css";

export default function Home() {
  return (
    <main
      className={`${styles.content_main}  min-h-screen  w-full 2xl:px-48 lg:px-32 md:px-12 px-5`}
    >
      <div className="fixed -z-10 w-10 h-5 bg-custom_green top-20 left-56 opacity-10"></div>
      <div className="fixed -z-10 w-5 h-10 bg-custom_red top-20 right-48 opacity-10"></div>
      <div className="fixed -z-10 w-10 h-10 bg-black opacity-20"></div>
      <div className="fixed -z-10 w-10 h-10 bg-custom_yellow opacity-5 right-10"></div>
      <div className="fixed -z-10 w-20 h-20 bg-custom_green bottom-10 opacity-25"></div>
      <div className="fixed -z-10 w-5 h-5 bg-custom_red bottom-40 left-96 opacity-25"></div>
      <div className="fixed -z-10 w-28 h-28 bg-custom_red bottom-10 right-10 opacity-25"></div>
      <div className="fixed -z-10 w-16 h-16 bg-custom_yellow bottom-40 right-80 opacity-25"></div>
      <div className="fixed -z-10 w-16 h-16 bg-black -bottom-10 right-96 opacity-25"></div>
      <div className="fixed -z-10 w-16 h-16 bg-custom_green -bottom-10 left-96 opacity-25"></div>
      <form method="#" action="#" className="form-control w-full mt-48">
        <input
          className={`${styles.input} shadow-xl w-full rounded-lg h-14 border border-x-zinc-300 focus:border-yellow-400 outline-none px-10`}
          type="text"
          placeholder="Pesquise por palavras"
        />
      </form>
      <h3 className="text-zinc-800 font-bold text-lg mt-8 w-full">
        Mais pesquisadas recentemente
      </h3>
      <div className="h-0.5 bg-[#ebc009] mt-2 w-32"></div>
      <div className="recent-words mt-3 flex flex-row justify-between">
        <div className="cerent-word text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word  text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word  text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 cursor-pointer">
          Buda
        </div>
        <div className="cerent-word  text-custom_yellow transition ease-in-out duration-300 hover:shadow bg-[#ebc2093a] p-1 px-6 cursor-pointer">
          Buda
        </div>
      </div>
    </main>
  );
}
