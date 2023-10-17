let rond = document.getElementById('rond');

let gauche = document.getElementById('gauche');

let droite = document.getElementById('droite');

let haut = document.getElementById('haut');

let bas = document.getElementById('bas');

rond.style.position = "absolute";

let position_horizontale = 0;

let position_verticale = 0;

// droite.onclick = function (){
//     position_horizontale = position_horizontale + 50; 
//     rond.style.left = position_horizontale + "px";
//     console.log(position_horizontale);
// }

// gauche.onclick = function (){
//     position_horizontale = position_horizontale - 50; 
//     rond.style.left = position_horizontale + "px";
//     console.log(position_horizontale);
// }

// bas.onclick = function (){
//     position_verticale = position_verticale + 50; 
//     rond.style.top = position_verticale + "px";
//     console.log(position_verticale);
// }

// haut.onclick = function (){
//     position_verticale = position_verticale - 50; 
//     rond.style.top = position_verticale + "px";
//     console.log(position_verticale);
// }

window.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowDown'){
        console.log('bas');
        position_verticale = position_verticale + 50; 
        rond.style.top = position_verticale + "px";
        console.log(position_verticale);
    }
    if(e.key === 'ArrowUp'){
        console.log('haut');
        position_verticale = position_verticale - 50; 
        rond.style.top = position_verticale + "px";
        console.log(position_verticale);

    }
    if(e.key === 'ArrowRight'){
        console.log('droite');
        position_horizontale = position_horizontale + 50; 
        rond.style.left = position_horizontale + "px";
        console.log(position_horizontale);

    }
    if(e.key === 'ArrowLeft'){
        position_horizontale = position_horizontale - 50; 
        rond.style.left = position_horizontale + "px";
        console.log(position_horizontale);

    }
});