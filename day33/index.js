const randomRecipeDiv = document.getElementById('random-recipe');
const get = document.getElementById('get');

function getLayout(name, instructions, meal) {
    const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
    }
    
    let ingredientsList = "<ul>" + ingredients.map(i => {
        console.log(i)
        return `<li>${i}</li>`
    }).join('') + "</ul>"
    
    let instructionsParagraphs = instructions.split('\r\n').map(i => {
        return `<p>${i}</p>`
    }).join('')

    return (
        `<h2>${name}</h2>
        <div class="split">
            <div class="recipe">
                ${instructionsParagraphs}
            </div>
            <div class="">
                ${ingredientsList}
            </div>
        </div>
        `
    )
}

get.addEventListener('click', async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const json = await res.json();
    console.log(json)
    const layout = getLayout(json.meals[0]["strMeal"], json.meals[0]["strInstructions"], json.meals[0]);

    randomRecipeDiv.innerHTML = layout
})