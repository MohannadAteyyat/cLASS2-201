' use strict';


function firstOne(){
alert('Hello we are going to play a guess game')
let myOld = Number(prompt('How old I\'m I ?'))





for (let i = 0; i <= 3; i++) {
    
    while (!myOld) { alert('Please Enter a number'), myOld = Number(prompt('How old I\'m I ?, writ only numbers'))
    ,console.log('How old I\'m I ?' + myOld) }
    
    if (myOld < 20) {
        alert('Too Low')
        myOld = Number(prompt('How old I\'m I ?'))
        console.log('How old I\'m I ?' + myOld)
    } else if (myOld > 35) {
        alert('Too High')
        myOld = Number(prompt('How old I\'m I ?'))
        console.log('How old I\'m I ?' + myOld)
    }
    else if (myOld == 29) { alert('Great this is the correct answer') 
    console.log('How old I\'m I ?' + myOld)
break;
}
    else {
        myOld = prompt('No wrong try one more time');
        
    }
}
console.log('How old I\'m I ?' + myOld)
alert('My old is 29, wish me a happy life')

}
  firstOne();

  function secondOne(){
      let birthYear=Number (prompt('What year I was porn?'))
      console.log('How old I\'m I ?' + birthYear)

      
      for (let i = 0; i < 3; i++) {
          
    while (!birthYear) { alert('Please Enter a number'), birthYear = Number(prompt('What year I was porn?, writ only numbers'))
    ,console.log('What year I was porn?' + birthYear) }
    
    if (birthYear < 1985) {
        alert('Too old for that')
        birthYear = Number(prompt('What year I was porn?'))
        console.log('What year I was porn?' + birthYear)
    } else if (birthYear > 1997) {
        alert('Too young for that')
        birthYear = Number(prompt('What year I was porn?'))
        console.log('What year I was porn?' + birthYear)
    }
    else if (birthYear == 1993) { alert('Great this is the correct answer') 
    break;
    console.log('What year I was porn?' + birthYear)}
    else {
        birthYear = prompt('No wrong try one more time');
        
    }
}
console.log('How old I\'m I ?' + birthYear)
alert('I porned in 1993, whish me a happy life')
}
secondOne();
function therrdOne(){
    let myGrade=Number (prompt('what is my high school grade?'))
    console.log('what is my high school grade?' + myGrade)
    
    
    for (let i = 0; i < 3; i++) {
        
        while (!myGrade) { alert('Please Enter a number'), myGrade = Number(prompt('what is my high school grade?, write only numbers'))
        ,console.log('what is my high school grade?' + myGrade) }
        
        if (myGrade < 50) {
            alert('Too low for me')
            myGrade = Number(prompt('what is my high school grade?'))
            console.log('what is my high school grade?' + myGrade)
        } else if (myGrade > 95) {
            alert('More than what I desirve')
            myGrade = Number(prompt('what is my high school grade?'))
            console.log('what is my high school grade?' + myGrade)
        }
        else if (myGrade == 85) { alert('Great this is the correct answer') 
        break;
        console.log('what is my high school grade?' + myGrade)}
        else {
            myGrade = prompt('No wrong try one more time');
            
        }
    }
    console.log('what is my high school grade?' + myGrade)
    alert('My grade in hugh school is 85')
}
therrdOne();
function fourthOne(){
    let mycollege=Number (prompt('what is my college  grade?'))
    console.log('what is my college grade?' + mycollege)
    
    for (let i = 0; i < 3; i++) {
        
        while (!mycollege) { alert('Please Enter a number'), mycollege = Number(prompt('what is my college  grade?, write only numbers'))
        ,console.log('what is my college  grade?' + mycollege) }
        
        if (mycollege < 50) {
            alert('Too low for me')
            mycollege = Number(prompt('what is my college  grade?'))
            console.log('what is my college  grade?' + mycollege)
        } else if (mycollege > 95) {
            alert('More than what I desirve')
            mycollege = Number(prompt('what is my college  grade?'))
            console.log('what is my college  grade?' + mycollege)
        }
        else if (mycollege == 85) { alert('Great this is the correct answer') 
        break;
        console.log('what is my college  grade?' + mycollege)}
        else {
            mycollege = prompt('No wrong try one more time');
            
    }
}
console.log('what is my college  grade?' + mycollege)
alert('My coolege grade is 85')
}
fourthOne();

function fivethOne(){
let gradYear=Number (prompt('what year I graduated from college?'))
console.log('what year I graduated from college?' + gradYear)

for (let i = 0; i < 3; i++) {

    while (!gradYear) { alert('Please Enter a number'), gradYear = Number(prompt('what year I graduated from college?, write only numbers'))
    ,console.log('what year I graduated from college?' + gradYear) }

    if (gradYear < 2000) {
        alert('Too early for me to graduate')
        gradYear = Number(prompt('what year I graduated from college?'))
        console.log('what year I graduated from college?' + gradYear)
    } else if (gradYear > 2020) {
        alert('Too close for me to graduate')
        gradYear = Number(prompt('what year I graduated from college?'))
        console.log('what year I graduated from college?' + gradYear)
    }
    else if (gradYear == 2017) { alert('Great this is the correct answer') 
    break;
    console.log('what year I graduated from college?' + gradYear)}
    else {
        gradYear = prompt('No wrong try one more time');

    }
}
console.log('what year I graduated from college?' + gradYear)
alert('I graduated 2017')

let brothersNum=Number (prompt('How many brothers I have'))
console.log('How many brothers I have?' + brothersNum)

for (let i = 0; i < 3; i++) {
    
    while (!brothersNum) { alert('Please Enter a number'), brothersNum = Number(prompt('How many brothers I have, write only numbers'))
    ,console.log('How many brothers I have' + brothersNum) }
    
    if (brothersNum > 10) {
        alert('Too larg for my family')
        brothersNum = Number(prompt('How many brothers I have'))
        console.log('How many brothers I have' + brothersNum)
    } else if (brothersNum < 4) {
        alert('Too small for my family')
        brothersNum = Number(prompt('How many brothers I have'))
        console.log('How many brothers I have' + brothersNum)
    }
    else if (brothersNum == 6) { alert('Great this is the correct answer') 
    break;
    console.log('How many brothers I have' + brothersNum)}
    else {
        brothersNum = prompt('No wrong try one more time');
        
    }
}
console.log('How many brothers I have' + gradYear)
alert('My brothers number is 6 ')
}
fivethOne();

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

/*let qus1=prompt('Who is your favourite student in 201 class')
console.log('Who is your favourite student in 201 class' + qus1 )



let qus = prompt('Who is your favourite student in 201 class')
let score = 0

let qus = ['ahmad', 'mohammad', 'khaled', 'hasan', 'hanan', 'husam']

for (let k = 0; k <= 5; k++) {
    let qus1 = prompt('Who is your favourite student in 201 class')
    
    for (let e = 0; e < qus.length; e++) {
        
        if (qus1 == qus[i]) {
            alert('This is a correct answer')
            score++
            k = 6
            break;
        } 
        
    }
    */
    
 /*
  if(!qus[i]){
      alert('your answer is wrong')
  }
            
}
alert('All correct possible answer is: ahmad mohammad khaled hassan hanan husam ')


*/











/*
switch (qus.toLocaleLowerCase()) {
    case 'qus[i]': prompt('great you answered croectly')

        break;
    case '!qus': alert('You\'r answer is wrong')
    break;
    default:alert('try again')
        break;
}










    }
}

alert('The corect answers is');

*/
/*
 switch (ansWer) {
        case qus[i]:
            alert(' Great You\'r answer is correct')

            break;

        default: alert('Your answer is incorect please try again'),
            ansWer = prompt('Who is your favourite student in 201 class')
            break;
    }
    */




















/*
if (qus[i] == ansWer) {
    alert(' Great You\'r answer is correct')
    break;


} else (qus[i] !== 'answer'); {
    alert('Your answer is incorect please try again'),
    ansWer = prompt('Who is your favourite student in 201 class')


}
*/




















/*let qus = ['ahmad', 'mohammad', 'kaled', 'hasan', 'hanan', 'husam', 'suahib', 'ola', 'reem', 'ro\'a', 'leen', ' rand', 'reham']
for (let i = 0; i < qus.length; i++) {

    let qus1 = prompt('Who is your favourite student in 201 class')

    if (qus1 !== qus) {
        alert('You\'r gues is wrong , try again please'), qus1 = prompt('Who is your favourite student in 201 class?')

    }

    else (qus1 === qus); {
        alert('You answered correctly'), console.log('Who is your favourite student in 201 class' + qus1)
    }


    else {
        alert('you\rr answer is wrong')

    }



}
*/


/*

switch (qus1.toLocaleLowerCase()) {
        case 'qus': prompt('great you answered croectly')

            break;
        case '!qus': alert('You\'r answer is wrong')

        default:prompt('try again')
            break;
    }
}
*/






