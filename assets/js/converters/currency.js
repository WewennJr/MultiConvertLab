const cIn = id => document.getElementById(id);
document.getElementById('cur-go').onclick = () => {
    let val = parseFloat(cIn('cur-in').value);
    const from = cIn('cur-from').value, to = cIn('cur-to').value;
    if (isNaN(val)) return cIn('cur-out').textContent = 'Entrée invalide';

    // Taux approximatifs pour l'exemple
    const rates = { EUR: 1, USD: 1.1, GBP: 0.88, JPY: 150 };
    let eur = val / rates[from];
    let out = eur * rates[to];
    cIn('cur-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

document.getElementById('cur-copy').onclick = () => {
    const text = cIn('cur-out').textContent.replace('Résultat : ', '').trim();
    navigator.clipboard.writeText(text);
}
