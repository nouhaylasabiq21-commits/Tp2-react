import { useState } from "react";

export default function FormulaireInscription() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Prénom : ${prenom}\nEmail : ${email}`);
  };

  return (
    <section>
      <h2>Exercice 2 : Formulaire d’inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Votre prénom"
            value={prenom}
            onChange={(event) => setPrenom(event.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <button type="submit">S’inscrire</button>
      </form>
    </section>
  );
}