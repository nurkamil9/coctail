
let drincID = (function (){
    return localStorage.getItem('id')
})();

console.log(drincID);
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

function detalFunck(DrinkId='1100') {
    fetch(url+DrinkId)
    .then(wer=>wer.json())
    .then(data=>{
        console.log(data.drinks);
        showDetail(data.drinks)
    })
}


detalFunck(drincID)



const detal = document.querySelector("#detal")

function showDetail(det) {
    for (const dtl of det) {
         detal.innerHTML=`
         <div id="cards" class="d-flex" style="width: 40rem;" >
         <div>
         <img width=90% height=90% src = ${dtl.strDrinkThumb} />
         <h1 class="names">${dtl.strDrink}</h1></div>
         <div>
         <h1>Ingredient:</h1>
         <p>1:${dtl.strIngredient1}</p>
         <p>2:${dtl.strIngredient2}</p>
         <p>3:${dtl.strIngredient3}</p>
         <h3>Instructions:</h3>
         <p>${dtl.strInstructions}</p>
         <p>${dtl.strInstructionsDE}</p>
         <p>${dtl.strInstructionsES}</p>
         </div>
         </div>
    
         `
    }
   
}