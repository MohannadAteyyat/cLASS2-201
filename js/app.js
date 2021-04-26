' use strict';
let userName = prompt('Hello, could you please type your name?')
console.log('uSERnAME :'+ userName)

alert('Welcome to my humble page'+' '+ userName +' '+ 'please answer the following questions')

let qus1 = prompt( 'Q1-Are you a software developer?')
console.log('Are you a software developer? :'+ qus1)
switch (qus1.toLowerCase()) {
    case 'yes':
        document.write('<h1>' + 'Q1-Are you a software developer?' + '  ' + 'yes'+'</h1>')
        break;
    case 'no':
        document.write('<h1>' + 'Q1-Are you a software developer?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>' + 'Q1-'+'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}

let qus2 = prompt('Q2-Are you looking for software developer?');
console.log('Are you looking for software developer? :'+ qus2)
switch (qus2.toLowerCase()) {
    case 'yes':
        document.write('<h1>' + 'Q2-Are you looking for software developer?' + '  ' + 'yes'+'</h1>')
        break;
    case 'no':
        document.write('<h1>' + 'Q2-Are you looking for software developer?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>' + 'Q2-'+'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}

let qus3 = prompt('Q3-Did you liked my website?');
console.log('Did you liked my website? :'+ qus3)
switch (qus3.toLowerCase()) {

    case 'yes':
        document.write('<h1>' + 'Q3-Did you liked my website?' + '  ' + 'yes'+'</h1>')
        break;
    case 'no':
        document.write('<h1>' + 'Q3-Did you liked my website?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>' + 'Q3-'+'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}

let qus4 = prompt('Q4-Can I provide any help for you?');
console.log('Can I provide any help for you? :'+ qus4)
switch (qus4.toLowerCase()) {

    case 'yes':
        document.write('<h1>' + 'Q4-Can I provide any help for you?' + '  ' + 'yes'+'</h1>')
        break;
    case 'no':
        document.write('<h1>' + 'Q4-Can I provide any help for you?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>' + 'Q4-'+ 'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}

let qus5 = prompt('Q5-Did you find my websit helpfull?');
console.log('Did you find my websit helpfull?:'+ qus5)
switch (qus5.toLowerCase()) {

    case 'yes':
        document.write('<h1>'+'Q5-Did you find my websit helpfull?' + '  ' + 'yes'+'</h1>')
        break;
    case 'no':
        document.write('<h1>'+'Q5-Did you find my websit helpfull?' + '  ' + 'no'+'</h1>')
        break;
    default:
        document.write('<h1>'+'Q5-'+'Sorry' + ' ' + userName + '  ' + ' , you did not answer well, please only answer with yes or no')
        alert('please only answer with yes or no')
        break;
}
alert('Great'+' '+ userName +' ' + 'your answers are shown in the page please inbox me by pressing contact, thank you')