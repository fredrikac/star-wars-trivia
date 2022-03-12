//hämta data från API mha axios
axios
.get("https://swapi.dev/api/people", {
//   params: {//här kan vi hämta specifika parametrar från API!
//     userId : userIdValue,
//     id: 124
//   }
})
.then( (response)=> {
  // handle success
  console.log(response.data);//får ut objektet. Dubbelkolla detta sen. 
});


//En klass kallad Character med name, gender, height, mass,hairColor samt pictureUrl
class Character {
    constructor(name, gender, height, mass, hairColor, pictureUrl){

    }

    //Metoder för jämförelser -vikt, längt, hårfärg, kön
    compareWeight(){}
    compareHeight(){}
    compareHair(){}
    compareGender(){}
}

//Spara bildlänkar i ett objekt

//Funktion för att skapa boxar med info om respektive karaktär

//Börja med G: 1 knapp för att jämföra karaktärer

//Funktion för att skapa en box att skriva ut jämförelsen i
