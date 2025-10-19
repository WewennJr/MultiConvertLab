const dIn = id => document.getElementById(id);

document.getElementById('dist-go').onclick = () => {
  let val = parseFloat(dIn('dist-in').value);
  const from = dIn('dist-from').value, to = dIn('dist-to').value;
  if (isNaN(val)) return dIn('dist-out').textContent = 'Entrée invalide';

  const factors = {
    m: 1, km: 1000, mi: 1609.34, ft: 0.3048,
    cm: 0.01, mm: 0.001, yd: 0.9144
  };
  let meters = val * factors[from];
  let out = meters / factors[to];
  dIn('dist-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

// Copier uniquement la valeur et l'unité
document.getElementById('dist-copy').onclick = () => {
  const text = dIn('dist-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = dIn('dist-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
