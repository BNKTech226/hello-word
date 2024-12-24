
const conteneur = document.querySelector('.conteneur');

// Arrête le défilement au survol
conteneur.addEventListener('mouseover', () => {
  conteneur.style.animationPlayState = 'paused';
});

// Reprend le défilement lorsque la souris quitte
conteneur.addEventListener('mouseout', () => {
  conteneur.style.animationPlayState = 'running';
});