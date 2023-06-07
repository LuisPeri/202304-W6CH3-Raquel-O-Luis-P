import { CharacterCard } from "../character.card/character.card";
import { Communication } from "../comunications/comunications";
import { useCharacters } from "../../hooks/use.character";

export function List() {
  const { characters, handleKill } = useCharacters();

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {characters.map((item) => (
            <CharacterCard
              item={item}
              key={item.id}
              handleKill={handleKill}
            ></CharacterCard>
          ))}
        </ul>
      </div>
      <div className="comunications">
        <Communication></Communication>
      </div>
    </>
  );
}
