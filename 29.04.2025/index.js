// Diziler

// ALT GR + 8 VE 9
//ArrayIndexOutOFBoundException hatas� dizide olamayan bir �eyi �a��rd���nda bu hatay� al�rs�n ama javascriptte undefined hatas� gelir

/*let sayilar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Ali"]; *///index numaralar�na g�re s�ralan�yor 0 1 2 3 diye say�l�yor normal say� sayma gibi de�il

/*console.log(sayilar[6]);*/

//sayilar[10]="Mehmet" ali ile mehmeti de�i�tirme
//sayilar[sayilar.length-1]dizinin en sonu


//let isimler = ["Enes", "K�bra", "Bilal", "Yusuf"];
//isimler[2] = "Yakup";
//console.log(isimler);



//let karisikDizi = [1, "Enes", 5.7, true, null, undefined];
//console.log(karisikDizi[3]);

//OBJECT

//const araba = {
//    marka: "Toyota",
//    model: "Corolla",
//    yil: 2020,
//    calistir: function () {
//        console.log("Araba �al��t�!");
//    }
//};

//console.log(araba.marka);
//araba.calistir();

//const kisi = new Object();
//kisi.ad = "Ahmet";
//kisi.yas = 25;

//console.log(kisi.ad);

//const kitap = {
//    ad: "1984",
//    yazar: "George Orwell"
//};

//console.log(kitap["ad"]);
//console.log(kitap.yazar);

//const ogrenci = {
//    isim: "Ay�e",
//    sinif: 10,
//    bilgileriYazdir: function () {
//        console.log(`${this.isim}, ${this.sinif}. s�n�fta.`);
//    }
//};

//ogrenci.bilgileriYazdir();

//const sehir = {
//    isim: "�stanbul",
//    nufus: 16000000,
//    bolge: "Marmara"
//};

//for (let key in sehir) {
//    console.log(`${key}: ${sehir[key]}`);
//}

//const meyve = {
//    ad: "Elma",
//    renk: "K�rm�z�"
//};

//console.log(Object.keys(meyve)); // ["ad", "renk"]
//console.log(Object.values(meyve)); // ["Elma", "K�rm�z�"]
//console.log(Object.entries(meyve)); // [["ad", "Elma"], ["renk", "K�rm�z�"]]

//Al��t�rma


//const sayilar = [4, 12, 9, 7, 22];

//const kucukler = sayilar.filter(function (sayi) {
//    return sayi < 10;
//});

//console.log(kucukler); 



//const sayilar = [15, 6, 22, 3, 19];

//const enBuyuk = Math.max(...sayilar);
//console.log(enBuyuk); 


//const kisi = {
//    ad: "Ay�e",
//    yas: 30
//};

//kisi.yas++;
//console.log(kisi.yas); 


//const kisiler = [
//    { ad: "Ali", yas: 25 },
//    { ad: "Veli", yas: 30 },
//    { ad: "Can", yas: 22 }
//];

//kisiler.forEach(function (kisi) {
//    console.log(`${kisi.ad} - ${kisi.yas} ya��nda`);
//});



//const kisiler = [
//    { ad: "ahmet" },
//    { ad: "ay�e" },
//    { ad: "mehmet" }
//];

//const buyukHarf = kisiler.map(function (kisi) {
//    return kisi.ad.toUpperCase();
//});

//console.log(buyukHarf); 

