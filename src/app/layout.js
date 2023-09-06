//import { Header } from "next/dist/lib/load-custom-routes";

import "./globals.css";
import { Inter } from "next/font/google";

import { NotFoundPageStatusProvider } from "@/hooks/context/notFoundPageStatus";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PS - Dicionário",
  description: "Dicionário de Criolo Foro para Português",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        <NotFoundPageStatusProvider>{children}</NotFoundPageStatusProvider>
        <Footer />
      </body>
    </html>
  );
}
