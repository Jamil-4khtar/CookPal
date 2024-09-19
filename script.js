let grid = document.querySelector(".recipe-grid");
let searchBar = document.getElementById('searchBar');
let veg = document.querySelector(".veg");
let nonVeg = document.querySelector(".non-veg");
let all = document.querySelector(".all");
let above = document.getElementById("above")
let below = document.getElementById("below")

let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

let recipes;
function showRecipes(recipes = arr) {
    grid.innerHTML = ""
    recipes.forEach(recipe => {
        let card = document.createElement("div");
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.time} - ${recipe.type}</p>
            <p>Rating: ${recipe.rating}</p>
        `;
        grid.append(card);
        let like = document.createElement("img");
        like.src = "./img/like.svg"
        like.className = `like-button ${recipe.isLiked ? 'liked' : ''}`;
        like.addEventListener("click", () => {
            toggleLike(recipe.name)
        });

        card.append(like)

    });
}
function toggleLike(recipeName) {
    const recipe = arr.find(r => r.name === recipeName);
    console.log(recipe);

    recipe.isLiked = !recipe.isLiked;
    showRecipes(); // Re-render recipes to update like state
}

searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    recipes = arr.filter(recipe => recipe.name.toLowerCase().includes(query));
    showRecipes(recipes);
});

veg.addEventListener('click', () => {
    recipes = arr.filter(recipe => recipe.type === 'veg');
    showRecipes(recipes);
});

nonVeg.addEventListener('click', () => {
    recipes = arr.filter(recipe => recipe.type === 'non-veg');
    showRecipes(recipes);
});

all.addEventListener("click", () => {
    showRecipes();
});



above.addEventListener('change', () => {
    recipes = arr.filter(recipe => recipe.rating >= 4);
    showRecipes(recipes);
});
below.addEventListener('change', () => {
    recipes = arr.filter(recipe => recipe.rating < 4.0);
    showRecipes(recipes);
});

showRecipes();