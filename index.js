const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const password1 = document.querySelector('.password-1')
const password2 = document.querySelector('.password-2')
const generatePasswordBtn = document.getElementById('generate-password')

generatePasswordBtn.addEventListener('click', function () {
    generatePassword()
})

function generatePassword() {
    let randomPassword1 = ''
    let randomPassword2 = ''
    for(let i = 0; i < 21; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        randomPassword1 += characters[randomIndex]
        password1.textContent = randomPassword1
    }
    for(let i = 0; i < 21; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        randomPassword2 += characters[randomIndex]
        password2.textContent = randomPassword2
    }
}

