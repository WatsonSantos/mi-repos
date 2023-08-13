"use client";
import Link from "next/link";
import { FcLeft } from "react-icons/fc";
import { useNotFoundPageStatusContext } from "@/hooks/context/notFoundPageStatus";
import styles from "../../public/css/notFoundPage.module.css";
import Button from "@/components/layout/Button/Button";
import { useEffect } from "react";

export default function NotFound() {
  const { status, setStatus } = useNotFoundPageStatusContext();

  useEffect(() => {
    setStatus(1);
    console.log(status);
  }, [status, setStatus]);

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
        <Link
          href="/"
          className="flex align-center justify-center bg-black p-3 pr-5 pl-5 rounded-xl hover:bg-zinc-950 "
        >
          <FcLeft className="mt-1 mr-1" />
          <Button text="Página inicial" className="text-white" />
        </Link>
      </div>
    </>
  );
}
