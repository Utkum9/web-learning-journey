/*

JavaScript Veri Tipleri

  
     Primitif Veri Tipleri
      - String
      - Number 
      - boolen : true or false
      - Undefined
      - Null

      Referans Veri Tipleri
       - Object
       - Array
       - Function

*/

//Primitif Veri Tipleri Örnekleri

//let name = "Merhaba Benim Adým Mert"; =>String

//let number1 = 27;   let price = 19.99; => Number

//let isTrue = false;  => Boolen

//let myVar;  => Unfined

//let myVar; = null =>null;


//Referans Veri Tipi Örnekleri

//let person = {
//    name: "Mert",
//    age: 27,       => Object
//};


//let fruits = {"elma","muz","portakal"};  => array


//function greet(name) {
//    return 'Merhaba , $(name)';
//}


/*

   JavaScript Koþullu Ýfadeler


       - if
       - if .... else
       - else if
       - Koþullu (Ternary) Operatör
       - Switch

*/

//Örnekler

//let number = 5;

//if (number > 5) {
//    console.log("Sayý 5'ten büyüktür")
//}
//else if (number === 5) {
//    console.log("Sayý 5'e eþittir")     => if - else if - else
//}
//else {
//    console.log("Sayý 5'ten küçüktür")
//}


//let number = 7;

//let result = number > 5 ? "sayý 5'ten büyük," : "sayý 5'ten Büyük Deðil";

//console.log(result);         => Ternary


//let day = 3;

//switch (day) {

//    case 1:
//        console.log("Pazartesi");
//        break;

//    case 2:
//        console.log("Salý");
//        break;

//    case 3:
//        console.log("Çarþamba");
//        break;

//    default:
//        console.log("Geçersiz Gün");
//}