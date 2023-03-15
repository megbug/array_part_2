// ============================= lvl_1_1 ====================================

// let getraenke = [
//     "Coca-Cola",
//     "Apfelsaft",
//     "Pepsi",
//     "Traubensaft",
//     "Sprite",
//     "Orangensaft",
//     "Red Bull Energy Drink",
//     "Fanta"
// ]

// getraenke.sort();

// let myDrinksArr = getraenke.slice();

// console.log(myDrinksArr);

// myDrinks = () => {
//     console.log(myDrinksArr);

//     myDrinksArr.forEach(elt => {
//         document.writeln(elt);
//     });
// }

// myDrinks();


// ============================= lvl_1_2 ====================================

// let getraenke2 = [
//     "Coca-Cola",
//     "Apfelsaft",
//     "Pepsi",
//     "Traubensaft",
//     "Sprite",
//     "Orangensaft",
//     "Red Bull Energy Drink",
//     "Fanta"
// ]

// // console.log(getraenke2);

// function nameToUpperCase(elt) {
//     return elt.toUpperCase();
// }

// let upperDrinks = getraenke2.map(nameToUpperCase);
// console.log(upperDrinks);


// ============================= lvl_1_3 ====================================

// let array = [
//     18,
//     16,
//     80,
//     51,
//     47,
//     38,
//     95,
//     42,
//     68,
//     61,
//     34,
//     51,
//     20,
//     17,
//     56,
//     31,
//     100,
//     6,
//     5,
//     30,
//     74,
//     97,
//     28,
//     99,
//     91,
//     27,
//     73,
//     12,
//     92,
//     6,
//     27,
//     71,
//     26,
//     15,
//     78
// ];

// let doubleResult = array.map((elt) => {
//     return elt * 2;
// });

// doubleResult.sort((a, b) => a - b);

// console.log(doubleResult);

/// ============================= lvl_1_4 ====================================

// let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// let celsius = fahrenheit.map((elt) => {
//     return Number((elt -32)/1.8).toFixed();
// })

// console.log(celsius);

// ============================= lvl_1_5 ====================================

// let checkNumber = [
//     18,
//     16,
//     80,
//     51,
//     47,
//     38,
//     95,
//     42,
//     68,
//     61,
//     34,
//     51,
//     20,
//     17,
//     56,
//     31,
//     100,
//     6,
//     5,
//     30,
//     74,
//     97,
//     28,
//     99,
//     91,
//     27,
//     73,
//     12,
//     92,
//     6,
//     27,
//     71,
//     26,
//     15,
//     78
// ];

// const divide3 = () => {
//     checkNumber.forEach(elt => {
//         if (elt % 3 === 0) {
//             let result = elt + 100;
//             console.log(result);
//         } 
//         else {
//             console.log(elt);
//         }
//     });
// }

// divide3();
