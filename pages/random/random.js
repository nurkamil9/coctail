const rnd = document.querySelector("#rnd")
const btn = document.querySelector("#btn")

const rndomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

function randomFunc() {
    fetch(rndomUrl)
    .then(wer=>wer.json())
    .then(data=>{
        console.log(data.drinks);
        showRandom(data.drinks)
    })
}

function showRandom(randoms) {
    for (const rand of randoms) {
        rnd.innerHTML+=`
        <div  class="card" style="width: 40rem;">
  <img src=${rand.strDrinkThumb} class="card-img-top" alt="...">
  <div class="card-body">
    <a href="#" class="btn btn-primary">${rand.strDrink}</a>
  </div>
  <p>${rand.strInstructionsIT}</p>
</div>

        `
    }
}

btn.onclick=()=>{
    randomFunc()
    rnd.innerHTML=''
}