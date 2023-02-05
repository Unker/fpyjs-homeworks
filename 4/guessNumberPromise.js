const rl = require('readline').createInterface(process.stdin, process.stdout)

async function question(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (cmd) => {
            resolve(cmd); 
        });  
    })
}

async function _process (cmd, nTryToGuess) {
 
}

async function input() {
    const numberToGuess = Math.floor(Math.random()*1000);
    console.log('Загадано число', numberToGuess);
    let nTryToGuess = 1;
    let result
    while(true) {
        result = undefined
        const data = await question(`Введите число от 0 до 999 или \'q\' для выхода. Попытка номер ${nTryToGuess}\n`);
        if (data == 'q') {
            rl.close();
            break
        }
        const num = (data===null)?NaN:+data;
        // console.log('Введено число', num);
        if(num === null || isNaN(num)) {
            result = 'Вы ввели не чило';
        } else if(num < 0 || num > 999) {
            result = `Число ${num} вне диапазона`;
        } else if(numberToGuess === num) {
            result = `Вы угадали с ${nTryToGuess} попытки`;
            break
        } else if (num > numberToGuess) {
            result = 'Меньше';
        } else if (num < numberToGuess) {
            result = 'Больше';
        }
        console.log(result)
        nTryToGuess++;
    }
    if (result) console.log(result)
    rl.close();
    return
}

input();