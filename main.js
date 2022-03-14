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
let getCharacters = async (character1, character2) => {
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


let onRender = async ()=>{


  let data = await getCharacters('leia', 'yoda');
  console.log(data);//två arrayer med info om karaktärerna

  //de-structure the object
  //let { name, gender, height, mass, hair_color } = data;

}
onRender();




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

    //Metoder för jämförelser -vikt, längt, hårfärg, kön
    compareWeight(){}
    compareHeight(){}
    compareHair(){}
    compareGender(){}
}


const character1 = document.querySelector('#character1').value;
const character2 = document.querySelector('#character2').value;
const btn = document.querySelector('#getInfo');


 //När användaren klickar på knappen vill jag, för varje vald karaktär: 
  //hämta info från API om de specifika karaktärerna
  //Använda den infon för att skapa en instans av klassen character för valda karaktärer
  //Rendera ut divar med Namn, bild och en knapp för valda karaktärer
  btn.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log('user clicks Get Info')

  let testCharacter = new Character(data.name, data.gender, data.height, data.mass, data.hair_color); 
  console.log(testCharacter.name)

  //Det här skriver ut namn och bild 
  let div1 = document.createElement('div');
  div1.classList.add('displayDiv');
  div1.innerHTML = `<h3>Name: ${testCharacter.name} <br> <img src='${pictureUrl.R2D2}'</img>`

  document.body.append(div1)

  // if(character1 !== '' && character2 !== ''){
  //   //Gör nånting
   
  // }else{
  //   alert('You must choose two characters!')
  // }
 
})


//Funktion för att skapa en instans av klassen Character av vald option
//Använda hämtad data, de-structura objektet

//Funktion för att skapa boxar med info om respektive karaktär

//Börja med G: 1 knapp för att jämföra karaktärer

//Funktion för att skapa en box att skriva ut jämförelsen i

//Det som känns svårt: att organisera koden! Vad ska ligga var? 




