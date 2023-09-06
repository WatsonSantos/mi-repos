import AbreviaturaContainer from "@/components/Abreviatura/AbreviaturaContainer";

async function dataGet() {
  //const res = await fetch("http://localhost:8000/abbreviations");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res) {
    throw new Error("Erro na requisição!");
  }
  return res.json();
}

export default async function Abreviaturas() {
  const dados = await (
    await fetch("http://localhost:8000/abbreviations")
  ).json();
  const data = dados.abbreviations;

  console.log(data);

  return (
    <main className="min-h-screen w-full flex justify-center items-center">
      <AbreviaturaContainer/>
      {/*<h1>Abreviaturas</h1>
      <ul>
        {data.map((d) => {
          <li key={d.id}>{d.name}</li>;
        })}
      </ul>*/}
    </main>
  );
}
