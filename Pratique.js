let choisi = document.querySelectorAll(".radio  input")
let enter = document.getElementById("enter")
let mots = document.querySelector(".mot h1")
let btn = document.getElementById("btn")
let scores = document.querySelector("p span")
let motmax=document.querySelector(".len")
let divmess=document.querySelector(".message")
let closedivmess=document.querySelector(".closent")
let divmessech=document.querySelector(".messageech")
let closedivmessech=document.querySelector(".closentech")

closedivmess.addEventListener("click",()=>{
  divmess.style.display=("none")
})

closedivmessech.addEventListener("click",()=>{
  divmessech.style.display=("none")
})

let mot=["bonjour","bonsoir","bonne"]
const b = mot.length

function affiche(motproposer) {
mots.innerText=motproposer
}

let i=0
mots.innerText=mot[i]
motmax.textContent=b

let cont=0
scores.textContent=cont

btn.addEventListener("click",()=>{
  if (enter.value.trim()===mot[i]) {
    cont++
    scores.textContent=cont
  }
  i++
  enter.value=""
  if (mot[i] === undefined) {
  affiche("le jeux est fini")
  btn.disabled = true
} else {
  affiche(mot[i])
}

if (cont>=2 && mot[i] === undefined) {
  divmess.style.display=("flex")
} else if(cont<2 && mot[i] === undefined){
 divmessech.style.display=("flex") 
}
})

