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

function SIN() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    if (!isNaN(bilangan1)) {
        var sinValue = Math.sin(bilangan1);
        alert("Sin(" + bilangan1 + ") = " + sinValue);
    } else {
        alert("Mohon masukkan bilangan yang valid.");
    }
}

function COS() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    if (!isNaN(bilangan1)) {
        var cosValue = Math.cos(bilangan1);
        alert("Cos(" + bilangan1 + ") = " + cosValue);
    } else {
        alert("Mohon masukkan bilangan yang valid.");
    }
}

function TAN() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    if (!isNaN(bilangan1)) {
        var tanValue = Math.tan(bilangan1);
        alert("Tan(" + bilangan1 + ") = " + tanValue);
    } else {
        alert("Mohon masukkan bilangan yang valid.");
    }
}

function PANGKAT() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);
    
    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        var pangkatValue = Math.pow(bilangan1, bilangan2);
        alert(bilangan1 + " pangkat " + bilangan2 + " = " + pangkatValue);
    } else {
        alert("Mohon masukkan bilangan yang valid.");
    }
}

function LOG() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    
    if (!isNaN(bilangan1) && bilangan1 > 0) {
        var logValue = Math.log(bilangan1);
        alert("Log(" + bilangan1 + ") = " + logValue);
    } else {
        alert("Mohon masukkan bilangan yang valid dan lebih dari 0.");
    }
}

function KURANG() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        var kurangValue = bilangan1 - bilangan2;
        alert(bilangan1 + " - " + bilangan2 + " = " + kurangValue);
    } else {
        alert("Mohon masukkan bilangan yang valid.");
    }
}

function KALI() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        var kaliValue = bilangan1 * bilangan2;
        alert(bilangan1 + " x " + bilangan2 + " = " + kaliValue);
    } else {
        alert("Mohon masukkan bilangan yang valid.");
    }
}

function BAGI() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        if (bilangan2 !== 0) {
            var bagiValue = bilangan1 / bilangan2;
            alert(bilangan1 + " / " + bilangan2 + " = " + bagiValue);
        } else {
            alert("Pembagi tidak boleh nol.");
        }
    } else {
        alert("Mohon masukkan bilangan yang valid.");
    }
}
