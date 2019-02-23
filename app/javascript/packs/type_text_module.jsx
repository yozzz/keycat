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
        errorInText: '',
        skippedText: '',
        givenText: props.givenText,
        hiddenText: props.givenText
      },
      typedText: '',
      textIndex: props.textIndex
      // lineLength: props.lineLength
    };

    this.handleInputTextChange = this.handleInputTextChange.bind(this)
  }

  handleInputTextChange(validatedTextLine) {
    // debugger
    this.setState({
      textLine: {
        verifiedSymbols: validatedTextLine.verifiedSymbols,
        errorInText: validatedTextLine.errorInText,
        skippedText: validatedTextLine.skippedText,
        givenText: validatedTextLine.givenText,
        hiddenText: validatedTextLine.hiddenText
      },
      lineLength: validatedTextLine.lineLength,
      textIndex: validatedTextLine.textIndex
    });
  }

  render() {
    return (
      <div>
        <InputForm
          typedText={this.state.typedText}
          onInputChange={this.handleInputTextChange}
          lineLength={this.state.lineLength}
          textIndex={this.state.textIndex}
        />
        <GivenText
          validatedTextLine={this.state.textLine}
        />
      </div>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('block-data');
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <TypeTextModule {...data}/>,
    document.getElementById('text-block')
  );
});



