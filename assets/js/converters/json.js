const jIn = id => document.getElementById(id);

document.getElementById('json-pretty').onclick = () => {
  try {
    const obj = JSON.parse(jIn('json-in').value);
    jIn('json-out').textContent = JSON.stringify(obj, null, 2);
  } catch (e) {
    jIn('json-out').textContent = 'Erreur : JSON invalide';
  }
}

document.getElementById('json-validate').onclick = () => {
  try {
    JSON.parse(jIn('json-in').value);
    jIn('json-out').textContent = 'JSON valide !';
  } catch (e) {
    jIn('json-out').textContent = 'JSON invalide';
  }
}

// Copier le contenu du résultat
document.getElementById('json-copy').onclick = () => {
  const text = jIn('json-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = jIn('json-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
