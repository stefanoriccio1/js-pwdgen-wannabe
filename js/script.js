// richiesta età utente (test)
// var anniUtente = parseInt(prompt('Quanti anni hai?'));
// console.log(anniUtente);

// richiesta nome utente
var nomeUtente = prompt('Qual è il tuo nome?');
console.log(nomeUtente);

// richiesta cognome utente
var cognomeUtente = prompt('Qual è il tuo cognome?');
console.log(cognomeUtente);

// richiesta colore prefertio utente
var colorePreferito = prompt('Qual è il tuo colore preferito?');
console.log(colorePreferito);

// password
var password = nomeUtente + cognomeUtente + colorePreferito + 19;
console.log(password);

// stampo password su html
document.getElementById('password_utente').innerHTML = password;

// stampo nome utente su innerHTML
document.getElementById('nome_utente').innerHTML = nomeUtente;
// stampo nome utente su innerHTML
document.getElementById('cognome_utente').innerHTML = cognomeUtente;
