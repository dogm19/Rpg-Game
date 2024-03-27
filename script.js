function telaSalvar() {
  //document.getElementById("home").innerHTML = "";

  var visivel = document.getElementById("home");
  var invisivel = document.getElementById("save-slot");

  if (visivel.style.display !== "none") {
    visivel.style.display = "none";
    invisivel.style.display = "flex";
  } else {
    visivel.style.display = "flex";
    invisivel.style.display = "none";
  }
}

function sair() {
  var visivel = document.getElementById("save-slot");
  var invisivel = document.getElementById("home");

  if (visivel.style.display !== "none") {
    visivel.style.display = "none";
    invisivel.style.display = "block";
  } else {
    visivel.style.display = "block";
    invisivel.style.display = "none";
  }
}

function telaVoltarSalvar() {
  //document.getElementById("home").innerHTML = "";

  var visivel = document.getElementById("create");
  var invisivel = document.getElementById("save-slot");

  if (visivel.style.display !== "none") {
    visivel.style.display = "none";
    invisivel.style.display = "flex";
  } else {
    visivel.style.display = "flex";
    invisivel.style.display = "none";
  }
}

function telaCriar() {
  //document.getElementById("home").innerHTML = "";

  var visivel = document.getElementById("save-slot");
  var invisivel = document.getElementById("create");

  if (visivel.style.display !== "none") {
    visivel.style.display = "none";
    invisivel.style.display = "flex";
  } else {
    visivel.style.display = "flex";
    invisivel.style.display = "none";
  }
}

function salvar() {
  //document.getElementById("home").innerHTML = "";

  var visivel = document.getElementById("create");
  //var invisivel = document.getElementById("create");

  if (visivel.style.display !== "none") {
    visivel.style.display = "none";
    invisivel.style.display = "flex";
  } else {
    visivel.style.display = "flex";
    invisivel.style.display = "none";
  }
}
