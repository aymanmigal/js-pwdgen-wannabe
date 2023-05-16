let nome = prompt('Qual è il tuo nome?');

let cognome = prompt('Qual è il tuo cognome?');

let colore_preferito = prompt('Qual è il tuo colore preferito?');

const const_21 = '21';

let password_user = (`${nome}${cognome}${colore_preferito}${const_21}`);


document.getElementById('password_user').innerHTML =`${password_user}`;