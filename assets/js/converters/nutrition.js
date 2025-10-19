const nIn = id => document.getElementById(id);
document.getElementById('nut-go').onclick = () => {
    let val = parseFloat(nIn('nut-in').value);
    const from = nIn('nut-from').value, to = nIn('nut-to').value;
    if (isNaN(val)) return nIn('nut-out').textContent = 'Entrée invalide';

    let out = from === 'kcal' ? val * 4.184 : val / 4.184;
    nIn('nut-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

document.getElementById('nut-copy').onclick = () => {
    const text = nIn('nut-out').textContent.replace('Résultat : ', '').trim();
    navigator.clipboard.writeText(text);
}
