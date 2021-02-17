// const resultsContainer = document.querySelector(".results");
const url = 'https://api.pokemontcg.io/v2/cards/';

document.querySelector('.loading').innerHTML = `<img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"/>`;
document.querySelector('header').classList.add('hide');

async function getPokemon() {
	try {
		const response = await fetch(url);
		const jsonObject = await response.json();
    const results = jsonObject.data;
    // const pokiresults = results['1']
		console.log(results);

    for (let i = 0; i < results.length; i++) {
      if (i === 50) {
        break;
      }
      document.querySelector('main').innerHTML += 
      `
      <div class="pokiCards">
      <h1>${results[i].name}</h1>
      <img src="${results[i].images.small}"/>
      <p>Rarity: ${results[i].rarity}</P>
      <a href="/html/details.html?id=${results[i].id}">More Info</a>
      </div>
      `;
    }
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
  document.querySelector('.loading').innerHTML = ``;
  document.querySelector('header').classList.remove('hide');
}
getPokemon();

// Tried Flipping Cards - FAILED

// document.addEventListener('flip', () => {
//   function createCards(pokemon) {
//     const pokemonCard = document.createElement('div');
//     const pokemonCardBack = document.createElement('div');
//     pokemonCard.classList.add('pokemon'); 

//     const pokeInnerHTML = 
//     `
//     <div class="pokeImg">
//     <img src="${results[i].images.small}"/>
//     </div>
//     `;

//     pokemonCard.innerHTML = pokeInnerHTML;

//     pokeContainer.appendChild(pokemonCardBack); 

//     const pokeCardBack = 
//     `
//     <div class="pokiCards">
//     <h1>${results[i].name}</h1>
//     <p>Rarity: ${results[i].rarity}</P>
//     <a href="/html/details.html?id=${results[i].id}">More Info</a>
//     </div>
//     `;

//     pokemonCardBack.innerHTML = pokeCardBack;

//     const back = document.querySelectorAll('.pokemon');

//     function flipCard() {
//       this.classList.toggle('flipped');
//     }
//     back.forEach((card) => card.addEventListener("click", flipCard));
//   }
// });