let numero = prompt("Dime un numero entero: ");
numero= parseInt(numero);
if(numero>0){
	document.write(`${numero} es mayor que cero`);
}else if (numero<0){
	document.write(`${numero} es menor a cero`);
}else{
	document.write(`${numero} es cero`);
}