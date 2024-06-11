//Function pour format argent

const formatArgent = (value) => {
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  return formatter.format(value);
};

//function pour calculer le montant total à payer

const calculTotalPayer = (montant, delai) => {
  let total;

  //plus le montant demandé est élevé, plus l'intérêt est faible

  if (montant < 5000) {
    total = montant * 1.5;
  } else if (montant >= 5000 && montant < 10000) {
    total = montant * 1.4;
  } else if (montant >= 10000 && montant < 15000) {
    total = montant * 1.3;
  } else {
    total = montant * 1.2;
  }

  //Delai - Plus la durée est longue, plus les intérêts sont élevés

  if (delai === 6) {
    total *= 1.1;
  } else if (delai === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }
  return total;
};

export { 
    formatArgent,
    calculTotalPayer,
 };
