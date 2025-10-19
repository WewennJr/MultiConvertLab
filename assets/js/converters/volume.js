const vIn = id => document.getElementById(id);

document.getElementById('vol-go').onclick = () => {
  let val = parseFloat(vIn('vol-in').value);
  const from = vIn('vol-from').value, to = vIn('vol-to').value;
  if (isNaN(val)) return vIn('vol-out').textContent = 'Entrée invalide';

  const factors = {
    L: 1, m3: 1000, gal: 3.78541, ml: 0.001, cups: 0.24,
    pt: 0.473176, floz: 0.0295735
  };
  let liters = val * factors[from];
  let out = liters / factors[to];
  vIn('vol-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

// Copier uniquement la valeur et l'unité
document.getElementById('vol-copy').onclick = () => {
  const text = vIn('vol-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = vIn('vol-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
