// Buscar elemento pai
var elemento_pai = document.body;
var divmain = document.createElement("main");
var divpai = elemento_pai.appendChild(divmain);
divpai.classList.add("content");

// Criar elemento
var tabela = document.createElement("table");

// Criar o nó de texto
// var texto = document.createTextNode("");
// tabela.textContent = ""
// Anexar o nó de texto ao elemento h1
// tabela.appendChild(texto);
// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
// elemento_pai.appendChild(titulo);

var divfilho = divpai.appendChild(tabela);
var tam = 49;

for (let i = 0; i < tam; i++) {
  var sdivfilho = document.createElement("tr");
  var divneto = divfilho.appendChild(sdivfilho);
  for (let j = 0; j < tam; j++) {
    var sdivneto = document.createElement("td");
    var sdivneto2 = divneto.appendChild(sdivneto);
  }
}


function adicionaevento() {
  let quadrados = document.getElementsByTagName('td')
  for (let i = 0; i<quadrados.length; i++){
    quadrados[i].addEventListener('mouseover',()=> quadrados[i].classList.toggle("corfixa"))
    // console.log(quadrados);
  }
  
}
adicionaevento()



window.addEventListener('load',()=>document.getElementsByTagName('td')[0].classList.add("corfixa"))
// window.setInterval(()=>console.log(document.getElementsByClassName('corfixa')[0]),1000)
 


