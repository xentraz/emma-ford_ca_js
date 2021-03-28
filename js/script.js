let pokemonApi = [];

document.querySelector('.loading').innerHTML = `<img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"/>`;
// Loading Gif taken from https://dribbble.com/shots/2835314-Pokeball-Animation 
document.querySelector('header').classList.add('hide');
document.querySelector('footer').classList.add('hide');

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
  document.querySelector('footer').classList.remove('hide');
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




// const charityCards = (charityArray) => {
// 	const mainElm = document.querySelector('.charityList');
// 	charityArray.map(({image, link, name, description, number}) => {
// 		mainElm.innerHTML += 
// 		`
// 		<div class="flip flip-card">
//       <div class="card">
//         <div class="charity_card charity_card-front">
// 					<div class="displayCards">
// 						<h2>${name}</h2>
// 						<img src="${image}"/>
// 						<p>${link}</p>
// 					</div>
// 				</div>

//         <div class="charity_card charity_card-back">
// 					<div class="displayCards">
// 						<h2>${name}</h2>
// 						<p>${description}</p>
// 						<p>${link}</p>
// 						<p>Organisation Number: ${number}</p>
// 					</div>
// 				</div>
//       </div>
//     </div>
// 	`;
// 	});
// };

// Card Flip Test 1

// function cardFlipper() {
// 	var flippedCards = document.querySelector('.card');
// 	for (var i = 0; i < flippedCards.length; i++) {
// 		flippedCards[i].addEventListener('click', toggleFlip);
// 	}
// }

// function toggleFlip() {
// 	this.classList.toggle('.is-flipped')
// }

// cardFlipper();

// CardFlip Test 2:

// let card = document.querySelector('.card');
// for (i = 0; i < card; i++) {
// card.addEventListener('click', (event) => {
// 	if (event.target.classList.contains !== '.is-flipped'){
// 		card.classList.add('is-flipped');
// 	} else {
// 		card.classList.remove('is-flipped');
// 	}
// })
// }

// Card Flip Test 3:

// let card = document.querySelector('.card');
// 	card.addEventListener('click', function() {
// 	card.classList.toggle('is-flipped');
// 	});



// const charityCards = (charityArray) => {
// 	const mainElm = document.querySelector('.charity_card-front');
// 	charityArray.map(({image, link, name}) => {
// 		mainElm.innerHTML += `
// 		< class="displayCards">
// 				<h2>${name}</h2>
// 				<img src="${image}"/>
// 				<p>${link}</p>
// 		</>
// 	`;
// 	});
// };

// const charityCards2 = (charityArray) => {
// 	const mainElm = document.querySelector('.charity_card-back');
// 	charityArray.map(({description, link, name, number}) => {
// 		mainElm.innerHTML += `
// 		<div class="displayCards">
// 				<h2>${name}</h2>
// 				<p>${description}</p>
// 				<p>${link}</p>
// 				<p>Organisation Number: ${number}</p>
// 		</div>
// 	`;
// 	});
// };


