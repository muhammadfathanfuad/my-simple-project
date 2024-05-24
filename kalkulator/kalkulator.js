var btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  var angkaPertama = document.querySelector("#pertama").value;
  var angkaKedua = document.querySelector("#kedua").value;
  var operasi = document.querySelector("#ketiga").value;
  var hasil;

  if (operasi == "+") {
    hasil = parseInt(angkaPertama) + parseInt(angkaKedua);
  } else if (operasi == "*") {
    hasil = parseInt(angkaPertama) * parseInt(angkaKedua);
  } else if (operasi == "/") {
    hasil = parseInt(angkaPertama) / parseInt(angkaKedua);
  } else if (operasi == "-") {
    hasil = parseInt(angkaPertama) - parseInt(angkaKedua);
  } else {
    console.log("Goblok mana ada tolol");
  }

  document.querySelector("#hasil").innerText = hasil;
});
