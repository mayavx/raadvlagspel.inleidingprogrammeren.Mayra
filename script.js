// Constanten - verwijzing naar html elementen
const vlagVanPolen = 'Polen';
const vlagVanIndia = 'India';
const vlagVanSpanje = 'Spanje';
const vlagVanColombia = 'Colombia';
const vlagVanPortugal = 'Portugal';

//Variabelen
let invoerVeld = document.getElementById("invoerVeld");
let invoerVeld2 = document.getElementById("invoerVeld2");
let invoerVeld3 = document.getElementById("invoerVeld3");
let invoerVeld4 = document.getElementById("invoerVeld4");
let invoerVeld5 = document.getElementById("invoerVeld5");
//stel je krijgt voor elk antwoord 1 punt naar boven oefenen

//Functies:
//Functie voor vlag Polen

//Meldingen/ geluid die worden weergegeven wanneer het antwoord fout of goed is via de if/ else statement
function vlagPolen() {
    const name = invoerVeld.value; //invoerVeld.value komt uit code voorbeeld Lisette. Dit haalt de waarde op die is ingevoerd in het invoerveld en slaat deze op in het variabele name.
    const melding = document.createElement("p"); //Hier wordt een html element aangemaakt (<p>). Hier wordt de melding in weergegeven.
    const meldingElement = document.getElementById("meldingPolen"); //Dit haalt het HTML-element op met de ID "meldingPolen" en slaat het op in het variabele die is aangemaakt


    if (name === vlagVanPolen) { //Name (de waarde van het invoerveld) moet gelijk staan aan de const vlagVanPolen = 'Polen'
        melding.textContent = "Je hebt het goede antwoord geraden!"; //De textcontent van de html element 'p' bevat "...".
        melding.style.color = "green"; // De tekst kleur wordt groen gemaakt door style(css) en color = groen wanneer antwoord goed is

        const geluidCorrect = document.getElementById('soundCorrect');
        geluidCorrect.play();
        
    } else {
        melding.textContent = "Dit antwoord is niet correct, probeer het opnieuw"; //Als er iets anders wordt ingevuld bij de waarde van het invoerveld (name) verandert de textContent:
        melding.style.color = "red"; //De tekst kleurt rood als er iets anders is neergezet dan name=== vlagVanPolen

        const geluidFout = document.getElementById('soundFout');
        geluidFout.play();
    }

    meldingElement.appendChild(melding); // Dit voegt de gemaakte melding toe aan het HTML-element met de ID "meldingPolen"

    //Bepaalde tijd die aangeeft wanneer de melding verdwijnt

    setTimeout(function() {
        melding.textContent = "";
    }, 3000); // 3000 milliseconden = 3 seconden
    //dit zorgt ervoor dat de melding na 3 seconden verdwijnt
} //setTimeout: https://www.w3schools.com/jsref/met_win_settimeout.asp en les 3B

//Functie voor vlag India

function vlagIndia() {
    const name = invoerVeld2.value;
    const melding = document.createElement("p");
    const meldingElement = document.getElementById("meldingIndia");


    if (name === vlagVanIndia) { //=== : gelijk in waarde en type
        melding.textContent = "Je hebt het goede antwoord geraden!";
        melding.style.color = "green"; 
    
        const geluidCorrect = document.getElementById('soundCorrect'); // //Dit haalt de HTML element op met de id soundCorrect dit wordt opgeslagen in de variabel geluidCorrect
        geluidCorrect.play(); ////Roept de play() methode aan op een audio-element dat is opgeslagen in de variabele geluidCorrect. De play methode geeft aan dat de const waarschijnlijk een geluid is
            
    } else {
        melding.textContent = "Dit antwoord is niet correct, probeer het opnieuw";
        melding.style.color = "red"; 
    
        const geluidFout = document.getElementById('soundFout'); //Dit haalt de HTML element op met de id soundFout dit wordt opgeslagen in de variabel geluidFout
        geluidFout.play(); //Roept de play() methode aan op een audio-element dat is opgeslagen in de variabele geluidFout. De play methode geeft aan dat de const waarschijnlijk een geluid is
    }

    meldingElement.appendChild(melding);

    setTimeout(function() { //SetTimeout: een functie die wordt gebruikt om een bepaald stuk code uit te voeren na een time-out die wordt opgegeven in milliseconden. In dit geval 3000 (3 seconden)
        melding.textContent = ""; //function: dit is een anonieme functie zonder naam die aan setTimeout wordt gegeven
    }, 3000); //De functie waar melding.textContent in staat wordt uitgevoerd wanneer 3 seconden voorbij zijn.
    //In dit geval wordt de textContent van de melding "", dus helemaal niks na 3 seconden
}

//Functie voor vlag Spanje

function vlagSpanje() {
    const name = invoerVeld3.value;
    const melding = document.createElement("p");
    const meldingElement = document.getElementById("meldingSpanje");

    
    if (name === vlagVanSpanje) {
        melding.textContent = "Je hebt het goede antwoord geraden!";
        melding.style.color = "green"; 

        const geluidCorrect = document.getElementById('soundCorrect');
        geluidCorrect.play();
        
    } else {
        melding.textContent = "Dit antwoord is niet correct, probeer het opnieuw";
        melding.style.color = "red"; 

        const geluidFout = document.getElementById('soundFout');
        geluidFout.play();
    }

meldingElement.appendChild(melding); 

    setTimeout(function() {
        melding.textContent = "";
    }, 3000); 
}

//Functie voor vlag Colombia

function vlagColombia() {
    const name = invoerVeld4.value;
    const melding = document.createElement("p");
    const meldingElement = document.getElementById("meldingColombia");

    
    if (name === vlagVanColombia) {
        melding.textContent = "Je hebt het goede antwoord geraden!";
        melding.style.color = "green"; 

        const geluidCorrect = document.getElementById('soundCorrect');
        geluidCorrect.play();
        
    } else {
        melding.textContent = "Dit antwoord is niet correct, probeer het opnieuw";
        melding.style.color = "red"; 

        const geluidFout = document.getElementById('soundFout');
        geluidFout.play();
    }

meldingElement.appendChild(melding); 

    setTimeout(function() {
        melding.textContent = "";
    }, 3000); 
}

//Functie voor vlag Portugal

function vlagPortugal() {
    const name = invoerVeld5.value;
    const melding = document.createElement("p");
    const meldingElement = document.getElementById("meldingPortugal");

    
    if (name === vlagVanPortugal) {
        melding.textContent = "Je hebt het goede antwoord geraden!";
        melding.style.color = "green";

        const geluidCorrect = document.getElementById('soundCorrect');
        geluidCorrect.play();
        
    } else {
        melding.textContent = "Dit antwoord is niet correct, probeer het opnieuw";
        melding.style.color = "red"; 
        
        const geluidFout = document.getElementById('soundFout');
        geluidFout.play();
    }

meldingElement.appendChild(melding); 

    setTimeout(function() {
        melding.textContent = "";
    }, 3000); 
}

// Eigen onderzoek audio: https://stackoverflow.com/questions/33723377/javascript-if-else-statement-that-plays-an-mp3-audio-file







