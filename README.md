# MultiConvertLab

ConvertLab est un site de conversions complet et statique, créé pour faciliter la conversion de différentes unités et données.  
Il est conçu pour être moderne, responsive et attractif, avec des animations simples et des explications pour chaque type de conversion.

## Fonctionnalités

- **Température** : Celsius, Fahrenheit, Kelvin
- **Distance** : mètres, kilomètres, miles, etc.
- **Volume** : litres, millilitres, gallons, etc.
- **Pression** : Pa, bar, atm
- **Vitesse** : m/s, km/h, mph
- **Masse / Poids** : kg, g, lb, oz
- **Bases numériques** : binaire, base 4, octal, décimal, base 12, hexadécimal
- **JSON** : formatage et validation
- **Hash** : MD5, SHA1, SHA256 (côté client)
- **Couleurs** : HEX ↔ RGB ↔ HSL
- **Timestamp** : conversion timestamp ↔ date lisible

## Organisation du projet

MultiConvertLab/
│
├─ index.html
├─ README.md
├─ LICENSE
├─ assets/
│ ├─ css/
│ │ └─ style.css
│ ├─ js/
│ │ ├─ main.js
│ │ └─ converters/
│ │ ├─ temperature.js
│ │ ├─ distance.js
│ │ ├─ volume.js
│ │ ├─ pressure.js
│ │ ├─ speed.js
│ │ ├─ weight.js
│ │ ├─ bases.js
│ │ ├─ json.js
│ │ ├─ hash.js
│ │ ├─ colors.js
│ │ └─ timestamp.js
│
├─ converters/
│ ├─ temperature.html
│ ├─ distance.html
│ ├─ volume.html
│ ├─ pressure.html
│ ├─ speed.html
│ ├─ weight.html
│ ├─ bases.html
│ ├─ json.html
│ ├─ hash.html
│ ├─ colors.html
│ └─ timestamp.html
└─ assets/

## Déploiement

Le site est **statique**, vous pouvez le déployer facilement sur **GitHub Pages** ou tout autre hébergement de fichiers statiques.  
Il n’y a pas de serveur requis.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.