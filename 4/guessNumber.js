const rl = require('readline').createInterface(process.stdin, process.stdout)

const numberToGuess = Math.floor(Math.random()*1000);
console.log('Загадано число', numberToGuess);
let nTryToGuess = 1;

function question() {

    rl.question(`Введите число от 0 до 999 или \'q\' для выхода. Попытка номер ${nTryToGuess}`, (cmd) => {
        // console.log('Введено', cmd);
        if (cmd == 'q') {
            rl.close();
            return
        }
        const num = (cmd===null)?NaN:+cmd;
        // console.log('Введено число', num);
        if(num === null || isNaN(num)) {
            console.log('Вы ввели не чило');
        } else if(num < 0 || num > 999) {
            console.log(`Число ${num} вне диапазона`);
        } else if(numberToGuess === num) {
            console.log(`Вы угадали с ${nTryToGuess} попытки`);
            rl.close();
            return
        } else if (num > numberToGuess) {
            console.log('Меньше');
        } else if (num < numberToGuess) {
            console.log('Больше');
        }

        nTryToGuess++;
        question();
    });
}

question();