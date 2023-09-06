import AbreviaturaContainer from "@/components/Abreviatura/AbreviaturaContainer";

export default async function Abreviaturas() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center px-6 md:px-24 sm:px-6 lg:px-40">
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
      <AbreviaturaContainer />
    </main>
  );
}
