let max = +prompt('Введите максимальный диапозон');
let min = +prompt('Введите минимальный диапозон');


function random(num1, num2) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

for (let i = 0; i < 6; i++) {
    let randomNumber1 =  random(max, min) 
    let randomNumber2 =  random(max, min) 
    let task = alert(`${randomNumber1} + ${randomNumber2} = ?`);
    let userAnswer = +prompt('Ваш ответ ?')
    let correctAnswer = `${randomNumber1 + randomNumber2}`
    let check = userAnswer == correctAnswer ?'Верно, вы молодец! ' :`Неверно, правильный ответ: ${correctAnswer} `

    alert(check)


    randomNumber1 =  random(max, min) 
    randomNumber2 =  random(max, min) 
    task = alert(`${randomNumber1} - ${randomNumber2} = ?`);
    userAnswer = +prompt('Ваш ответ ?')
    correctAnswer = `${randomNumber1 - randomNumber2}`
    check = userAnswer == correctAnswer ?'Верно, вы молодец! ' :`Неверно, правильный ответ: ${correctAnswer} `
    alert(check)
    
    randomNumber1 =  random(max, min) 
    randomNumber2 =  random(max, min) 
    task = alert(`${randomNumber1} * ${randomNumber2} = ?`);
    userAnswer = +prompt('Ваш ответ ?')
    correctAnswer = `${randomNumber1 * randomNumber2}`
    check = userAnswer == correctAnswer ?'Верно, вы молодец! ' :`Неверно, правильный ответ: ${correctAnswer} `
    alert(check)

    randomNumber1 =  random(max, min) 
    randomNumber2 =  random(max, min) 
    task = alert(`${randomNumber1} / ${randomNumber2} = ?`);
    userAnswer = +prompt('Ваш ответ ?')
    correctAnswer = `${randomNumber1 / randomNumber2}`
    check = userAnswer == correctAnswer ?'Верно, вы молодец! ' :`Неверно, правильный ответ: ${correctAnswer} `

    alert(check)

    
}