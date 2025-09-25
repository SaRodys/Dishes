//-----------------------------------------------------------DEFAULT DELLA PAGINA-------------------------------------------------------------------
//elementi da inserire nei blocchi al caricamento della pagina
var titoloCannolo = "<p>Cannolo siciliano</p>";
var titoloCotoletta = "<p>Cotoletta alla milanese</p>";
var titoloInsalata = "<p>Insalata</p>";
var titoloMinestrone = "<p>Minestrone</p>";
var titoloPizza = "<p>Pizza margherita</p>";
var titoloTacos = "<p>Tacos messicano</p>";

var fotoCannolo = '<img src="img/cannolo.png">';
var fotoCotoletta = '<img src="img/cotoletta.png">';
var fotoInsalata = '<img src="img/insalata.png">';
var fotoMinestrone = '<img src="img/minestrone.png">';
var fotoPizza = '<img src="img/pizza.png">';
var fotoTacos = '<img src="img/tacos.png">';

//funzione che inserisce titolo e foto nei blocchi dell'html
function riempimento() {
    document.getElementById("cannolo").innerHTML = fotoCannolo + titoloCannolo;
    document.getElementById("cotoletta").innerHTML = fotoCotoletta + titoloCotoletta;
    document.getElementById("insalata").innerHTML = fotoInsalata + titoloInsalata;
    document.getElementById("minestrone").innerHTML = fotoMinestrone + titoloMinestrone;
    document.getElementById("pizza").innerHTML = fotoPizza + titoloPizza;
    document.getElementById("tacos").innerHTML = fotoTacos + titoloTacos;
    document.getElementById("descrizione").innerHTML = ("<p>Seleziona una allergia o preferenza alimentare per vedere quali piatti non puoi mangiare</p>");
}

//sfondo di deafult dei box 
function sfondo() {
    var blocchi = document.getElementById("piatti");
    var singoliBlocchi = blocchi.getElementsByTagName("div");
    for (var j = 0; j < singoliBlocchi.length; j++) {
        singoliBlocchi[j].style.backgroundColor = "var(--primary-color)";
    }
}

//funzione che svuota la sezione ingredienti
function ingredientiVuoti() {
    var piattoScelto = document.getElementById("piattoScelto");
    piattoScelto.innerHTML = "";
    var listaIngredienti = document.getElementById("ingredienti");
    listaIngredienti.innerHTML = "";
}

//ingredienti di ogni piatto definiti come array
var ingredientiCannolo = new Array ("farina", "zucchero", "strutto", "marsala", "uova", "aceto di vino bianco", "sale", "arancia", "cannella", "ricotta", "cioccolato", "olio di semi", "pistacchio", "ciliegia");
var ingredientiCotoletta = new Array ("costoletta di vitello", "uova", "pangrattato", "sale", "burro");
var ingredientiInsalata = new Array ("valeriana", "insalata iceberg", "cipolla", "pomodoro", "semi di sesamo", "melone");
var ingredientiMinestrone = new Array ("carota", "cipolla", "zucchina", "patata", "sedano", "zucca", "alloro", "acqua");
var ingredientiPizza = new Array ("farina", "acqua", "lievito di birra", "olio di oliva", "sale", "pomodoro", "mozzarella", "grana padano", "basilico");
var ingredientiTacos = new Array ("farina di mais", "acqua", "sale", "olio di semi", "salsiccia", "peperoncino dolce", "paprika", "concentrato di pomodoro", "vino rosso", "olio di oliva", "prezzemolo", "panna acida");


//------------------------------------------------------FUNZIONI PER L'INTERAZIONE-----------------------------------------------------------------
//funzione per cambiare sfondo quando un piatto viene selezionato
function cambioSfondo(box) {
    box.style.backgroundColor = "var(--active-color)";
}

//funzione che sottolinea il testo al passaggio del mouse
function mouseOver(text) {
    text.style.textDecoration = "underline";
}
//funzione che toglie la sottolineatura quando il mouse esce dal box
function mouseOut(text) {
    text.style.textDecoration = "none";
}

//--------------------------------------------------------STAMPA DEGLI INGREDIENTI-----------------------------------------------------------------
//funzione che controlla gli ingredienti e li stampa insieme al nome del piatto nella sezione dell'html
function controllaIngredienti(ingredienti, nome) {
    var piattoScelto = document.getElementById("piattoScelto");
    var titolo = ("<h3>" + nome + "</h3>");
    piattoScelto.innerHTML = titolo;
    console.log("L'utente vuole sapere gli ingredienti presenti nel piatto " + nome);

    var listaIngredienti = document.getElementById("ingredienti");
    var listaHtml = "<ul>";
    for (var i = 0; i < ingredienti.length; i++) {
        listaHtml = listaHtml + ("<li>" + ingredienti[i] + "</li>");
    }
    listaIngredienti.innerHTML = listaHtml;
}

//-------------------------------------------------RESET E REAZIONE AL CLICK SUI VARI BOX---------------------------------------------------------

//reset colori del box, cambio dello sfondo e stampa del titolo e degli ingredienti del box selezionato
//---------------------------------------CANNOLO-------------------------------------------------------
var cannoloBox = document.getElementById("cannolo");
cannoloBox.onclick = function () {
    sfondo();
    cambioSfondo(cannoloBox);
    controllaIngredienti(ingredientiCannolo, titoloCannolo);
};
cannoloBox.onmouseover = function () {
    mouseOver(cannoloBox);
}
cannoloBox.onmouseout = function () {
    mouseOut(cannoloBox);
}
//---------------------------------------COTOLETTA-------------------------------------------------------
var cotolettaBox = document.getElementById("cotoletta");
cotolettaBox.onclick = function () {
    sfondo();
    cambioSfondo(cotolettaBox);
    controllaIngredienti(ingredientiCotoletta, titoloCotoletta);
};
cotolettaBox.onmouseover = function () {
    mouseOver(cotolettaBox);
}
cotolettaBox.onmouseout = function () {
    mouseOut(cotolettaBox);
}
//---------------------------------------INSALATA-------------------------------------------------------
var insalataBox = document.getElementById("insalata");
insalataBox.onclick = function () {
    sfondo();
    cambioSfondo(insalataBox);
    controllaIngredienti(ingredientiInsalata, titoloInsalata);
};
insalataBox.onmouseover = function () {
    mouseOver(insalataBox);
}
insalataBox.onmouseout = function () {
    mouseOut(insalataBox);
}
//---------------------------------------MINESTRONE-------------------------------------------------------
var minestroneBox = document.getElementById("minestrone");
minestroneBox.onclick = function () {
    sfondo();
    cambioSfondo(minestroneBox);
    controllaIngredienti(ingredientiMinestrone, titoloMinestrone);
};
minestroneBox.onmouseover = function () {
    mouseOver(minestroneBox);
}
minestroneBox.onmouseout = function () {
    mouseOut(minestroneBox);
}
//---------------------------------------PIZZA-------------------------------------------------------
var pizzaBox = document.getElementById("pizza");
pizzaBox.onclick = function () {
    sfondo();
    cambioSfondo(pizzaBox);
    controllaIngredienti(ingredientiPizza, titoloPizza);
};
pizzaBox.onmouseover = function () {
    mouseOver(pizzaBox);
}
pizzaBox.onmouseout = function () {
    mouseOut(pizzaBox);
}
//---------------------------------------TACOS-------------------------------------------------------
var tacosBox = document.getElementById("tacos");
tacosBox.onclick = function () {
    sfondo();
    cambioSfondo(tacosBox);
    controllaIngredienti(ingredientiTacos, titoloTacos);
};
tacosBox.onmouseover = function () {
    mouseOver(tacosBox);
}
tacosBox.onmouseout = function () {
    mouseOut(tacosBox);
}

//-----------------------------------------------REAZIONE ALLE SCELTE NELL'ELENCO A DISCESA--------------------------------------------------------
function divietoPiatti(ingredientiPiatto, idPiatto) {
    var descrizione = document.getElementById("descrizione");
    var piattoScelto = document.getElementById(idPiatto);
    var img = piattoScelto.getElementsByTagName("img")[0];
    for (var i = 0; i < ingredientiPiatto.length; i++) {
        //---------------------------------------CATEGORIA "NESSUNA"-------------------------------------------------------
        if (document.seleziona.allergie.value == "nessuna") {
            riempimento();
            sfondo();
            ingredientiVuoti();
            descrizione.innerHTML = "<p>Seleziona una allergia o preferenza alimentare per vedere quali piatti non puoi mangiare</p>";
        }
        //---------------------------------------CATEGORIA "CELIACHIA"-------------------------------------------------------
        if (document.seleziona.allergie.value == "celiachia") {
            descrizione.innerHTML = "<p>La celiachia è un'intolleranza permanente al glutine. Il glutine è un complesso di sostanze che si forma impastando acqua con la farina di alcuni cereali, come frumento, farro, kamut, orzo, segale, spelta e triticale.</p>";
            if (ingredientiPiatto[i] == "farina" || ingredientiPiatto[i] == "pangrattato" || ingredientiPiatto[i] == "lievito di birra") {
                img.src = "img/divieto.png";
                console.log(idPiatto.toUpperCase() + " non rientra nell'alimentazione celiaca");
            }
        }
        //---------------------------------------CATEGORIA "VEGANESIMO"-------------------------------------------------------
        if (document.seleziona.allergie.value == "vegano") {
            descrizione.innerHTML = "<p>La dieta vegana comprende l'esclusione di qualsiasi alimento di origine animale. Si basa sul consumo di cereali, legumi, verdura e frutta, sia fresca che secca, oli vegetali, bevande vegetali, semi.</p>";
            if ((((((((ingredientiPiatto[i] == "costoletta di vitello"
                || ingredientiPiatto[i] == "salsiccia")
                || ingredientiPiatto[i] == "ricotta")
                || ingredientiPiatto[i] == "strutto")
                || ingredientiPiatto[i] == "uova")
                || ingredientiPiatto[i] == "burro")
                || ingredientiPiatto[i] == "grana padano")
                || ingredientiPiatto[i] == "mozzarella")
                || ingredientiPiatto[i] == "panna acida") {
                img.src = "img/divieto.png";
                console.log(idPiatto.toUpperCase() + " non rientra nell'alimentazione vegana");
            }
        }
        //---------------------------------------CATEGORIA POMODORO-------------------------------------------------------
        if (document.seleziona.allergie.value == "pomodoro") {
            descrizione.innerHTML = "<p>L'allergia al pomodoro è un tipo di allergia da contatto che si manifesta quando il corpo riconosce come “pericoloso” il pomodoro, rilasciando istamine nelle zone interessate.</p>";
            if (ingredientiPiatto[i] == "pomodoro" || ingredientiPiatto[i] == "concentrato di pomodoro") {
                img.src = "img/divieto.png";
                console.log(idPiatto.toUpperCase() + " non può essere mangiato con un'allergia al pomodoro");
            }
        }
    }
}

//esecuzione della funzione al cambio selezione di categoria e scrittura della descrizione
document.getElementById("categoria").onchange = function () {
    riempimento();
    sfondo();
    ingredientiVuoti();
    console.log("L'utente ha scelto la cetegoria " + document.seleziona.allergie.value.toUpperCase());
    divietoPiatti(ingredientiCannolo, "cannolo");
    divietoPiatti(ingredientiCotoletta, "cotoletta");
    divietoPiatti(ingredientiInsalata, "insalata");
    divietoPiatti(ingredientiMinestrone, "minestrone");
    divietoPiatti(ingredientiPizza, "pizza");
    divietoPiatti(ingredientiTacos, "tacos");
}

//---------------------------------------INSERIMENTO MANUALE DELL'UTENTE DI UN INGREDIENTE-------------------------------------------------------
//funzione che setaccia i piatti per cercare l'ingrediente inserito dall'utente
function inserisciIngrediente(proibito, ingredientiPiatto, idPiatto) {
    proibito = proibito.toLowerCase();
    var piattoScelto = document.getElementById(idPiatto);
    var img = piattoScelto.getElementsByTagName("img")[0];
    for (var i = 0; i < ingredientiPiatto.length; i++) {
        if (ingredientiPiatto[i].indexOf(proibito) != -1) {
            img.src = "img/divieto.png";
            console.log(idPiatto.toUpperCase() + " contiene l'ingrediente proibito " + proibito.toUpperCase());
        }
    }
}

//quando viene premuto il bottone, viene azzerata la pagina e viene chiesto l'inserimento di un ingrediente proibito
document.getElementById("proibito").onclick = function () {
    riempimento();
    sfondo();
    ingredientiVuoti();
    var proibito = prompt("Quale ingrediente non puoi mangiare? (scrivilo al singolare)");
    inserisciIngrediente(proibito, ingredientiCannolo, "cannolo");
    inserisciIngrediente(proibito, ingredientiCotoletta, "cotoletta");
    inserisciIngrediente(proibito, ingredientiInsalata, "insalata");
    inserisciIngrediente(proibito, ingredientiMinestrone, "minestrone");
    inserisciIngrediente(proibito, ingredientiPizza, "pizza");
    inserisciIngrediente(proibito, ingredientiTacos, "tacos");
}