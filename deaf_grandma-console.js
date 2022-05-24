function deafGrandma(counter = 0){	
  var prompt = require('prompt');
  var output = 'Grandma is listening. . .'
  prompt.start();
  prompt.get('askGrandma', function(err, result){
    var input = result.askGrandma;
    if (counter < 3){
      var input = result.askGrandma;
      if (input === ''){
        output = 'WHAT?';
      } else if (/[a-z]/.test(input)){
        output = 'SPEAK UP, KID!';
      } else if (input === input.toUpperCase){
        output = 'NO, NOT SINCE 1946!';
      } else if (input == 'GOODBYE!'){
        if (counter == 1){
          output = 'LEAVING SO SOON?';
          counter++
        } else if (counter == 2){
          output = 'LATER, SKATER!';
          counter++
        }
      }
      if (counter < 3){
        deafGrandma(counter)
      }
    }
  });
    
}

deafGrandma();