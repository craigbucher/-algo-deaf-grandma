function deafGrandma(){	
  let byeCount = 0;	
  let response;	
  while (byeCount < 2){	
    let response = ask('What do you want to say to Grandma!!');	
    if (response === ''){	
      console.log('WHAT?!');	
    } else if (response === 'GOODBYE!' && byeCount < 1){	
      console.log('LEAVING SO SOON?');	
      byeCount ++;	
    } else if (isUpperCase(response) && response !== 'GOODBYE!'){	
      console.log('NO, NOT SINCE 1946!');	
    } else if (!isUpperCase(response)){	
      console.log('SPEAK UP, KID!');	
    } else if (response === 'GOODBYE!'){	
      console.log('LATER, SKATER!');	
      return '';	
    }	
  }	
}	
function isUpperCase(string){	
  return (string === string.toUpperCase());	
}

deafGrandma();