let carre = document.getElementById('rond');

let gauche = document.getElementById('gauche');

let droite = document.getElementById('droite');

let haut = document.getElementById('haut');

let bas = document.getElementById('bas');

carre.style.position = "absolute";

let position_horizontale = 0;

let position_verticale = 0;

droite.onclick = function (){
    position_horizontale = position_horizontale + 50; 
    carre.style.left = position_horizontale + "px";
    console.log(position_horizontale);
}

gauche.onclick = function (){
    position_horizontale = position_horizontale - 50; 
    carre.style.left = position_horizontale + "px";
    console.log(position_horizontale);
}

bas.onclick = function (){
    position_verticale = position_verticale + 50; 
    carre.style.top = position_verticale + "px";
    console.log(position_verticale);
}

haut.onclick = function (){
    position_verticale = position_verticale - 50; 
    carre.style.top = position_verticale + "px";
    console.log(position_verticale);
}
