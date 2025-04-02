import CharacterCard from "@/components/CharacterCard";
export default async function Home() {

  const response = await fetch("https://api.pokemontcg.io/v2/cards?")
  const resJson = await response.json()
  const characters = resJson.data



  return (
    <div className="wrapper p-[16px] pb-[100px]">
      {/* TOP BAR HEADER */}
      <header className="flex justify-between items-center mb-[16px]">
        <h1 className="text-[50px] font-bold">Your Task</h1>
        <img className="w-[24px] h-[24px]" src="/ham.png" />
      </header>
      {/* MAIN CONTENT */}
      <main className="flex flex-col gap-[16px]">

        {characters.map(character => (
          <CharacterCard name={character.name} types={character.types}
            key={character.id} />
        ))}

</main>
    </div>
  );
}
