const tIn = id => document.getElementById(id);

document.getElementById('temp-go').onclick = () => {
  let v = parseFloat(tIn('temp-in').value);
  const from = tIn('temp-from').value, to = tIn('temp-to').value;
  if (isNaN(v)) return tIn('temp-out').textContent = 'Entrée invalide';
  let c = (from === 'C') ? v : (from === 'F') ? (v - 32) * 5 / 9 : v - 273.15;
  let out = (to === 'C') ? c : (to === 'F') ? c * 9 / 5 + 32 : c + 273.15;
  tIn('temp-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

// Copier uniquement la valeur et l'unité
document.getElementById('temp-copy').onclick = () => {
  const text = tIn('temp-out').textContent;
  // On supprime "Résultat : " pour ne garder que la valeur
  const valueOnly = text.replace('Résultat : ', '');
  navigator.clipboard.writeText(valueOnly);
  const btn = tIn('temp-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
