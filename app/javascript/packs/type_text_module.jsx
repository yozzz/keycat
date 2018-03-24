// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { InputForm } from './input_form'
import { GivenText } from './given_text'

export class TypeTextModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textLine: {
        verifiedSymbols: '',
        errorSymbol: '',
        errorInText: '',
        skippedText: ''
      },
      typedText: ''
    };

    this.handleInputTextChange = this.handleInputTextChange.bind(this)
  }

  handleInputTextChange(validatedTextLine) {
    this.setState({
      textLine: validatedTextLine
    });
  }


  render() {
    return (
      <div>
        <InputForm
          typedText={this.state.typedText}
          onInputChange={this.handleInputTextChange}
        />
        <GivenText
          validatedTextLine={this.state.textLine}
        />
      </div>
    )
  }

}

ReactDOM.render(
  <TypeTextModule />,
  document.getElementById('text-block')
);
