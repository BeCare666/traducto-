function validerSaisie(input) {
  const valeurSaisie = input.value;
  const regexChiffres = /^\d+$/;

  if (!regexChiffres.test(valeurSaisie)) {
    // Effacez la saisie incorrecte
    input.value = input.value.replace(/\D/g, ''); // Remplace tous les caractères non numériques
  } else {
    var payYourUnitybtn = document.getElementById('btnId');
    payYourUnitybtn.disabled = false;
  }
}