import React from 'react'


export function TextComparator(input_text) {
  console.log('Called');
  let given_text = document.getElementById('line1').innerHTML;
  let input_text_symbols = input_text.split('');
  let verified_symbols = [];
  let error_symbol = '';

  for(const [i, value] of input_text_symbols.entries()) {
    if (given_text[i] === value ) {
      verified_symbols.push(value)
    } else {
      error_symbol = value;
      break;
    }
  }
  if (error_symbol){
    return <span>
      <span class="verified">{verified_symbols.join('')}</span>
      <span class="mistake">{error_symbol}</span>span>
      {given_text.substring(verified_symbols.length)}
           </span>
  } else {
    return <span>
      <span class="verified">{verified_symbols.join('')}</span>
      {given_text.substring(verified_symbols.length)}
           </span>
  }

}

export function ValidatedText(props) {
  debugger
  let valid_symbols = props.text.substring(0, props.valid.length);
  return <span className='verified'>props.valid</span>
}
