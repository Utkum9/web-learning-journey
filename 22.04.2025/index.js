// JavaScript Fonksiyonlar




//function hello() {
//    console.log("Merhaba D�nya");
//}

////fonksiyon �a��rma
//hello();


//const hello = function() {
//    console.log("Selam");
//}
//hello();

//fonksiyon nedir: Yaz�l�mda fonksiyon, belirli bir g�revi yerine getiren, tekrar kullan�labilir bir kod blo�udur.Genellikle bir ismi olur, ihtiyaca g�re girdi(parametre) alabilir ve bazen de bir ��kt�(return de�eri) d�ner.


//function sum(a, b) {
//    return a + b;
//}

//let result = sum(4, 5);

//console.log(result);

//const sum = (a,b) => {
//    return a + b;
//}

//console.log(sum(4, 5));

//Not: JavaScript�te fonksiyonlar, belirli bir i�levi yerine getiren ve tekrar kullan�labilen kod bloklar�d�r; genellikle function anahtar kelimesiyle tan�mlan�r veya okunan fonksiyon(arrow function) �eklinde yaz�labilir.
//function hello(name = "Mert") {
//    console.log("Merhaba , $(name)");
//}
//hello();
//hello("Ahmet");


//not: Fonksiyonlar, d��ar�dan veri almak i�in parametreler al�r ve �a�r�ld���nda bu parametreler arg�manlarla doldurulur.Varsay�lan parametreler atayarak belirli durumlarda kullan�labilir; ayr�ca fonksiyonlar i�inde ba�ka fonksiyonlar tan�mlamak da m�mk�nd�r.


// JavaScript D�ng�ler

// forr loop

//for (let i = 0; i < 10; i++) {
//    console.log(i);
//}

//not: for d�ng�s�, yaz�l�mda bir i�lemi belirli say�da ya da belirli bir dizi �zerinde tekrar tekrar yapmak i�in kullan�l�r.

//for (let i = 1; i < 10; i++) {
//    if (i==3) {
//        console.log('en sevdi�im rakam' + i);
//        continue;
//    }
//    if (i==6) {
//        console.log('en sevmedi�im rakam : 6');
//        break;
//    }
//}
//console.log(i);


//while loop

//let i = 0;
//while (i<10) {
//    console.log(i);
//    i++;
//}

//Not: Yani, d�ng�ye verdi�in �art(ko�ul) do�ru oldu�u s�rece d�ng� �al��maya devam eder.
//Ko�ul False(yanl��) oldu�unda d�ng� biter.

//do-While loop

//let i = 0;
//do {
//    console.log(i);
//    i++;
//} while (i<10);


//�rnekler

//sifre = "";

//while sifre != "1234":
//    sifre = input("�ifreyi girin: ");

//print("Giri� ba�ar�l�!");

//let val = '';
//for (let i = 0; i < 10; i++) {

//    for (let j = 0; j < 10; j++) {
//        val += '*'
//    }
//}
//console.log(val);
