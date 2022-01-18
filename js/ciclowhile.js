//ciclo while
let tabla=parseInt(prompt("Que tabla quieres que calcule? "));
document.write(`Empezamos con la tabla del ${tabla}<br>`);
let i=1
while(i<=10){
	resultado=tabla*i;
	document.write(`${tabla}*${i}=${resultado}<br>`);
	i++;
}
document.write("Termina el bucle while<br>");

/*do{
	resultado=tabla*1;
	document.write(`${tabla}*${i}=${resultado}`);
	i++;

}while(i<=10);
document.write("Termina el bucle do while<br>");*/