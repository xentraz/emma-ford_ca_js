const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get('id'); 

const url = 'https://api.pokemontcg.io/v2/cards/' + id;

document.querySelector('.loading').innerHTML = `<img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"/>`;
document.querySelector('header').classList.add('hide');
document.querySelector('.detailsInfo').classList.add('hide');


async function getPokemon() {
	try {
		const response = await fetch(url);
    const details = await response.json();
    const pokiResults = details.data;
    console.log(pokiResults);
   
    document.title = `${pokiResults.name}`;
    
    document.querySelector('.pokeName').innerHTML = 
    `
    <h1>${pokiResults.name}</h1>
    `;
    document.querySelector('.pokeImg').innerHTML = 
    `
    <img src="${pokiResults.images.small}"/>
    `;
    document.querySelector('.info').innerHTML = 
    `
    <p>Artist: ${pokiResults.artist}</p>
    <p>HP: ${pokiResults.hp}</p>
    <p class ="level">Level: ${pokiResults.level}</p>
    <p>Rarity: ${pokiResults.rarity}</p>
    `;

    if (pokiResults.level === undefined) {
      document.querySelector('.level').innerHTML = `<p>Level: Unknown</p>`;
    }

    const attacks = pokiResults.attacks; 
    for (let i = 0; i < attacks.length; i++) {
      document.querySelector('.attacks').innerHTML += 
      `
      <div class=attacks">
      <p><span>Attack Name:</span> ${attacks[i].name}</p>
      <p><span>Attack Damage:</span> ${attacks[i].damage}</p>
      <p>Info: ${attacks[i].text}</p>
      </div>
      `;
    }

    document.querySelector('.setInfo').innerHTML = 
    `
    <p><span>Set Name: </span>${pokiResults.set.name}</p>
    <p><span>Set Total: </span>${pokiResults.set.total}</p>
    <p><span>Release Date: </span>${pokiResults.set.releaseDate}</p>
    <img src="${pokiResults.set.images.logo}"/>
    `;

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
  document.querySelector('.detailsInfo').classList.remove('hide');
}
getPokemon();
