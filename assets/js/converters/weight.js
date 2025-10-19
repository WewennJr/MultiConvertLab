const wIn = id => document.getElementById(id);

document.getElementById('weight-go').onclick = () => {
  let val = parseFloat(wIn('weight-in').value);
  const from = wIn('weight-from').value, to = wIn('weight-to').value;
  if (isNaN(val)) return wIn('weight-out').textContent = 'Entrée invalide';

  const factors = { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495, mg: 0.000001, t: 1000 };
  let kg = val * factors[from];
  let out = kg / factors[to];
  wIn('weight-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

// Copier uniquement la valeur et l'unité
document.getElementById('weight-copy').onclick = () => {
  const text = wIn('weight-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = wIn('weight-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
