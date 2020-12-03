"use strict"   
let myText = document.getElementById('myText');
let myImage = document.getElementById('myImage');
let myButton = document.getElementById('myButton');
let myReset = document.getElementById('myReset');
let naam = document.getElementById('naamchange');
let myNaam = document.getElementById('naamGoed');

myButton.addEventListener('click', function(){
    main();
})

myReset.addEventListener('click', function(){
    /* hier komt jouw code */
    myImage.src = "https://www.ma-web.nl/static/vector/Logo_blok.svg";
    myText.innerHTML = "......";
})

myNaam.addEventListener('click', function(){
    /* hier komt jouw code */
    naam.innerHTML = "Sam Derakhshandeh";
})

function main(){
     let dezeTextWordtHet = makeThisSentence();
     myText.innerHTML = dezeTextWordtHet;
     sayItLoud(dezeTextWordtHet); // say something nice say it loud
     selectThisImage(); // show a nice image
}



function randomizer(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}


function makeThisSentence(){
    let index1 = randomizer(arrayLength);
    let index2 = randomizer(arrayLength);
    let index3 = randomizer(arrayLength);
    let woord1 = onderwerp[index1];
    let woord2 = werkwoord[index2];
    let woord3 = restwoord[index3];
    let outputString = woord1 + " " + woord2 + " " + woord3;
    return outputString;
}

function selectThisImage(){
    let index = randomizer(arrayLength);
    myImage.src = plaatjes[index]; 
}

function sayItLoud (textString) {
  let message = new SpeechSynthesisUtterance(textString);
  let voices = window.speechSynthesis.getVoices();
  message.voice = voices[1];
  let index1 = randomizer(1);
  let index2 = randomizer(3);
  message.pitch = index1; // range between 0 and 2
  message.rate = index2; // range between 0.1 (lowest) and 10 (highest) 
  window.speechSynthesis.speak(message);

}






const onderwerp = ["Sir Alex Ferguson", "Mourinho", "Guardiola"];
const werkwoord = ["coaches", "walks", "adopted"];
const restwoord = ["terribly", "a lot", "his son."];
    
let plaatjes = ["https://static.vecteezy.com/system/resources/previews/001/206/768/non_2x/music-headphone-png.png",
 "https://simpleicon.com/wp-content/uploads/voice.png",
 "https://lh3.googleusercontent.com/proxy/vA_UcWtMP7G47Y5JwCzAF9C5GZr0GVVLt9gdzi9NBsvIomIloKliBzWrHJCaRUMlxaLDg0JvtTgHkh18MdjLs5AM", 
 "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fmicrophone-vector-icon-on-transparent-background-microphone-icon-gm1013495966-272897972&psig=AOvVaw2Hg6koSjMF4AGTidmZIGvM&ust=1607084091617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDUtfjkse0CFQAAAAAdAAAAABAO"]
let arrayLength = onderwerp.length;