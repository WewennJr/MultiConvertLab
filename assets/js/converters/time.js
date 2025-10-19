const tIn = id => document.getElementById(id);
document.getElementById('time-go').onclick = () => {
    let val = parseFloat(tIn('time-in').value);
    const from = tIn('time-from').value, to = tIn('time-to').value;
    if (isNaN(val)) return tIn('time-out').textContent = 'Entrée invalide';

    const factors = { s: 1, min: 60, h: 3600, day: 86400, week: 604800 };
    let seconds = val * factors[from];
    let out = seconds / factors[to];
    tIn('time-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}
document.getElementById('time-copy').onclick = () => {
    const text = tIn('time-out').textContent.replace('Résultat : ', '');
    navigator.clipboard.writeText(text);
}
