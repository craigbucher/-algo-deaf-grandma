function deafGrandma(){	
  const rl = require('readline').createInterface({
      input: process.stdin,
      outpurt: process.stdout
  });
  rl.question('What is your favorite food? ', (answer) => {
    console.log(`Oh, so your favorite food is ${answer}`);
  });

}

deafGrandma();