let pokemonApi = [];

document.querySelector('.loading').innerHTML = `<img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"/>`;
document.querySelector('header').classList.add('hide');

async function pokeSearch() {
  try {
    const response = await fetch('https://api.pokemontcg.io/v2/cards');
    const results = await response.json();
    const pokemonApi = results.data;
    console.log(pokemonApi)

    for (let i = 0; i < pokemonApi.length; i++) {
      if (i === 50) {
        break;
      }
      document.querySelector('main').innerHTML += 
      `
      <div class="pokiCards">
      <h1>${pokemonApi[i].name}</h1>
      <img src="${pokemonApi[i].images.small}"/>
      <p>Rarity: ${pokemonApi[i].rarity}</P>
      <a href="/html/details.html?id=${pokemonApi[i].id}">More Info</a>
      </div>
      `;
    }

    const searchText = document.querySelector('#search');

    searchText.onkeyup = function (event) {
      event.preventDefault();
      console.log(event.target.value);
      let filteredArray = pokemonApi.filter((value) => {
          return value.name.toLowerCase() === event.target.value.toLowerCase();
      });

      console.log(filteredArray)

      if (!event.target.value) {
        pokemonApi.forEach((element) => {
              document.querySelector('main').innerHTML += 
              `
            <div class="pokiCards">
            <h1>${element.name}</h1>
            <img src="${element.images.small}"/>
            <p>Rarity: ${element.rarity}</P>
            <a href="/html/details.html?id=${element.id}">More Info</a>
            </div>
            `;
          });
      }

      document.querySelector('main').innerHTML = '';

      filteredArray.forEach((element) => {
        document.querySelector('header').innerHTML += 
        `
        <p>Please press enter to refresh</p>
        `;

          document.querySelector('main').innerHTML += 
          `
        <div class="pokiCards">
        <h1>${element.name}</h1>
        <img src="${element.images.small}"/>
        <p>Rarity: ${element.rarity}</P>
        <a href="/html/details.html?id=${element.id}">More Info</a>
        </div>
        `;
      });
    };
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
pokeSearch();





// NO SEARCH FUNCTION

// const url = 'https://api.pokemontcg.io/v2/cards/';

// document.querySelector('.loading').innerHTML = `<img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"/>`;
// document.querySelector('header').classList.add('hide');

// async function getPokemon() {
// 	try {
// 		const response = await fetch(url);
// 		const jsonObject = await response.json();
//     const results = jsonObject.data;
//     // const pokiresults = results['1']
// 		console.log(results);

//     for (let i = 0; i < results.length; i++) {
//       if (i === 50) {
//         break;
//       }
//       document.querySelector('main').innerHTML += 
//       `
//       <div class="pokiCards">
//       <h1>${results[i].name}</h1>
//       <img src="${results[i].images.small}"/>
//       <p>Rarity: ${results[i].rarity}</P>
//       <a href="/html/details.html?id=${results[i].id}">More Info</a>
//       </div>
//       `;
//     }
// 	}  catch (error) {
//     document.querySelector('.alert').innerHTML = showAlertToUser (
//       'An error occured please contact Emma the webmaster',
//       'danger'
//     );
//   } finally {
//     setTimeout(function () {
//       document.querySelector('.alert').innerHTML = ``;
//     }, 3000)
//   }
//   document.querySelector('.loading').innerHTML = ``;
//   document.querySelector('header').classList.remove('hide');
// }
// getPokemon();
