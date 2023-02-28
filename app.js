let userName = prompt('Как вас зовут?');
let userAge = +prompt('Когда вы родились?');
let currentAge = +prompt('Какой сейчас год?');

while(userAge >= currentAge || isNaN(userAge) || isNaN(currentAge)){
    userAge = +prompt('Когда вы родились?');
    currentAge = +prompt('Какой сейчас год?');
}

function userCurrentAge(userName, userAge, currentAge){
 
 
    let userCurAge = currentAge - userAge;

      
    return 'Вас зовут ' + userName + ', вам ' + userCurAge + ' лет'
}


alert(userCurrentAge(userName, userAge, currentAge))