const cIn = id => document.getElementById(id);
const picker = cIn('color-picker');

function rgbToHex(r, g, b) { return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase(); }
function hexToRgb(hex) { let m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex); return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : null; }
function rgbToHsl(r, g, b) { r /= 255; g /= 255; b /= 255; let max = Math.max(r, g, b), min = Math.min(r, g, b), h = 0, s = 0, l = (max + min) / 2; if (max !== min) { let d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min); switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break; }h /= 6; s = Math.round(s * 100); } return { h: Math.round(h * 360), s: s, l: Math.round(l * 100) }; }

picker.oninput = () => { cIn('color-in').value = picker.value.toUpperCase(); }

document.getElementById('color-go').onclick = () => {
  const val = cIn('color-in').value.trim();
  const to = cIn('color-to').value;
  try {
    let result = '';
    if (to === 'hex') {
      if (val.startsWith('#')) result = val.toUpperCase();
      else {
        let m = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(val);
        if (!m) throw "Invalid"; result = rgbToHex(+m[1], +m[2], +m[3]);
      }
    } else if (to === 'rgb') {
      if (val.startsWith('#')) {
        let c = hexToRgb(val); if (!c) throw "Invalid"; result = `rgb(${c.r},${c.g},${c.b})`;
      } else result = val;
    } else if (to === 'hsl') {
      let c = null;
      if (val.startsWith('#')) c = hexToRgb(val);
      else { let m = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(val); if (!m) throw "Invalid"; c = { r: +m[1], g: +m[2], b: +m[3] }; }
      let hsl = rgbToHsl(c.r, c.g, c.b);
      result = `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;
    }
    cIn('color-out').textContent = 'Résultat : ' + result;
  } catch (e) { cIn('color-out').textContent = 'Entrée invalide'; }
}

// Copier le résultat
document.getElementById('color-copy').onclick = () => {
  const text = cIn('color-out').textContent.replace('Résultat : ', '');
  navigator.clipboard.writeText(text);
  const btn = cIn('color-copy');
  btn.textContent = "Copié !";
  setTimeout(() => btn.textContent = "Copier", 1500);
}
