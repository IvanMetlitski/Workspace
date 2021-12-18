'use strict'

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red',
    },
    makeTest: function () {
        console.log('Test complete')
    }
};
// let counter = 0;
//
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//         console.log(`Property ${i} have a value ${options[key][i]}`)
//             counter++
//         }
//     } else {
//         console.log(`Property ${key} have a value ${options[key]}`)
//         counter++
//     }
// }
// console.log(counter)

// console.log(Object.keys(options).length)

// options.makeTest();

const {border, background} = options.colors;

console.log(border);
