let amigos = [];

//funcion para agregar amigos
function agregarAmigo() {
	
	const amigo = document.getElementById("amigo").value;
	
	if (amigo != "") {
		amigos.push(amigo);
		
		mostrarAmigos();
	} else {
		alert("Ingrese un nombre valido.");
	}
	
	document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
	
	const amigosHTML = document.querySelector("#listaAmigos");
	// limpio el ul para evitar repetidos
	amigosHTML.innerHTML = "";
	
	for (let i = 0; i < amigos.length; i++) {
		const amigo = amigos[i];
		//creo el li
		const li = document.createElement("li");
		//recibe el nombre del amigo actual
		li.textContent = amigo;
		
		amigosHTML.appendChild(li);
	}
}

function sortearAmigo() {
	//verifico si no hay amigos para sortear
	if (amigos.length == 0) {
		alert("No hay amigos para sortear.");
		return;
	}
	//selecciono el ul correspondiente para agregarle el li con el amigo sorteado
	const resultadoHTML = document.querySelector("#resultado");
	//selecciono un amigo sorteado
	const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
	//le doy como contenido el nombre del amigo sorteado
	resultadoHTML.innerHTML = `${amigoSorteado}`;
	//desabilito el boton de sortear para evitar que se sortee mas de una vez
	document.querySelector(".button-draw").disabled = true;
	//desabilito el boton de agregar para evitar que se agreguen mas amigos
	document.querySelector(".button-add").disabled = true;
}


