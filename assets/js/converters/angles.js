const aIn = id => document.getElementById(id);
document.getElementById('angle-go').onclick = () => {
    let val = parseFloat(aIn('angle-in').value);
    const from = aIn('angle-from').value, to = aIn('angle-to').value;
    if (isNaN(val)) return aIn('angle-out').textContent = 'Entrée invalide';

    let deg;
    switch (from) {
        case 'deg': deg = val; break;
        case 'rad': deg = val * 180 / Math.PI; break;
        case 'grad': deg = val * 0.9; break;
    }

    let out;
    switch (to) {
        case 'deg': out = deg; break;
        case 'rad': out = deg * Math.PI / 180; break;
        case 'grad': out = deg / 0.9; break;
    }
    aIn('angle-out').textContent = 'Résultat : ' + Math.round(out * 100) / 100 + ' ' + to;
}

// Copier
document.getElementById('angle-copy').onclick = () => {
    const text = aIn('angle-out').textContent.replace('Résultat : ', '');
    navigator.clipboard.writeText(text);
}
