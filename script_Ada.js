function maFonction() {
	alert("Mauvaise réponse :(")
}
function maFonction2() {
	alert("Bravo : Bonne réponse !")
}

function hover(id){
	document.querySelector("#reponsefausse"+id).classList.remove("blanc");
	document.querySelector("#reponsefausse"+id).classList.add("rouge");
}
function normal(id) {
	document.querySelector("#reponsefausse"+id).classList.remove("rouge");
	document.querySelector("#reponsefausse"+id).classList.add("blanc");
}

function hoverjuste(){
	document.querySelector("#reponsejuste").classList.remove("blanc");
	document.querySelector("#reponsejuste").classList.add("vert");
}
function normaljuste() {
	document.querySelector("#reponsejuste").classList.remove("vert");
	document.querySelector("#reponsejuste").classList.add("blanc");
}


function modifQuestionjuste() {
	document.querySelector("#question").innerHTML = "Bravo : Bonne réponse !"
}
function modifQuestionfaux() {
	document.querySelector("#question").innerHTML = "Mauvaise réponse"
}

function modifBoutonjuste() {
	document.querySelector("#bouton").innerHTML = "Bravo : Bonne réponse !"
}
function modifBoutonfaux(id) {
	document.querySelector("#bouton"+id).innerHTML = "Mauvaise réponse"
}