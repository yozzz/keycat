import React from 'react'

export function TextComparator(input_text) {
  let givenText = document.getElementById('hidden-text').innerHTML;
  let inputTextSymbols = input_text.split('');
  let verifiedSymbols = [];
  let errorSymbol = '';
  let errorInText = '';
  if (!input_text) {
    return {
      verifiedSymbols: '',
      givenText: givenText,
      hiddenText: givenText
    }
  }
  
  for(const [i, value] of inputTextSymbols.entries()) {
    if (givenText[i] === value ) {
      verifiedSymbols.push(value)
    } else {
      errorSymbol = value;
      errorInText = givenText[i];
      break;
    }
  }

  if (errorSymbol){
    return {
      verifiedSymbols: verifiedSymbols.join(''),
      errorSymbol: errorSymbol,
      errorInText: errorInText,
      skippedText: givenText.substring((verifiedSymbols.join('') + errorSymbol).length, givenText.length),
      hiddenText: givenText
    }
  } else {
    return {
      verifiedSymbols: verifiedSymbols.join(''),
      skippedText: givenText.substring(verifiedSymbols.length, givenText.length),
      hiddenText: givenText
    }
  }

}
