/*var nome = "Amanda Peixoto";
var idade = 25;
var idade2 = 10;
alert("Bem vindo" + Amanda Peixoto);
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("maior de idade");
} else{
    alert("menor de idade");
}*/

/*var count = 0;
while (count <= 5) {
    console.log(count);
    //count = count + 1; ou
    count++;
}*/

/*var count = count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/

/*
var d = new Date();
alert(d);
*/

function clicou(){
    alert("Obrigada por clicar");
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; 
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);    
}