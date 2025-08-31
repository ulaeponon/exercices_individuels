function isCorrect(proposal) {
  return proposal[0] === secretCode[0] && proposal[1] === secretCode[1];
}


function playGame(proposals) {
  let attempts = 0;

  for (let proposal of proposals) {
    attempts++;

    if (!validateProposal(proposal)) {
      console.log("Proposition invalide :", proposal);
      continue; // passe au tour suivant
    }

    if (isCorrect(proposal)) {
      console.log(`Bravo ! Trouvé en ${attempts} essais :`, proposal);
      return true;
    } else {
      console.log(`Essai ${attempts} incorrect :`, proposal);
    }

    if (attempts >= 12) {
      console.log("Dommage ! Vous avez épuisé vos 12 essais.");
      return false;
    }
  }
}
