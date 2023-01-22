function getPrimeNumbers(amount) {
    const n = (amount===null)?NaN:+amount;
    console.log(`n=${n}`);
    const isValidAmount = Number.isInteger(n) & n > 0;
    if(!isValidAmount) {
        console.error(`${amount} is not valid amount`);
        return;
    } else {
        let res = [];
        let number = 0;
        do {
            number++;
            let cnt = number-1;
            let isPrime = true;
            while(cnt>1) {
                if(number%cnt === 0) {
                    isPrime = false;
                    break;  
                } 
                cnt--;
            };
            if(isPrime) {
                res.push(number);
            }
        } while(res.length<amount);
        return res;
    }
}

console.log(getPrimeNumbers(process.argv[2]))