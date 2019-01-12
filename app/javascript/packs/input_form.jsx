import React from 'react'
import axios from 'axios'
import { TextComparator } from './text_comparator';

export class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
    this.handleInputTextChange = this.handleInputTextChange.bind(this)
  }

  handleInputTextChange(e) {
    let validatedTextLine = TextComparator(e.target.value);
    this.state.inputValue = e.target.value;
    if (this.state.inputValue.length === this.props.lineLength) {
      axios.get('/text.json', {params: {index: this.props.textIndex}, responseType: 'json'})
        .then(function (response) {
          this.props.onInputChange(response.data);
          this.setState({inputValue: ''});
        }.bind(this));
    } else {
      this.props.onInputChange(
        Object.assign(validatedTextLine, {lineLength: this.props.lineLength, textIndex: this.props.textIndex})
      )
    }
  }

  render() {
    return(
      <div id='input-text'>
        <form className='input-form'>
          <input className='input-text' value={this.state.inputValue} onChange={this.handleInputTextChange}/>
        </form>
      </div>
    )
  }
}
