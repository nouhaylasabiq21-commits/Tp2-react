import { useState } from "react";

export default function AffichageDynamique() {
  const messages = [
    "Premier clic",
    "Deuxième clic",
    "Troisième clic",
    "Clic suivant"
  ];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((previousIndex) => {
      if (previousIndex < messages.length - 1) {
        return previousIndex + 1;
      }
      return previousIndex;
    });
  };

  return (
    <section>
      <h2>Exercice 1 : Affichage dynamique</h2>
      <p>{messages[index]}</p>
      <button onClick={handleClick}>Changer le texte</button>
    </section>
  );
}