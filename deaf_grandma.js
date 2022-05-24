function deafGrandma(){	
  let byeCount = 0;
  let response;
  while (byeCount < 2){
    response = window.prompt('What would you like to say to Grandma?');
    if (response === ''){	
      window.prompt('WHAT?!');
    } else if (response === 'GOODBYE!' && byeCount < 1){	
      window.prompt('LEAVING SO SOON?');	
      byeCount ++;
    } else if (isUpperCase(response) && response !== 'GOODBYE!'){	
      window.prompt('NO, NOT SINCE 1946!');
    } else if (!isUpperCase(response)){	
      window.prompt('SPEAK UP, KID!');
    } else if (response === 'GOODBYE!'){	
      window.prompt('LATER, SKATER!');	
      return '';
    }
  }
}

function isUpperCase(string){	
  return (string === string.toUpperCase());	
}

deafGrandma();