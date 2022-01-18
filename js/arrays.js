//crear array
const numeros=[];
console.log(numeros);
//crear con valores
const colores=["rojo","amarillo","verde","marron"];
//invierte
//colores.reverse();
console.log(colores);
//crear con valores iguales
const seis= new Array(10).fill(6);
const dos=new Array(5).fill(2);
console.log(seis);
console.log(dos);
//añado valor
dos.push(10);
seis.push(15);
//eliminar
seis.shift();
//mostrar
for(let i=0;i<seis.length;i++){
	console.log(seis[i]);

}
//muestra parte del array
	console.log(dos.slice(3,6));
	//recorrer array colores
	for (color of colores){
		console.log(color);
	}
	//muestra indice
	for (i in colores){
		document.write(i);
		document.write(" : ");
		document.write(colores[i]);
		document.write("<br>");
	}