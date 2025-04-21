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

//Primitif Veri Tipleri �rnekleri

//let name = "Merhaba Benim Ad�m Mert"; =>String

//let number1 = 27;   let price = 19.99; => Number

//let isTrue = false;  => Boolen

//let myVar;  => Unfined

//let myVar; = null =>null;


//Referans Veri Tipi �rnekleri

//let person = {
//    name: "Mert",
//    age: 27,       => Object
//};


//let fruits = {"elma","muz","portakal"};  => array


//function greet(name) {
//    return 'Merhaba , $(name)';
//}


/*

   JavaScript Ko�ullu �fadeler


       - if
       - if .... else
       - else if
       - Ko�ullu (Ternary) Operat�r
       - Switch

*/

//�rnekler

//let number = 5;

//if (number > 5) {
//    console.log("Say� 5'ten b�y�kt�r")
//}
//else if (number === 5) {
//    console.log("Say� 5'e e�ittir")     => if - else if - else
//}
//else {
//    console.log("Say� 5'ten k���kt�r")
//}


//let number = 7;

//let result = number > 5 ? "say� 5'ten b�y�k," : "say� 5'ten B�y�k De�il";

//console.log(result);         => Ternary


//let day = 3;

//switch (day) {

//    case 1:
//        console.log("Pazartesi");
//        break;

//    case 2:
//        console.log("Sal�");
//        break;

//    case 3:
//        console.log("�ar�amba");
//        break;

//    default:
//        console.log("Ge�ersiz G�n");
//}