import { useState } from "react";

interface PokemonItemProps {
  name: string;
  onClick: () => void;
}

export default function PokemonItem({ name, onClick }: PokemonItemProps) {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
    onClick();
  };

  return (
    <li
      onClick={handleClick}
      style={{
        cursor: "pointer",
        margin: "0.5rem 0",
        padding: "0.75rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <strong>{name.toUpperCase()}</strong> — Usado {count} veces
    </li>
  );
}