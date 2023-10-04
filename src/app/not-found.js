"use client";
import { useRouter } from "next/navigation";
import styles from "../../public/css/notFoundPage.module.css";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <div className={styles.section}>
        <div className={styles.numbers}>
          <span className={styles.number}>4</span>
          <span className={styles.number}>0</span>
          <span className={styles.number}>4</span>
        </div>
        <h1 className="mb-8 text-2xl">
          <span className="font-semibold">Ups!</span> Página não encontrada...
        </h1>

        <button
          onClick={() => {
            router.back();
          }}
          className="text-sm px-8 py-2 rounded-md bg-zinc-950 hover:bg-zinc-900 text-white outline-node border-1"
        >
          Voltar
        </button>
      </div>
    </>
  );
}
