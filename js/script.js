const CreatPass = document.getElementById("password")

//NOME
const FirstName = prompt("Inserisci il tuo nome");
console.log(FirstName);

//COGNOME
const SurName = prompt("Inserisci il tuo cognome");
console.log(SurName);

//COLORE PREFERITO
const FavColor = prompt("Inserisci il tuo colore preferito");
console.log(FavColor);

//CREAZIONE PASSWORD
const PassWord = FirstName + SurName + FavColor + "23";
console.log(PassWord);
CreatPass.innerHTML = `La tua password è <mark> ${PassWord} </mark>`; 