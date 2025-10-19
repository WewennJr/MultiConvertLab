const aIn = id => document.getElementById(id);
const astroFactors = {
    AU: 149597870.7, // km
    km: 1,
    ly: 9.46073e12,
    pc: 3.0857e13
};
document.getElementById('astro-go').onclick = () => {
    let val = parseFloat(aIn('astro-in').value);
    const from = aIn('astro-from').value, to = aIn('astro-to').value;
    if (isNaN(val)) return aIn('astro-out').textContent = 'Entrée invalide';
    let km = val * astroFactors[from];
    let out = km / astroFactors[to];
    aIn('astro-out').textContent = 'Résultat : ' + out + ' ' + to;
}
document.getElementById('astro-copy').onclick = () => {
    let text = aIn('astro-out').textContent.replace('Résultat : ', '');
    navigator.clipboard.writeText(text);
}
