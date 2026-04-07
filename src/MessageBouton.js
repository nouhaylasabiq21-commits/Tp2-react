import { useState } from "react";

export default function MessageBouton() {
  const [message, setMessage] = useState("Appuyez sur le bouton");

  const changeMessage = () => {
    setMessage("Le bouton a bien été cliqué !");
  };

  return (
    <section>
      <h2>Message dynamique</h2>
      <p>{message}</p>
      <button onClick={changeMessage}>Cliquer</button>
    </section>
  );
}