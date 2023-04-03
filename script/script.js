function GerarPainel() { 
  document.getElementById("principal").innerHTML = document.getElementById("painel").innerHTML;
}

function Resultado() {
  let numero = 0;
  const tables = document.getElementsByTagName("table");
  for (let i = 0; i < 7; i++) {
    const table = tables[i];
    if (table.style.color !== "") {
      numero += Math.pow(2, i);   
    }
  }
  if (numero === 0) {
    alert("Selecione uma carta!!!");
    GerarPainel();
  } else {
    const principal = document.getElementById("principal");
    principal.style.fontSize = "300px";
    principal.style.color = "orange";
    principal.textContent = numero;
  }
}
