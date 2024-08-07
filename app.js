document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const drink = data.drinks[0];
            const cocktailContainer = document.getElementById('cocktailContainer');
            cocktailContainer.innerHTML = `
                <h2>${drink.strDrink}</h2>
                <p><strong>Categoría:</strong> ${drink.strCategory}</p>
                <p><strong>Tipo:</strong> ${drink.strAlcoholic}</p>
                <p><strong>Vaso:</strong> ${drink.strGlass}</p>
                <p><strong>Instrucciones:</strong> ${drink.strInstructions}</p>
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <h3>Ingredientes:</h3>
                <ul>
                    ${getIngredients(drink).map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function getIngredients(drink) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = drink[`strIngredient${i}`];
        if (ingredient) {
            ingredients.push(ingredient);
        }
    }
    return ingredients;
}