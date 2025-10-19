const pIn = id => document.getElementById(id);

document.getElementById('press-go').onclick = () => {
  let val = parseFloat(pIn('press-in').value);
  const from = pIn('press-from').value, to = pIn('press-to').value;
  if (isNaN(val)) return pIn('press-out').textContent = 'Entrée invalide';

  const factors = {
    Pa: 1, kPa: 1000, atm: 101325, bar: 100000, psi: 6894.76, torr: 133.322
  };
  let pascals = val * factors[from];
  let out = pascals / factors[to];
  pIn('press-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

// Copier uniquement la valeur et l'unité
document.getElementById('press-copy').onclick = () => {
  const text = pIn('press-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = pIn('press-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
