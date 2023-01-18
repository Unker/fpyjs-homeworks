const numberToGuess = Math.floor(Math.random()*1000);
console.log('Загадано число', numberToGuess);

let nTryToGuess = 1;
let isQuit = 0;

while(!isQuit) {
    
    let numberFromUser = prompt(`Введите число от 0 до 999. Попытка номер ${nTryToGuess}`);
    console.log('Введено', numberFromUser);
    const num = (numberFromUser===null)?NaN:+numberFromUser;
    console.log('Число', num);

    if(num === null) {
        continue;
    } else if(isNaN(num)) {
        alert('Вы ввели не чило');
        continue;
    } else if(num < 0 || num > 999) {
        alert(`Число ${num} вне диапазона`);
        continue;
    } else if(numberToGuess === num) {
        alert(`Вы угадали с ${nTryToGuess} попытки`);
        nTryToGuess = 1;
    } else {
        alert('Мимо!');
    }

    nTryToGuess++;
    isQuit = !confirm("Продолжим угадывать?");
}

alert('До встречи!');