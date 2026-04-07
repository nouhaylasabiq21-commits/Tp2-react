import { useState } from "react";

export default function FormulaireNom() {
  const [nom, setNom] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nom saisi : ${nom}`);
  };

  return (
    <section>
      <h2>Formulaire nom</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
        <button type="submit">Valider</button>
      </form>
    </section>
  );
}