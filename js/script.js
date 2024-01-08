const creatPass = document.getElementById("password")

//NOME
const firstName = prompt("Inserisci il tuo nome");
console.log(firstName);

//COGNOME
const surName = prompt("Inserisci il tuo cognome");
console.log(surName);

//COLORE PREFERITO
const favColor = prompt("Inserisci il tuo colore preferito");
console.log(favColor);

//CREAZIONE PASSWORD
const passWord = firstName + surName + favColor + "23";
console.log(passWord);
creatPass.innerHTML = `La tua password è <mark> ${passWord} </mark>`; 