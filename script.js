function atualizarRelogio() {
  var agora = new Date();
  var hora = agora.getHours();
  var minuto = agora.getMinutes();
  var segundo = agora.getSeconds();

  document.getElementById("hora").innerText = hora < 10 ? "0" + hora : hora;
  document.getElementById("minuto").innerText =
    minuto < 10 ? "0" + minuto : minuto;
  document.getElementById("segundo").innerText =
    segundo < 10 ? "0" + segundo : segundo;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
