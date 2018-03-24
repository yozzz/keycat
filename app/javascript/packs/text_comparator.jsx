import React from 'react'


export function TextComparator(input_text) {
  console.log('Called');
  //TODO change var names
  let given_text = document.getElementById('hidden-text').innerHTML;
  let input_text_symbols = input_text.split('');
  let verified_symbols = [];
  let error_symbol = '';
  let error_in_text = '';

  for(const [i, value] of input_text_symbols.entries()) {
    if (given_text[i] === value ) {
      verified_symbols.push(value)
    } else {
      error_symbol = value;
      error_in_text = given_text[i];
      break;
    }
  }

  if (error_symbol){
    return {
      verifiedSymbols: verified_symbols.join(''),
      errorSymbol: error_symbol,
      errorInText: error_in_text,
      skippedText: given_text.substring((verified_symbols.join('') + error_symbol).length, given_text.length)
    }
  } else {
    return {
      verifiedSymbols: verified_symbols.join(''),
      skippedText: given_text.substring(verified_symbols.length, given_text.length)
    }
  }

}
