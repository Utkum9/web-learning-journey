// JavaScript Fonksiyonlar




//function hello() {
//    console.log("Merhaba Dünya");
//}

////fonksiyon çaðýrma
//hello();


//const hello = function() {
//    console.log("Selam");
//}
//hello();

//fonksiyon nedir: Yazýlýmda fonksiyon, belirli bir görevi yerine getiren, tekrar kullanýlabilir bir kod bloðudur.Genellikle bir ismi olur, ihtiyaca göre girdi(parametre) alabilir ve bazen de bir çýktý(return deðeri) döner.


//function sum(a, b) {
//    return a + b;
//}

//let result = sum(4, 5);

//console.log(result);

//const sum = (a,b) => {
//    return a + b;
//}

//console.log(sum(4, 5));

//Not: JavaScript’te fonksiyonlar, belirli bir iþlevi yerine getiren ve tekrar kullanýlabilen kod bloklarýdýr; genellikle function anahtar kelimesiyle tanýmlanýr veya okunan fonksiyon(arrow function) þeklinde yazýlabilir.
//function hello(name = "Mert") {
//    console.log("Merhaba , $(name)");
//}
//hello();
//hello("Ahmet");


//not: Fonksiyonlar, dýþarýdan veri almak için parametreler alýr ve çaðrýldýðýnda bu parametreler argümanlarla doldurulur.Varsayýlan parametreler atayarak belirli durumlarda kullanýlabilir; ayrýca fonksiyonlar içinde baþka fonksiyonlar tanýmlamak da mümkündür.


// JavaScript Döngüler

// forr loop

//for (let i = 0; i < 10; i++) {
//    console.log(i);
//}

//not: for döngüsü, yazýlýmda bir iþlemi belirli sayýda ya da belirli bir dizi üzerinde tekrar tekrar yapmak için kullanýlýr.

//for (let i = 1; i < 10; i++) {
//    if (i==3) {
//        console.log('en sevdiðim rakam' + i);
//        continue;
//    }
//    if (i==6) {
//        console.log('en sevmediðim rakam : 6');
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

//Not: Yani, döngüye verdiðin þart(koþul) doðru olduðu sürece döngü çalýþmaya devam eder.
//Koþul False(yanlýþ) olduðunda döngü biter.

//do-While loop

//let i = 0;
//do {
//    console.log(i);
//    i++;
//} while (i<10);


//Örnekler

//sifre = "";

//while sifre != "1234":
//    sifre = input("Þifreyi girin: ");

//print("Giriþ baþarýlý!");

//let val = '';
//for (let i = 0; i < 10; i++) {

//    for (let j = 0; j < 10; j++) {
//        val += '*'
//    }
//}
//console.log(val);
