const sIn = id => document.getElementById(id);

document.getElementById('speed-go').onclick = () => {
  let val = parseFloat(sIn('speed-in').value);
  const from = sIn('speed-from').value, to = sIn('speed-to').value;
  if (isNaN(val)) return sIn('speed-out').textContent = 'Entrée invalide';

  const factors = { "m/s": 1, "km/h": 0.277778, "mph": 0.44704, "ft/s": 0.3048, "kn": 0.514444 };
  let mps = val * factors[from];
  let out = mps / factors[to];
  sIn('speed-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

// Copier uniquement la valeur et l'unité
document.getElementById('speed-copy').onclick = () => {
  const text = sIn('speed-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = sIn('speed-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
