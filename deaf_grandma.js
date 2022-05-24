function deafGrandma(){	
  let byeCount = 0;
  let response;
  while (byeCount < 2){
    response = window.prompt('What would you like to say to Grandma?');
    if (response === ''){	
      window.alert('WHAT?!');
    } else if (response === 'GOODBYE!' && byeCount < 1){	
      window.alert('LEAVING SO SOON?');	
      byeCount ++;
    } else if (isUpperCase(response) && response !== 'GOODBYE!'){	
      window.alert('NO, NOT SINCE 1946!');
    } else if (!isUpperCase(response)){	
      window.alert('SPEAK UP, KID!');
    } else if (response === 'GOODBYE!'){	
      window.alert('LATER, SKATER!');	
      return '';
    }
  }
}

function isUpperCase(string){	
  return (string === string.toUpperCase());	
}

deafGrandma();