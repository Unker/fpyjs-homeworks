
function getPasswordChecker(password) {
    return function passwordChecker(userPassword) {
        return userPassword === password
    }
}

truePass = 'qwert'
checker = getPasswordChecker(truePass)
console.log(checker('fail'))
console.log(checker(1))
console.log(checker(truePass))