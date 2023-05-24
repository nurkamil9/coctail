const root = document.querySelector("#root")


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

function render() {
    fetch(url)
    .then(wer=>wer.json())
    .then(data=>{
        console.log(data.drinks);
        show(data.drinks)
    })
}
render()

function show(drinc) {
    for (const item of drinc) {
        root.innerHTML+=`
        <div id='cards' class="card" style="width: 250px;">
  <img class='img' src=${item.strDrinkThumb} class="card-img-top" alt="...">
  <div class="card-body">
    
    <a onclick="get(${item.idDrink})" href="./pages/detail/detail.html" class="btn btn-primary">${item.strDrink}</a>
  </div>
</div>
        `
    }
}

function get(drinkID) {
 
    localStorage.setItem( 'id' , drinkID)

}
