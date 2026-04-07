import { useEffect, useState } from "react";

export default function CompteurEffet() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Le compteur est à ${count}`);
  }, [count]);

  return (
    <section>
      <h2>Compteur avec useEffect</h2>
      <p>Valeur actuelle : {count}</p>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Incrémenter avec effet
      </button>
    </section>
  );
}