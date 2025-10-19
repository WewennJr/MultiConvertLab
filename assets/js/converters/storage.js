const sIn = id => document.getElementById(id);
document.getElementById('storage-go').onclick = () => {
    let val = parseFloat(sIn('storage-in').value);
    const from = sIn('storage-from').value, to = sIn('storage-to').value;
    if (isNaN(val)) return sIn('storage-out').textContent = 'Entrée invalide';

    const factors = { b: 1, B: 8, kB: 8e3, MB: 8e6, GB: 8e9, TB: 8e12 };
    let bits = val * factors[from];
    let out = bits / factors[to];
    sIn('storage-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}
document.getElementById('storage-copy').onclick = () => {
    const text = sIn('storage-out').textContent.replace('Résultat : ', '');
    navigator.clipboard.writeText(text);
}
