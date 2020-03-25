
var nome = prompt ('Qual\' è il tuo nome?')
console.log(nome);

var cognome = prompt ('Qual\' è il tuo Cognome?')
console.log(cognome);

var colore = prompt ('Qual\' è il tuo colore preferito?')
console.log(colore);

var numero = prompt ('Quanti anni hai?')
console.log(numero);






document.getElementById('name').innerHTML = nome;
document.getElementById('surname').innerHTML = cognome;
document.getElementById('colour').innerHTML = colore;
document.getElementById('number').innerHTML = numero;
