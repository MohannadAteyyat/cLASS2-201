' use strict';
let userName = prompt('Hello, could you please type your name?')
alert('Hello' +' ' + userName + ' we are going to play a guess game')
console.log('uSERnAME :'+ userName)

let score = 0

alert('Welcome to my humble page'+' '+ userName +' '+ 'please answer the following questions')

let qus1 = prompt( 'Q1-Do you think that im a software developer?')
console.log('Do you think that im a software developer? :'+ qus1)
switch (qus1.toLowerCase()) {
    case 'yes':
        case 'y':
            alert('You answered corectly well done.')
        document.write('<h1>' + 'Q1-Do you think that im a software developer?' + '  ' + 'yes'+'</h1>')
        score++
        break;
    case 'no':
        case 'n':
            alert('Sorry You\'r answer is wrong keep trying.')
        document.write('<h1>' + 'Do you think that im a software developer?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>' + 'Q1-'+'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}

let qus2 = prompt('Q2-Do you think that I can do it with this course?');
console.log('Do you think that I can do it with this course? :'+ qus2)
switch (qus2.toLowerCase()) {
    case 'yes':
        case 'y':
            alert('You answered corectly well done.')
        document.write('<h1>' + 'Q2-Do you think that I can do it with this course?' + '  ' + 'yes'+'</h1>')
        score++
        break;
        case 'no':
            case 'n':
                alert('Sorry You\'r answer is wrong keep trying.')
        document.write('<h1>' + 'Q2-Do you think that I can do it with this course?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>' + 'Q2-'+'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}

let qus3 = prompt('Q3-Do you think that I can understand what Bra\'ah saying?');
console.log('Do you think that I can understand what Bra\'ah saying? :'+ qus3)
switch (qus3.toLowerCase()) {

    case 'yes':
        case 'y':
      alert('Sorry You\'r answer is wrong keep trying.')
        document.write('<h1>' + 'Q3-Do you think that I can understand what Bra\'ah saying?' + '  ' + 'no'+'</h1>')

        break;
        case 'no':
            case 'n':
                
        alert('You answered corectly well done.')
        document.write('<h1>' + 'Q3-Do you think that I can understand what Bra\'ah saying?' + '  ' + 'yes'+'</h1>')
        score++
        break;
    default:
        document.write('<h1>' + 'Q3-'+'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}

let qus4 = prompt('Q4-Can you provide help to me?');
console.log('Can you provide help to me? :'+ qus4)
switch (qus4.toLowerCase()) {

    case 'yes':
        case 'y':
            alert('You answered corectly well done.')
        document.write('<h1>' + 'Q4-Can you provide help to me?' + '  ' + 'yes'+'</h1>')
        score++
        break;
        case 'no':
            case 'n':
                alert('Sorry You\'r answer is wrong keep trying.')
        document.write('<h1>' + 'Q4-Can you provide help to me?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>' + 'Q4-'+ 'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}

let qus5 = prompt('Q5-Do I live in Jordan?');
console.log('Do I live in Jordan?:'+ qus5)
switch (qus5.toLowerCase()) {

    case 'yes':
        case 'y':
            alert('You answered corectly well done.')
        document.write('<h1>'+'Q5-Do I live in Jordan?' + '  ' + 'yes'+'</h1>')
        score++
        break;
        case 'no':
            case 'n':
                alert('Sorry You\'r answer is wrong keep trying.')
        document.write('<h1>'+'Q5-Do I live in Jordan?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>'+'Q5-'+'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}
alert('Great'+' '+ userName +' ' + 'your answers are shown in the page please inbox me by pressing contact, thank you')


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function firstOne() {
    
    let myOld = Number(prompt('How old I\'m I ?'))

    for (let i = 0; i <= 3; i++) {

        while (!myOld) {
            alert('Please Enter a number'), myOld = Number(prompt('How old I\'m I ?, writ only numbers'))
                , console.log('How old I\'m I ?' + myOld)
        }

        if (myOld < 20) {
            alert('Too Low')
            myOld = Number(prompt('How old I\'m I ?'))
            console.log('How old I\'m I ?' + myOld)
        } else if (myOld > 35) {
            alert('Too High')
            myOld = Number(prompt('How old I\'m I ?'))
            console.log('How old I\'m I ?' + myOld)
        }
        else if (myOld == 29) {
            alert('Great this is the correct answer')
            score++
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


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





let qus = ['ahmad', 'mohammad', 'kaled', 'hasan', 'hanan', 'husam', 'suahib', 'ola', 'reem', 'ro\'a', 'leen', ' rand', 'reham']
for (let j = 0; j < 6; j++) {
    let qus1 = prompt('Who is my favourite student in 201 class', 'ahmad, mohammad, kaled, hasan, hanan, husam, suahib, ola, reem, ro\'a, leen,  rand, reham')
    console.log('Who is my favourite student in 201 class' + qus1)
    for (let i = 0; i <= qus.length; i++) {
        if (qus1 === qus[i]) {
            alert('You answered correctly'), console.log('Who is my favourite student in 201 class' + qus1)
            j = 7
            score++
            break;
        }
    }
   
        if (j<7) {
            alert('You\'r gues is wrong , try again please'), console.log('Who is my favourite student in 201 class' + qus1)
            
        }
    
}

alert('Yor score is :' + ' ' + score)