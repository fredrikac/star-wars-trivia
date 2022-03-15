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

const pictureUrl = {
  r2d2 : './images/r2d2.jpg',
  leia : './images/leiaorgana.jpg',
  vader : './images/dartvader.jpg',
  yoda : './images/yoda.jpg',
  c3po: './images/c3po.jpg',
  obiwan: './images/obiwan.jpg',
  boba: './images/bobafett.jpg',
  jabba: './images/jabba.jpg'
}

const container = document.querySelector('#characterContainer');
const btn = document.querySelector('#getInfo');

  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('user clicks Get Info')

    let character1 = document.querySelector('#character1');
    let character2 = document.querySelector('#character2');

   
    if(character1.value !== '' && character2.value !== ''){
      fetchCharacters(character1.value, character2.value)
      .then(characters => {
        let first = characters[0];//en array med ett objekt i
        let second = characters[1]; 

        //här behöver jag fortfarande hämta rätt bild-url
        //jag behöver kanske inte skapa upp propertyn pictureUrl via klassen. kanske kan jag lägga till det ba?
        
        first.forEach(prop => {
         let firstCharacter = new Character(prop.name, prop.gender, prop.height, prop.mass, prop.hair_color);

          createCharacterBox(firstCharacter);
        });

        second.forEach(prop =>{
          let secondCharacter = new Character(prop.name, prop.gender, prop.height, prop.mass, prop.hair_color);
          createCharacterBox(secondCharacter);
        })
      })
    }else{
      alert('You must choose two characters!')
    }
})




//Funktion för att skapa boxar med info om respektive karaktär
function createCharacterBox (character){

  let div = document.createElement('div');
  div.classList.add('displayDiv');
  div.innerHTML = `<h3>Name: ${character.name} <br> <img src='${img}'</img>`//det här gav en bildikon! För att jag skapade ett img-element, ja... 
  container.append(div);
}

//hämta rätt bild - tror jag krånglar till det för mkt här... det här körs inte ens, förmodligen pga att propertyn finns i klassen 
function getPic(obj){
  let name = obj.name;

  for(let url in pictureUrl){
    if(url.value === name.value){
      let imgUrl = url.value;
      return imgUrl;
    }
  }
  console.log(imgUrl)


  // for(let url in pictureUrl){
  //   //console.log(`${url}: ${pictureUrl[url]}`)//skriver ut i konsolen
  //   //OM urlen är samma som värdet på character1, spara det i en variabel
  //   if(url.value === name1.value){
  //     let imgUrl = url.value;//första karaktärens bildlänk
  //     return imgUrl;
  //   }
  //   else if(url.value === name2.value){
  //   let secondImg = url.value;//andra karaktärens bildlänk
  //   return secondImg;
  //   }
}



//Börja med G: 1 knapp för att jämföra karaktärer

//Funktion för att skapa en box att skriva ut jämförelsen i






