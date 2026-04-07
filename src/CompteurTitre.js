import { useEffect, useState } from "react";

export default function CompteurTitre() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `Clics : ${clicks}`;
  }, [clicks]);

  return (
    <section>
      <h2>Exercice 3 : Compteur avec effet personnalisé</h2>
      <p>Vous avez cliqué {clicks} fois.</p>
      <button onClick={() => setClicks((previousClicks) => previousClicks + 1)}>
        Ajouter un clic
      </button>
    </section>
  );
}