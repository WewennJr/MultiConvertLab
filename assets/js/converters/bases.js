const bIn = id => document.getElementById(id);

document.getElementById('base-go').onclick = () => {
  const val = bIn('base-in').value.trim();
  const from = parseInt(bIn('base-from').value, 10);
  const to = parseInt(bIn('base-to').value, 10);
  try {
    const dec = parseInt(val, from);
    if (isNaN(dec)) throw new Error('invalid');
    let out = dec.toString(to);
    if (to === 16) out = out.toUpperCase();
    bIn('base-out').textContent = 'Résultat : ' + out;
  } catch (e) {
    bIn('base-out').textContent = 'Erreur : entrée incompatible avec la base';
  }
}

// Copier uniquement le résultat
document.getElementById('base-copy').onclick = () => {
  const text = bIn('base-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = bIn('base-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
