function GerarPainel() { 
    document.getElementById("principal").innerHTML = document.getElementById("painel").innerHTML
  }
  
  function Resultado() {
    numero = 0;
    for (i = 0; i < 7; i++) with (document.getElementsByTagName("table")[i]) {
      if (style.color != "") numero += Math.pow(2, i);   
    }
    if (numero == 0) {
      alert("Selecione uma carta!!!");
      GerarPainel();
    }
    else with (document.getElementById("principal")) {
      style.fontSize = "300px";
      style.color = "#ff9100";
      innerHTML = numero;
    }
  }