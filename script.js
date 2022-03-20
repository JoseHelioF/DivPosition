// Buscar elemento pai
var elemento_pai = document.body;
var div = document.createElement("div");
var n = elemento_pai.appendChild(div);
n.classList.add("content")

// Criar elemento
var tabela = document.createElement("table");

// Criar o nó de texto
// var texto = document.createTextNode("");
// tabela.textContent = ""
// Anexar o nó de texto ao elemento h1
// tabela.appendChild(texto);
// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
// elemento_pai.appendChild(titulo);

var filho = n.appendChild(tabela);

var tam = 41;

for (let i = 0; i < tam; i++) {
  var titulo2 = document.createElement("tr");
  var neto = filho.appendChild(titulo2);
  for (let j = 0; j < tam; j++) {
    var titulo3 = document.createElement("td");
    var z = neto.appendChild(titulo3);
    z.classList.add(i,j)
    z.addEventListener("click",muda(z))
  }
}

function muda(z){
  console.log(z);
}
