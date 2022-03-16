// //hämta data från API mha axios
// axios
// .get("https://swapi.dev/api/people", {
// //   params: {//här kan vi hämta specifika parametrar från API!
// //     userId : userIdValue,
// //     id: 124
// //   }
// })
// .then( (response)=> {
//   // handle success
//   console.log(response.data);//får ut objektet. Dubbelkolla detta sen. 
// });


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

      if(this.mass < secondPerson.mass){
        return `${this.name} weighs ${this.mass}, which is less than ${secondPerson.name}, ${secondPerson.mass}`;
      }else if(this.mass === secondPerson.mass){

      }
    }
    compareHeight(){}
    compareHair(){}
    compareGender(){}
}

const container = document.querySelector('#characterContainer');
const btn = document.querySelector('#getInfo');
let firstCharacter;
let secondCharacter;
let imgUrl1;
let imgUrl2; 

let character1 = document.querySelector('#character1');
let character2 = document.querySelector('#character2');

let compareBtn = document.querySelector('#compareBtn');

  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('user clicks Get Info')
    
    //Här vore det nice att ha någon slags animation medan det laddar
    //Behövs också en spärr för att bara kunna jämföra 2 karaktärer, dvs om anv väljer två nya och klickar på Get info ska inte dessa läggas till. location.reload()?

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
       
      })
    }else{
      alert('You must choose two characters!')
    }
    
})

//Funktion för att skapa boxar med info om respektive karaktär
function createCharacterBox (character){
  let div = document.createElement('div');
  div.classList.add('displayDiv');
  div.innerHTML = `<h3>Name: ${character.name} <br> <img src='./images/${character.pictureUrl}.jpg'</img>`;
  container.append(div);
}


//Börja med G: 1 knapp för att jämföra karaktärer
compareBtn.addEventListener('click', ()=>{
  console.log('User clicks compare button');


})


//Funktion för att skapa en box att skriva ut jämförelsen i
function compareCharacterBox(){

}






