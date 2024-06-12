// Définir une variable pour stocker les produits ajoutés au panier
let cartItems = [];

// Sélectionner tous les boutons "Acheter"
const addToCartButtons = document.querySelectorAll('.Acheter');

// Ajouter un gestionnaire d'événement clic à chaque bouton
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtenir les détails du produit
        const parentItem = button.closest('.catalog-item');
        const product = {
            name: parentItem.querySelector('p:first-child').textContent,
            price: parseFloat(parentItem.querySelector('p:nth-child(3)').textContent.split(':')[1].trim()),
            // Ajoutez d'autres détails si nécessaire
        };
        
        // Ajouter le produit au panier
        cartItems.push(product);

        // Mettre à jour l'affichage du panier ou effectuer d'autres actions
        console.log('Produit ajouté au panier :', product);
    });
});
