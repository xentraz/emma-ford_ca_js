const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get('id'); 

const url = 'https://api.pokemontcg.io/v2/cards/' + id;

console.log(id); 

async function getPokemon() {
	try {
		const response = await fetch(url);
    const details = await response.json();
    const pokiResults = details.data;
    console.log(pokiResults);
   
    document.title = `${pokiResults.name}`;

    document.querySelector('h1').innerHTML = `${pokiResults.name}`;
    document.querySelector('.img').innerHTML = `<img src="${pokiResults.images.small}"/>`;
    
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
      <p>Attack Name: ${attacks[i].name}</p>
      <p>Attack Damage: ${attacks[i].damage}</p>
      <p>Info: ${attacks[i].text}</p>
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
}
getPokemon();
