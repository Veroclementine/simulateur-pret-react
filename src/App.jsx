import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatArgent, calculTotalPayer } from "./helpers";

function App() {
  const [montant, setMontat] = useState(10000);
  const [mois, setMois] = useState(6);
  const [total, setTotal] = useState(0);
  const [paiement, setPaiement] = useState(0);

  useEffect(() => {
    const resultTotalPayer = calculTotalPayer(montant, mois);
    setTotal(resultTotalPayer);
  }, [montant, mois]);

  //Calcul de la mensualité
  useEffect(() => {
    setPaiement(total / mois);
  }, [total]);

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

      {/* buttons - +  */}
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

      {/* chifre pret */}
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatArgent(montant)}
      </p>

      {/* choisir delai de paiment */}
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

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Récapitulatif <span className="text-indigo-600">des paiements </span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          {mois} Mois
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {" "}
          {formatArgent(paiement)} Mensualité
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatArgent(total)} Total à payer
        </p>
      </div>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
              Développe par: <span className='text-indigo-600'>Veronica Paredes</span>
          </h2>
          <a className='block mb-5 text-center' target="_blank" rel="noreferrer noopener" href="https://veronicaparedes.net">Visitez mon site web.</a>
    </div>
  );
}

export default App;
