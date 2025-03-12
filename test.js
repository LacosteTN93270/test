/**
 * Fonction pour afficher une image et un texte dans un conteneur de 500px
 * @param {string} imageUrl - URL de l'image à afficher
 * @param {string} texte - Texte à afficher sous l'image
 * @param {string} containerId - ID de l'élément HTML où insérer le contenu (optionnel)
 */
function afficherImageEtTexte(imageUrl, texte, containerId = 'contenu') {
  // Création du conteneur principal s'il n'existe pas déjà
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);
  }

  // Définition du style du conteneur
  container.style.width = '500px';
  container.style.margin = '0 auto';
  container.style.fontFamily = 'Arial, sans-serif';
  container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
  container.style.borderRadius = '5px';
  container.style.overflow = 'hidden';

  // Création et ajout de l'image
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Image';
  img.style.width = '100%';
  img.style.display = 'block';
  container.appendChild(img);

  // Création et ajout du texte
  const para = document.createElement('p');
  para.textContent = texte;
  para.style.padding = '15px';
  para.style.margin = '0';
  para.style.lineHeight = '1.5';
  container.appendChild(para);

  return container; // Retourne le conteneur pour permettre d'autres manipulations
}

// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', function() {
  afficherImageEtTexte(
    'https://e7.pngegg.com/pngimages/903/548/png-clipart-kebab-kebab-thumbnail.png', 
    'test.'
  );
});
