const hIn = id => document.getElementById(id);

document.getElementById('hash-go').onclick = async () => {
  const text = hIn('hash-in').value;
  const type = hIn('hash-type').value;

  if (type === 'MD5') {
    if (!window.CryptoJS) { alert('Il faut ajouter CryptoJS pour MD5'); return; }
    hIn('hash-out').textContent = 'Résultat : ' + CryptoJS.MD5(text);
  }
  else if (type === 'Base64-Encode') {
    hIn('hash-out').textContent = 'Résultat : ' + btoa(text);
  }
  else if (type === 'Base64-Decode') {
    try {
      hIn('hash-out').textContent = 'Résultat : ' + atob(text);
    } catch (e) {
      hIn('hash-out').textContent = 'Erreur : entrée non valide pour Base64';
    }
  }
  else {
    const algo = (type === 'SHA1') ? 'SHA-1' : 'SHA-256';
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(algo, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    hIn('hash-out').textContent = 'Résultat : ' + hashHex;
  }
}

// Copier uniquement le résultat
document.getElementById('hash-copy').onclick = () => {
  const text = hIn('hash-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = hIn('hash-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
