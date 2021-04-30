' use strict';
let userName = prompt('Hello, could you please type your name?')
console.log('uSERnAME :'+ userName)

alert('Welcome to my humble page'+' '+ userName +' '+ 'please answer the following questions')

let qus1 = prompt( 'Q1-Do you think that im a software developer?')
console.log('Do you think that im a software developer? :'+ qus1)
switch (qus1.toLowerCase()) {
    case 'yes':
        case 'y':
            alert('You answered corectly well done.')
        document.write('<h1>' + 'Q1-Do you think that im a software developer?' + '  ' + 'yes'+'</h1>')
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