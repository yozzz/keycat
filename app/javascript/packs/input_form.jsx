// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { TextComparator } from './text_comparator';

export class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
    this.handleInputTextChange = this.handleInputTextChange.bind(this)
  }

  handleInputTextChange(e) {
    let validated_text_line = TextComparator(e.target.value);
    this.props.onInputChange(validated_text_line)
  }

  render() {
    return(
      <div id='input-text'>
        <form className='input-form'>
          <input className='input-text' value={this.props.typedText} onChange={this.handleInputTextChange}/>
        </form>
      </div>
    )
  }
}
