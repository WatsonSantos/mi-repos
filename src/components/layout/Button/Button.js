"use client";

import Link from "next/link";
import { useNotFoundPageStatusContext } from "@/hooks/context/notFoundPageStatus";

import { FcLeft } from "react-icons/fc";

export default function Button({ id, className, name, text, page }) {
  const { status, setStatus } = useNotFoundPageStatusContext();
  return (
    <>
      <button id={id} className={className} name={name} page={page}>
        {text}
      </button>
    </>
  );
}
