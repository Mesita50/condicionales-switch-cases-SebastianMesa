let angulo1 = parseFloat(prompt("Ingrese la medida del angulo numero 1"))
let angulo2 = parseFloat(prompt("Ingrese la medida del angulo numero 2"))
let angulo3 = parseFloat(prompt("Ingrese la medida del angulo numero 3"))
if (angulo1 + angulo2 + angulo3 === 180){
    console.log("Estos angulos si conforman un triangulo")
}else{
    console.log("Estos angulos no conforman un triangulo")
}