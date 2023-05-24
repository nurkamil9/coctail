const input = document.querySelector("input")
const values = document.querySelector("#values")
const btnRand = document.querySelector("#btnRand")

const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

function cocktail(nameCoctail="margarita") {
    fetch(urlCocktail+nameCoctail)
    .then(wer=>wer.json())
    .then(data=>{
        console.log(data.drinks);
        showCocktails(data.drinks)
    })
}

function showCocktails(difference) {
    values.innerHTML=''
    for (const pere of difference) {
        values.innerHTML+=`
        <div class="card" style="width:200px;">
    <img width=100% src=${pere.strDrinkThumb} class="card-img-top" alt="...">
  <div class="card-body">
    <a href="#" class="btn btn-primary">${pere.strDrink}</a>
  </div>
</div>
        `
    }
}
input.onchange=()=>{
    cocktail(input.value)
    input.value=''
}


