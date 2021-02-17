// Search Function
let searchUrl = 'https://api.pokemontcg.io/v2/cards?q=name:';
const searchBtn = document.querySelector('.searchBtn')
const searchName = document.querySelector('#search')

document.querySelector('.searchForm').classList.add('hide');
document.querySelector('.loading').innerHTML = `<img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"/>`;
document.querySelector('.logo').classList.add('hide');

searchBtn.onclick = function (event) {
  event.preventDefault();

  const pokemonSearch = searchUrl + searchName.value;
  console.log(pokemonSearch)

  async function pokeSearch() {
    try {
      const response = await fetch(pokemonSearch);
      const jsonObject = await response.json();
      const results = jsonObject.data;
      
      results.forEach((value) => {
        document.querySelector('main').innerHTML += 
        `
        <div class="pokiCards">
        <h2>${value.name}</h2>
        <img src="${value.images.small}"/>
        <p>Rarity: ${value.rarity}</P>
        <a href="/html/details.html?id=${value.id}">More Info</a>
        </div>
        `;
      });
    }  catch (error) {
      document.querySelector('.alert').innerHTML = showAlertToUser (
        'An error occured please contact Emma the webmaster',
        'danger'
      );
    } finally {
      setTimeout(function () {
        document.querySelector('.alert').innerHTML = ``;
      }, 3000)
    }
  }
  pokeSearch(pokemonSearch);
  document.querySelector('.searchForm').classList.remove('hide');
}
