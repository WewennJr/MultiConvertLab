const tIn = id => document.getElementById(id);
document.getElementById('travel-go').onclick = () => {
    let dist = parseFloat(tIn('travel-dist').value);
    let speed = parseFloat(tIn('travel-speed').value);
    if (isNaN(dist) || isNaN(speed) || speed <= 0) return tIn('travel-out').textContent = 'Entrée invalide';
    let time = dist / speed;
    tIn('travel-out').textContent = 'Résultat : ' + Math.round(time * 60) + ' minutes';
}
document.getElementById('travel-copy').onclick = () => {
    let text = tIn('travel-out').textContent.replace('Résultat : ', '');
    navigator.clipboard.writeText(text);
}
