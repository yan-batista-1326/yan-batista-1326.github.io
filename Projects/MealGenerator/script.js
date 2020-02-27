var mealName;
var mealThumb;
var mealIng;
var mealInstructions;
var howTo;
var category;
var area;
var tags;

var dataArr = [];

window.addEventListener('load', function() {
    mealName = document.getElementById('mealName');
    mealThumb = document.getElementById('mealThumb');
    mealIng = document.getElementById('ingredients');
    mealInstructions = document.getElementById('mealInstructions');
    howTo = document.getElementById('howTo');
    tags = document.getElementById('tags');
    area = document.getElementById('area');
    category = document.getElementById('category');

    generateMeal();
})

function generateMeal() {
    $.getJSON('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', function(data) {
        console.log(data);
        dataArrKeys = Object.keys(data.meals[0]);
        dataArrVal = Object.values(data.meals[0]);

        mealName.innerHTML = data.meals[0].strMeal;
        mealThumb.src = data.meals[0].strMealThumb;
        tags.innerHTML = "Tags: " + data.meals[0].strTags;
        mealInstructions.innerHTML = "Instructions: <br/>" + data.meals[0].strInstructions;
        area.innerHTML = data.meals[0].strArea;
        category.innerHTML = data.meals[0].strCategory;

        mealIng.innerHTML = "Ingredients: <br/>"
        for(var i = dataArrKeys.indexOf("strIngredient1"); i < dataArrKeys.indexOf("strIngredient20"); i++) {
            if(dataArrVal[i] != "" && dataArrVal[i] != null) {
                var strValue = dataArrVal[i].charAt(0).toUpperCase() + dataArrVal[i].slice(1);
                //mealIng.innerHTML += strValue + ': ' + dataArrVal[i + 20] + '<br/> ';

                var ingList = document.createElement('ul');
                var ingItem = document.createElement('li');
                var ingItemText = document.createTextNode(strValue + ': ' + dataArrVal[i + 20]);
                ingItem.appendChild(ingItemText);
                ingList.appendChild(ingItem);
                mealIng.appendChild(ingList);
            }
        }

        howTo.href = data.meals[0].strYoutube;
    })
}