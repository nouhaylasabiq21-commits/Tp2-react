import Compteur from "./Compteur";
import MessageBouton from "./MessageBouton";
import FormulaireNom from "./FormulaireNom";
import CompteurEffet from "./CompteurEffet";
import AffichageDynamique from "./AffichageDynamique";
import FormulaireInscription from "./FormulaireInscription";
import CompteurTitre from "./CompteurTitre";

export default function App() {
  return (
    <main>
      <h1>Exercices React Hooks</h1>

      <Compteur />
      <MessageBouton />
      <FormulaireNom />
      <CompteurEffet />

      <hr />

      <AffichageDynamique />
      <FormulaireInscription />
      <CompteurTitre />
    </main>
  );
}