(function() {

    // Récupération des cases à clicker
    // const items = document.getElementsByClassName('grid-item');
const tour = document.querySelector(".turn")



let jeuActive = true;
let joueurActif = "";
let etatDuJeux = ["","","","","","","","",""];

const conditionDeVictoire =
[ 
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],

]
let restart = document.querySelector(".reset");
    restart.addEventListener("click",renouveller)
function renouveller(){
    jeuActive = true;
    joueurActif ="";
    etatDuJeux =  ["","","","","","","","",""];
    etatDuJeux.innerHTML = tourJoueurs();
    document.querySelectorAll(".grid-item").forEach(caz => caz.innerHTML = "");
    pop1.style.display = "block";  
}
function finir(){
    jeuActive = true;
    joueurActif ="";
    etatDuJeux =  ["","","","","","","","",""];
    document.querySelectorAll(".grid-item").forEach(caz => caz.innerHTML = "")
}
const tourJoueurs =() =>` ${joueurActif}`;

tour.innerHTML = tourJoueurs();

let cases = document.querySelectorAll(".grid-item");


    cases.forEach(caz =>  caz.addEventListener("click",choiseCase));

function choiseCase() {
  const indexCase = this.id;
  const chaqueCase = document.getElementById(indexCase);

  if (etatDuJeux[[...cases].indexOf(this)] !== "" || !jeuActive){
      return;
  }
  etatDuJeux[[...cases].indexOf(this)] = joueurActif;
  chaqueCase.innerHTML = joueurActif;
  
  verificationVictoire()
    }
function verificationVictoire(){
    let tourGagnant = false;
    for(let conditionVic of conditionDeVictoire){
        let valeur1 = etatDuJeux[conditionVic[0]]
        let valeur2 = etatDuJeux[conditionVic[1]]
        let valeur3 = etatDuJeux[conditionVic[2]]

        if(valeur1 === "" || valeur2 === "" || valeur3 === ""){
            continue;
        }
        if(valeur1 === valeur2 && valeur2 === valeur3){
            tourGagnant = true;
            break;
        }
    }
    if(tourGagnant){
        let afficheVictoire = document.querySelector(".layer2");
            afficheVictoire.style.display="block";
        let fermer = document.querySelector(".end-game");
            fermer.addEventListener("click",() => {afficheVictoire.style.display="none"});
        finir();      
    }
    if(!etatDuJeux.includes("")){
        let afficheNul = document.querySelector(".layer3");
        afficheNul.style.display="block";
        let recommencer = document.querySelector(".draw");
            recommencer.addEventListener("click",() => {afficheNul.style.display="none"});
        finir();  
       
    }
    joueurActif = joueurActif === "X"? "O": "X";
    tour.innerHTML = tourJoueurs();
}

    const pop1 = document.querySelector(".layer");
    let choix1 = document.querySelector(".choose1");
    let choix2 = document.querySelector(".choose2");

        choix1.addEventListener("click",function(){
            pop1.style.display = "none"
            joueurActif = "X"

        });
        choix2.addEventListener("click",function(){
            pop1.style.display = "none";
            joueurActif ="O";
        });

})();