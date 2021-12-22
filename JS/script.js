'use strict'

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello')
    }
}

const john = Object.create(soldier)

john.sayHello();
