// Prva funkcija

function sumaJedan() {
do {
	var userInput = prompt('Unesi neki prirodni broj.');
	userInput= userInput.trim(); 
	userInput = Number(userInput);
}
while (isNaN(userInput));
	var rezultat = 0;

	for (var i=0; i<=userInput; i++) {
	rezultat=rezultat+i;
	}	
	return rezultat;
}
document.write(rezultat);
// document.getElementById("rez").innerHTML=document.write(rezultat);


// Druga funkcuija

function sumaDva() {
	var x=1;
do {
	var userInput = prompt('Unesi neki prirodni broj.');
	userInput= userInput.trim(); 
	userInput = Number(userInput);
}
while (isNaN(userInput)); 

	for (var i=1; i<=userInput; i++) {
	x=x*i;
	}
	return x;
}
document.write(x);


// Treca funkcija

function sumaTri(userInput) {
do {
	var userInput = prompt('Unesi koliko ima para na racunu.');
	userInput= userInput.trim(); 
	userInput = Number(userInput);
}
while (isNaN(userInput)); 

	var rezultat1=1;
	for (var i=1; i<=userInput; i++) {
	rezultat1=rezultat1*i;
	}
	return rezultat1;
}
document.write(rezultat1);


// Cetvrta funkcija

function sumaCetri() {
	do {
		var n = prompt("Unesi neki ceo broj.");
		n = n.trim(); 
		n = Number(n);
		}
	while (isNaN(n));
	do {
		var k = prompt("unesi jos jedan ceo broj veci od prethodnog.");
		k = k.trim(); 
		k = Number(k);
		}
	while (isNaN(n)||n>k);

	var zbir = 0;
    for (i=n;i<=k;i++) {
         zbir = zbir + i;
 	}
 	return zbir;
}
document.write(zbir);
