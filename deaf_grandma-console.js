function deafGrandma(){	
  let byeCount = 0;
  let response;
  let readline = require('readline');
  let rl = readline.createInterface(
    process.stdin, process.stdout);
  rl.question('What is your age? ', (age) => {
  console.log('Your age is: ' + age);
    });
    
}

function isUpperCase(string){	
  return (string === string.toUpperCase());	
}

deafGrandma();