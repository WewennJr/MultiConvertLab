const tInp = id => document.getElementById(id);
const tsInput = tInp('ts-in');
const dateInput = tInp('ts-date');
const typeSelect = tInp('ts-type');

// Activer/désactiver les champs selon le type
typeSelect.onchange = () => {
  if (typeSelect.value === 'toDate') {
    tsInput.disabled = false;
    dateInput.disabled = true;
    dateInput.value = '';
  } else {
    tsInput.disabled = true;
    dateInput.disabled = false;
    tsInput.value = '';
  }
}

// Conversion
document.getElementById('ts-go').onclick = () => {
  try {
    let out = '';
    if (typeSelect.value === 'toDate') {
      let ts = parseInt(tsInput.value);
      if (isNaN(ts)) throw "Invalid";
      out = new Date(ts * 1000).toLocaleString();
    } else {
      let d = new Date(dateInput.value);
      if (isNaN(d)) throw "Invalid";
      out = Math.floor(d.getTime() / 1000);
    }
    tInp('ts-out').textContent = 'Résultat : ' + out;
  } catch (e) { tInp('ts-out').textContent = 'Entrée invalide'; }
}

// Copier
document.getElementById('ts-copy').onclick = () => {
  const text = tInp('ts-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = tInp('ts-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
