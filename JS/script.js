'use strict'

// function copy (mainObj) {
//     let objCopy = {};
//
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//
//         return objCopy;
//
// }

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: {
        z: 15,
        x: 30
    }
}

// const newObj = copy(numbers);
//
// console.log(newObj)

// const add = {
//     z: 15,
//     e: 23,
// }
//
// console.log(Object.assign(numbers,add))

// const clone = Object.assign({},numbers)
//
// clone.a = 33;
//
// console.log(numbers);
// console.log(clone)

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'fgfgfg'
//
// console.log(oldArray)
// console.log(newArray)

// const video = ['youtube', 'tiktok','rutube'],
//       blogs = ['wordpress', 'livejournal', 'twitter'],
//       internet = [...video,...blogs, 'vk','facebook'];
//
// console.log(internet)

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [3, 5, 6];
//
// log(...num);


const testArray = [1, 4, 5, 7];

const testedArray = [...testArray]
console.log(testedArray);

const objObj = {
    one: 1,
    two: 2,
    three: 3
}

const newObjObj = {...objObj};
console.log(newObjObj)
