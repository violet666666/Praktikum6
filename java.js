document.getElementById("myButton").onclick = function() {
    var Nama = document.getElementById("idNama").value;
    var Kategori = document.getElementById("idKategori").value;
    var Pemakaian = document.getElementById("idPemakaian").value;

    if (Pemakaian > 30) {
        Pemakaian = 0;
        alert("Jumlah hari tidak valid");


    } else if (Nama == "" || Pemakaian == "") {
        Pemakaian = 0;
        alert("fields nama_fields harus diisi!");
    }

    document.getElementById("showNama").innerHTML = Nama;
    document.getElementById("showKategori").innerHTML = Kategori;
    document.getElementById("showPemakaian").innerHTML = Pemakaian;

    var totaltarif = 0;
    var tarif = 0;
    var abodemen = 0;
    var subtotal = 0;
    var pajak = 0;

    if (Kategori == "Sosial") {
        tarif = 300;
        abodemen = 10000;
        pajak = 0;
    } else if (Kategori == "Rumah") {
        tarif = 500;
        abodemen = 30000;
        pajak = 10;
    } else if (Kategori == "Apartemen") {
        tarif = 750;
        abodemen = 50000;
        pajak = 15;
    } else if (Kategori == "Industri") {
        tarif = 1000;
        abodemen = 750000;
        pajak = 20;
    } else {
        tarif = 1250;
        abodemen = 100000;
        pajak = 25;
    }

    var output = "";

    output += "<tr>";
    output += "<td> Nomor </td>";
    output += "<td> Tarif Per KWH </td>";
    output += "<td> Abodemen </td>";
    output += "<td> SubTotal </td>";
    output += "</tr>";

    for (var i = 1; i <= Pemakaian; i++) {
        totaltarif = totaltarif + tarif;
        subtotal = totaltarif + abodemen;
        output += "<tr>";
        output += "<td>" + i + "</td>";
        output += "<td>" + totaltarif + "</td>";
        output += "<td>" + abodemen + "</td>";
        output += "<td>" + subtotal + "</td>";
        output += "</tr>"

    }
    var totalpajak = (subtotal * pajak) / 100;

    document.getElementById("Nomor").innerHTML = output;
    document.getElementById("idSubTotal").innerHTML = subtotal;
    document.getElementById("idPajak").innerHTML = totalpajak;
    document.getElementById("idPembayaran").innerHTML = (subtotal + totalpajak);


}