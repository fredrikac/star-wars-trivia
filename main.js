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

    //Metoder för jämförelser -vikt, längt, hårfärg, kön
    compareWeight(){}
    compareHeight(){}
    compareHair(){}
    compareGender(){}
}

const pictureUrl = {
  R2D2 : 'images/r2d2.jpg',
  leia : 'images/leiaorgana.jpg',
  darth : 'images/dartvader.jpg',
  yoda : 'images/yoda.jpg',
  c3po: 'images/c3po.jpg',
  obiwan: 'images/obiwan.jpg',
  boba: 'images/bobafett.jpg',
  jabba: 'images/jabba.jpg'
}

const container = document.querySelector('#characterContainer');
const btn = document.querySelector('#getInfo');

  //När användaren klickar på knappen vill jag, för varje vald karaktär: 
  //hämta info från API om de specifika karaktärerna
  //Använda den infon för att skapa en instans av klassen character för valda karaktärer
  //Rendera ut divar med namn, bild och knapp för valda karaktärer
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('user clicks Get Info')

    const character1 = document.querySelector('#character1');
    const character2 = document.querySelector('#character2');

    if(character1.value !== '' && character2.value !== ''){
      fetchCharacters(character1.value, character2.value)
      .then(characters => {
        characters.forEach(character =>{
          character.forEach(obj =>{
            //blir detta bra verkligen? hur gör jag sen när jag ska jämföra de båda?
            //här vill jag också få in pictureUrl. Hur gör jag det bäst?
            let { name, gender, height, mass, hair_color } = obj;
            let newChar = new Character(obj.name, obj.gender, obj.height, obj.mass, obj.hair_color)
            console.log(newChar)

              //skapar en div med namn (och snart bild)
              let div = document.createElement('div');
              div.classList.add('displayDiv');
              div.innerHTML = `<h3>Name: ${newChar.name} <br> ` /*<img src='${newChar.pictureUrl}'</img>*/
              container.append(div);

          })
        })      
      })
    }else{
      alert('You must choose two characters!')
    }
})


//Funktion för att skapa en instans av klassen Character av vald option
//Använda hämtad data, de-structura objektet

//Funktion för att skapa boxar med info om respektive karaktär

//Börja med G: 1 knapp för att jämföra karaktärer

//Funktion för att skapa en box att skriva ut jämförelsen i

//Det som känns svårt: att organisera koden! Vad ska ligga var? 




