const fIn = id => document.getElementById(id);
document.getElementById('frequency-go').onclick = () => {
    let val = parseFloat(fIn('frequency-in').value);
    const from = fIn('frequency-from').value, to = fIn('frequency-to').value;
    if (isNaN(val)) return fIn('frequency-out').textContent = 'Entrée invalide';

    const factors = { Hz: 1, kHz: 1000, MHz: 1e6, BPM: 1 / 60 };
    let hz = val * factors[from];
    let out = hz / factors[to];
    fIn('frequency-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}
document.getElementById('frequency-copy').onclick = () => {
    const text = fIn('frequency-out').textContent.replace('Résultat : ', '');
    navigator.clipboard.writeText(text);
}
