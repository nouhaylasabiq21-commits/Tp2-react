import { useState } from "react";

export default function Compteur() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <section>
      <h2>Compteur simple</h2>
      <p>Nombre de clics : {count}</p>
      <button onClick={handleIncrement}>Incrémenter</button>
    </section>
  );
}