import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatArgent } from "./helpers";

function App() {
  const [montant, setMontat] = useState(10000);
  const [mois, setMois] = useState(6);

  //estas variables no van a cambiar por eso no se usa useState
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setMontat(+e.target.value);
  }

  function handleClickDiminution() {
    const valeur = montant - STEP;

    if (valeur < MIN) {
      alert("Quantité non valide");
      return;
    }

    setMontat(valeur);
  }

  function handleClickAugmentation() {
    const valeur = montant + STEP;

    if (valeur > MAX) {
      alert("Quantité non valide");
      return;
    }

    setMontat(valeur);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white rounded-lg shadow p-10 ">
      <Header />

      <div className="flex justify-between my-6">
        <Button operator="-" fn={handleClickDiminution} />
        <Button
          operator="+"
          fn={handleClickAugmentation} //fn es funcion
        />
      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={montant}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatArgent(montant)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Choisir un <span className="text-indigo-600">délai </span> de paiement
      </h2>
      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={mois}
        onChange={(e) => setMois(+e.target.value)}
      >
        <option value="6">6 Mois</option>
        <option value="12">12 Mois</option>
        <option value="24">24 Mois</option>
      </select>
      
    </div>
  );
}

export default App;
