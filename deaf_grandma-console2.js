function deafGrandma(){	
  const readline = require('readline');
  const rl = readline.createInterface(
    process.stdin, process.stdout);
  let bye = false;
  let outputMessage = 'SPEAK UP, KID!';

  readline.question('Grandma is listening...', input => {
    if (input === ''){
      outputMessage = 'WHAT?!';
    } else if (input.match(/^[A-Z]/)){
      outputMessage = 'NO, NOT SINCE 1946';
    } else if (input.match(/^[GOODBYE]/)){
      if (bye){
        return 'LATER, SKATER!';
        close();
      }
      outputMessage = 'LEAVING SO SOON?';
      bye = true;
    }
    console.log(outputMessage);
    deafGrandma();
  });
}


deafGrandma();