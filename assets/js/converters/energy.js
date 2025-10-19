const eIn = id => document.getElementById(id);
document.getElementById('energy-go').onclick = () => {
    let val = parseFloat(eIn('energy-in').value);
    const from = eIn('energy-from').value, to = eIn('energy-to').value;
    if (isNaN(val)) return eIn('energy-out').textContent = 'Entrée invalide';

    const factors = { J: 1, cal: 4.184, kWh: 3.6e6, BTU: 1055.06 };
    let joules = val * factors[from];
    let out = joules / factors[to];
    eIn('energy-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}
document.getElementById('energy-copy').onclick = () => {
    const text = eIn('energy-out').textContent.replace('Résultat : ', '');
    navigator.clipboard.writeText(text);
}
