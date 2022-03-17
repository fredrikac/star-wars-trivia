
//Fetcha specifik info från API:et
let fetchCharacters = async (character1, character2) => {
  let response1 = await fetch(`https://swapi.dev/api/people/?search=${character1}`);
  let response2 = await fetch(`https://swapi.dev/api/people/?search=${character2}`);

  if (!response1.ok || !response2.ok) {
    throw new Error(`HTTP error! status: ${response1.status} & ${response2.status}`);
  } else {
    let firstCharacter = await response1.json();
    let secondCharacter = await response2.json();
    let characters = [firstCharacter.results, secondCharacter.results];
    return characters;
  }
}



const container = document.querySelector('#characterContainer');
const infoContainer = document.querySelector('#infoContainer');
const btn = document.querySelector('#getInfo');
let firstCharacter;
let secondCharacter;
let imgUrl1;
let imgUrl2; 

let character1 = document.querySelector('#character1');
let character2 = document.querySelector('#character2');

//En klass kallad Character med name, gender, height, mass,hairColor samt pictureUrl
class Character {
    constructor(name, gender, height, mass, hair_color, pictureUrl){
      this.name = name;
      this.gender = gender;
      this.height = height;
      this.mass = mass;
      this.hair_color = hair_color;
      this.pictureUrl = pictureUrl;
    }

  //FORTSÄTT HÄR
  //Metoder för jämförelser -vikt, längt, hårfärg, kön
    compareMass(secondPerson){
      console.log('calling the compareMass function')
      let compareText = document.createElement('p');

      //börja med att konsollogga jämförelsen. 
      if((parseFloat(this.mass) < (parseFloat(secondPerson.mass)))){
        console.log('second character is heaviest')

        compareText.innerText = `${secondPerson.name} is heavier than ${this.name}.`
        document.body.append(compareText) 

      }else{
        console.log('first character is heavier')
        compareText.innerText = `${this.name} is heavier than ${secondPerson.name}.`
        document.body.append(compareText) 
      }
    }

    compareHeight(secondPerson){
      let compareHeight = document.createElement('p');

      console.log('calling the compare height function')
      if((parseFloat(this.height) < (parseFloat(secondPerson.height)))){
        console.log('second character is taller')
        compareHeight.innerText = `${secondPerson.name} is taller than ${this.name}.`
        document.body.append(compareHeight) 
      }else{
        console.log('first character is taller')
        compareHeight.innerText = `${this.name} is taller than ${secondPerson.name}.`
        document.body.append(compareHeight) 
      }
    }

    compareHair(secondPerson){
      if(this.hair_color === secondPerson.hair_color){
        console.log('They have the same hair color')
      }else{
        console.log(`First characters hair color is: ${this.hair_color}, 
        second characters hair color is: ${secondPerson.hair_color}`)
      }
    }

    compareGender(secondPerson){
      if(this.gender === secondPerson.gender){
        console.log(`they are the same gender, that is: ${this.gender}`)
      }else{
        console.log(`First characters is a: ${this.gender}, 
        second characters is a: ${secondPerson.gender}`)
      }
    }

}



let compareBtn = document.querySelector('#compareBtn');
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('user clicks Get Info')
    
    //Här vore det nice att ha någon slags animation medan det laddar

    imgUrl1 = character1.value;
    imgUrl2 = character2.value;

    if(character1.value !== '' && character2.value !== ''){
      fetchCharacters(character1.value, character2.value)
      .then(characters => {
        let first = characters[0];
        let second = characters[1]; 
        
        first.forEach(prop => {
         firstCharacter = new Character(prop.name, prop.gender, prop.height, prop.mass, prop.hair_color, imgUrl1);
          createCharacterBox(firstCharacter);
        });

        second.forEach(prop =>{
          secondCharacter = new Character(prop.name, prop.gender, prop.height, prop.mass, prop.hair_color, imgUrl2);
          createCharacterBox(secondCharacter);
          
        })
      }).then(()=>{
        compareBtn.classList.remove('hidden');
        document.getElementById('getInfo').disabled = true;//detta gör att man inte kan hämta fler än 2. Borde gå att göra snyggare?
        character1.value = '';
        character2.value = '';
      })
    }else{
      alert('You must choose two characters!')
    }
    
})



//Funktion för att skapa boxar med info om respektive karaktär
function createCharacterBox (character){
  let div = document.createElement('div');
  div.classList.add('displayDiv');
  div.innerHTML = `<h3>Name: ${character.name} <br> <img src='./images/${character.pictureUrl}.jpg' alt='picture of ${character.name}'</img>`;
  container.append(div);
}

   //Börja med G: 1 knapp för att jämföra karaktärer
   compareBtn.addEventListener('click', ()=>{
    console.log('User clicks compare button');

    characterInfoBox(firstCharacter);
    characterInfoBox(secondCharacter);
    firstCharacter.compareMass(secondCharacter);
    firstCharacter.compareHeight(secondCharacter);
    firstCharacter.compareHair(secondCharacter)
    firstCharacter.compareGender(secondCharacter)
  })



//Funktion för att skapa en box att skriva ut info om karaktärerna
function characterInfoBox(character){
  let infoDiv = document.createElement('div');
  infoDiv.classList.add('infoDiv');

  infoDiv.innerHTML = `<h2>${character.name}</h2> <ul><li>Height: ${character.height}</li><li>Weight: ${character.mass}</li>
  <li>Gender: ${character.gender}</li><li>Hair color: ${character.hair_color}</li></ul>`
  infoContainer.append(infoDiv);

  compareBtn.classList.add('hidden');
}






//Skapa en box att skriva ut jämförelsen i
//Lägg till: reset knapp
//ändra innertext på getInfo till Reset och kör en location reload? 

//Börja med VG-kraven
//Justera styling så det ser fint ut





