function JUMLAHKAN() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Mohon masukkan bilangan yang valid.");
    } else {
        var hasil = bilangan1 + bilangan2;
        alert("Hasil penjumlahan: " + hasil);
    }
}

function ULANG() {
    document.getElementById("bilangan1").value = "";
    document.getElementById("bilangan2").value = "";
}

