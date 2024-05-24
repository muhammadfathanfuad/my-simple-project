// menghitung luas segitiga
document.getElementById("hasil").addEventListener("click", function () {
  var alas = document.getElementById("alas").value;
  var tinggi = document.getElementById("tinggi").value;
  var luas = 0.5 * alas * tinggi;
  document.getElementById("output").textContent = luas;
});

// menentukan nilai terbesar dari tiga nilai
function cariNilaiTerbesar() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  const angka3 = parseFloat(document.getElementById("angka3").value);

  const maksimum = Math.max(angka1, angka2, angka3);

  document.getElementById(
    "hasil2"
  ).textContent = `Nilai terbesar adalah: ${maksimum}`;
}

// menentukan nilai siswa dari inputan nilai tugas, uts, dan uas

function hitungNilai() {
  const tugas = parseFloat(document.getElementById("tugas").value);
  const uts = parseFloat(document.getElementById("uts").value);
  const uas = parseFloat(document.getElementById("uas").value);

  const nilaiAkhir = (tugas + uts + uas) / 3;

  let nilaiHuruf;
  if (nilaiAkhir >= 80) {
    nilaiHuruf = "A";
  } else if (nilaiAkhir >= 70) {
    nilaiHuruf = "B";
  } else if (nilaiAkhir >= 60) {
    nilaiHuruf = "C";
  } else {
    nilaiHuruf = "D";
  }

  const nilaiAkhirFormatted = nilaiAkhir.toFixed(2);

  document.getElementById(
    "hasil3"
  ).innerText = `${nilaiAkhirFormatted} (${nilaiHuruf})`;
}

// Menentukan angka ganjil atau genap

function cekGanjilGenap() {
  const bilanganInput = document.getElementById("input").value;
  const hasilOutput = document.getElementById("hasil4");

  if (bilanganInput % 2 === 0) {
    hasilOutput.innerText = "Bilangan Genap";
  } else {
    hasilOutput.innerText = "Bilangan Ganjil";
  }
}

// harga tiket

function hitungTotal() {
  var tujuan = document.getElementById("tujuan").value;
  var kelas = document.getElementById("kelas").value;
  var jumlah = document.getElementById("jumlah").value;
  var harga = 0;
  var total = 0;

  if (tujuan == 1) {
    if (kelas == "E") {
      harga = 1000000;
    } else {
      harga = 1500000;
    }
  } else {
    if (kelas == "E") {
      harga = 2000000;
    } else {
      harga = 2500000;
    }
  }

  total = harga * jumlah;
  document.getElementById("hasil5").innerText = "Total Harga: " + total;
}