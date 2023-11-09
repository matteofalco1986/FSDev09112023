// Global variables/arrays
let numeriDaEstrarre = [];
let numeriEstratti = [];


// Global functions
const print = (...args) => {
    console.log(...args);
}

window.onload = (event) => {
    runScripts();
}

const runScripts = () => {
    populateNumbers(76, numeriDaEstrarre);
    creaTabellone(76);
    extractNumber();
}


// Game functions
const populateNumbers = (numbers, array) => {
    for (let i = 0; i < numbers; ++i){
        array.push(i +1);
    }        
}

const creaTabellone = (numbers) => {
    for (let i = 0; i < numbers; i++){
        const tabellone = document.getElementById("numbersContainer");
        // Creare div
        const singleNumberContainer = document.createElement("div");
        // Creare un p
        const paragraph = document.createElement("p");
        // Aggiungere al p i+1 come innerText
        paragraph.innerText = i+1;
        // Appendere il div al numbersContainer
        tabellone.appendChild(singleNumberContainer);
        // Appendere il p al div
        singleNumberContainer.appendChild(paragraph);
    }
}

const randomIndex = (maxIndex) => {
    return Math.floor(Math.random()*maxIndex);
} 
const getNumber = () => {
    //    let isInArray = true;
    
    const index = randomIndex(76);
    //    if (numeriEstratti.length === 0){
        //        numeriEstratti.push(index+1)
        //        return;
        //    }
        //    let i = 0;
        
        // Ciclare nell'array dei numeri estratti
        // Controllare se index + 1 === a uno dei numeri estratti
        // Se il numero non è uguale a nessuno dei numeri estratti, interrompo il loop.
    }
    
    const extractNumber = () => {
        const pulsantePerEstrarre = document.getElementById("estrai-btn");
        const numbersToCompare = document.querySelectorAll("#numbersContainer > div");
        pulsantePerEstrarre.addEventListener("click", function(e){
            const numeroEstratto = getNumber();
            for (let i = 0; i < numeriDaEstrarre.length; i++){
                // Cercare corrispondenza con numeri in HTML
                const container = numbersToCompare[i];
                const cellValue = container.childNodes;
                print(cellValue.innerText);

                // Quando trova corrispondenza, assegnare una classe "estratto"
                // Colorare la classe col CSS
            }
        })
    // Determine which number to extract
}

