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


// async function getPokemon() {
//     const response = await fetch(pokeUrl);
//     const results = await response.json();
//     pokemonApi = results.data;
//     pokemonApi.forEach((element) => {
//         document.querySelector('main').innerHTML += 
//         `
//         <div class="pokiCards">
//         <h2>${element.name}</h2>
//         <img src="${element.images.small}"/>
//         <p>Rarity: ${element.rarity}</P>
//         </div>
//         `;
//     });
// }


// Search Function
// let searchUrl = 'https://api.pokemontcg.io/v2/cards?q=name:';
// const searchBtn = document.querySelector('.searchBtn')
// const searchName = document.querySelector('#search')

// async function pokeSearch() {
//   try {
//     const response = await fetch(pokemonSearch);
//     const jsonObject = await response.json();
//     const results = jsonObject.data;
    
//     results.forEach((value) => {
//       document.querySelector('main').innerHTML += 
//       `
//       <div class="pokiCards">
//       <h2>${value.name}</h2>
//       <img src="${value.images.small}"/>
//       <p>Rarity: ${value.rarity}</P>
//       <a href="/html/details.html?id=${value.id}">More Info</a>
//       </div>
//       `;
//     });
//   }  catch (error) {
//     document.querySelector('.alert').innerHTML = showAlertToUser (
//       'An error occured please contact Emma the webmaster',
//       'danger'
//     );
//   } finally {
//     setTimeout(function () {
//       document.querySelector('.alert').innerHTML = ``;
//     }, 3000)
//   }
// }

// searchBtn.onclick = function (event) {
//   event.preventDefault();

//   const pokemonSearch = searchUrl + searchName.value;
//   console.log(pokemonSearch)

//   pokeSearch(pokemonSearch);
// }


