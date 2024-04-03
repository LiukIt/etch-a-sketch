const gridContainer = document.getElementById("grid");

for (let i = 0; i < 16 * 16; i++) {
    // Crea una nuova cella
    const cell = document.createElement('div');
    cell.classList.add('cell'); // Aggiungi la classe 'cell' alla cella
    gridContainer.appendChild(cell); // Aggiungi la cella al contenitore della griglia
}

function casualColor () {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

const celle = document.querySelectorAll(".cell");

celle.forEach( cell => {
    cell.addEventListener ("mouseenter", () => {
        cell.style.backgroundColor = casualColor();
    })
});


// Funzione per generare un colore casuale in formato esadecimale per il bordo
function coloreCasuale() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Funzione per generare un colore casuale in formato esadecimale per il testo
function coloreCasualeTesto() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Seleziona il pulsante
const pulsante = document.getElementById("click");

// Aggiungi un listener per l'evento mouseover
pulsante.addEventListener("mouseover", () => {
    // Applica il gradiente arcobaleno al bordo quando passi sopra con il mouse
    pulsante.style.borderImage = `repeating-linear-gradient(to right, ${coloreCasuale()}, ${coloreCasuale()}, ${coloreCasuale()},
    ${coloreCasuale()}, ${coloreCasuale()}, ${coloreCasuale()}, ${coloreCasuale()}) 1`;
    // Applica il colore arcobaleno al testo
    pulsante.style.color = coloreCasualeTesto();
});


// Funzione per rimuovere la griglia esistente
function rimuoviGriglia() {
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = ""; // Rimuove tutti i figli del contenitore della griglia
}

// Funzione per generare una nuova griglia
function generaGriglia(numQuadratiPerLato) {
    const gridContainer = document.getElementById("grid");
    const dimensioneQuadrato = 480 / numQuadratiPerLato; // Calcola la dimensione di ogni quadrato
    gridContainer.style.gridTemplateColumns = `repeat(${numQuadratiPerLato}, ${dimensioneQuadrato}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${numQuadratiPerLato}, ${dimensioneQuadrato}px)`;
    
    // Aggiungi i quadrati alla griglia
    for (let i = 0; i < numQuadratiPerLato * numQuadratiPerLato; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
}

// Seleziona il pulsante per la nuova griglia
const newGridButton = document.getElementById("click");

// Aggiungi un listener per l'evento click sul pulsante
newGridButton.addEventListener("click", () => {
    // Chiedi all'utente il numero di quadrati per lato
    const numQuadratiPerLato = prompt("Inserisci il numero di quadrati per lato per la nuova griglia:");
    if (numQuadratiPerLato && !isNaN(numQuadratiPerLato) && numQuadratiPerLato > 0) {
        // Rimuovi la griglia esistente
        rimuoviGriglia();
        // Genera una nuova griglia con le dimensioni specificate dall'utente
        generaGriglia(parseInt(numQuadratiPerLato));
    } else {
        alert("Inserisci un numero valido di quadrati per lato.");
    }
});

// Funzione per generare una nuova griglia
function generaGriglia(numQuadratiPerLato) {
    const gridContainer = document.getElementById("grid");
    const dimensioneQuadrato = 480 / numQuadratiPerLato; // Calcola la dimensione di ogni quadrato
    gridContainer.style.gridTemplateColumns = `repeat(${numQuadratiPerLato}, ${dimensioneQuadrato}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${numQuadratiPerLato}, ${dimensioneQuadrato}px)`;
    
    // Rimuovi tutti i figli esistenti del contenitore della griglia
    gridContainer.innerHTML = "";

    // Aggiungi i quadrati alla griglia e l'event listener "mouseenter" a ciascuna cella
    for (let i = 0; i < numQuadratiPerLato * numQuadratiPerLato; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);

        // Aggiungi l'event listener "mouseenter" a ciascuna cella
        cell.addEventListener("mouseenter", () => {
            // Applica il colore casuale come background alla cella
            cell.style.backgroundColor = casualColor();
        });
    }
}