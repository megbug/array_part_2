// ============================= lvl_1_1 ====================================

    // declaring and assigning "getraenke" array

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

    // sorting getraenke array

// getraenke.sort();

    // declaring function "myDrinks" -> 1. console.log all elements of array | 2. transfer each element of array to index.html

// myDrinks = () => {
//     console.log(getraenke);

//     getraenke.forEach(elt => {
//         document.writeln(elt);
//     });
// }

    // function calling
// myDrinks();


// ============================= lvl_1_2 ====================================

    // declaring and assigning "getraenke2" array

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

    // declaring function "nameToUpperCase" -> return elements toUpperCase

// function nameToUpperCase(elt) {
//     return elt.toUpperCase();
// }

    // declare new array "upperDrinks" with map to make duplicate (but not change original array) and combine with function to automatically turn every element of new array toUpperCase outcome

// let upperDrinks = getraenke2.map(nameToUpperCase);
// console.log(upperDrinks);


// ============================= lvl_1_3 ====================================

    // declaring and assigning "array" array

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

    // declaring array "doubleResult" with map to make duplicate (but not change original array) and combine with function to return elements multiplied by 2

// let doubleResult = array.map((elt) => {
//     return elt * 2;
// });

    // sort array doubleResult and console.log

// doubleResult.sort((a, b) => a - b);

// console.log(doubleResult);

/// ============================= lvl_1_4 ====================================

    // declaring and assigning array "fahrenheit"

// let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

    // declaring array "celsius" with map and combine with function to return elements through converting equation and as typeof Number

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

    // declaring function "divide3()" ->for each element of array check: if element of Array can be divided by 3 add 100 to those elements; after that console.log result of element+100 and elements by itself

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
