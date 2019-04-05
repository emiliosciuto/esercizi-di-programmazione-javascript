/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


var tempo = 12560;

var ore = (tempo/3600);
var a = Math.round(ore);

var minuti = (ore-a) * 60;
var b = Math.round(minuti);

var secondi = (minuti-b) * 60;
var c = Math.round(secondi);


console.log(a + ' ore', b + ' minuti e', c +' secondi');
