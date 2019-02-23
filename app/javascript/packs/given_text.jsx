import React from 'react'

export class GivenText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenText: GivenText.mapText(props.validatedTextLine.givenText),
      verifiedSymbols: props.validatedTextLine.verifiedSymbols,
      errorInText: props.validatedTextLine.errorInText,
      skippedText: props.validatedTextLine.skippedText,
      hiddenText: GivenText.mapText(props.validatedTextLine.givenText)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.validatedTextLine !== this.props.validatedTextLine) {
      this.setState({
        givenText: nextProps.validatedTextLine.givenText,
        verifiedSymbols: nextProps.validatedTextLine.verifiedSymbols,
        errorInText: nextProps.validatedTextLine.errorInText,
        skippedText: nextProps.validatedTextLine.skippedText,
        hiddenText: nextProps.validatedTextLine.hiddenText
      });
    }
  }

  static mapText(givenText) {
    return (givenText.map((text, index) =>
      <div key={index} data-line-length={text.lineLength}>{text.line}</div>)
    )
  }

  render() {
    let verifiedSymbols = this.state.verifiedSymbols;
    let errorInText = this.state.errorInText;
    let textBlock;
    if (verifiedSymbols) {
      textBlock = (
        <div id='text'>
          <span className="verified">{this.state.verifiedSymbols}</span>
          <span className="error">{this.state.errorInText}</span>
          <span className="skipped">{this.state.skippedText}</span>
        </div>)
    } else if (errorInText) {
      textBlock =  (
        <div id='text'>
          <span className="error">{this.state.errorInText}</span>
          <span className="skipped">{this.state.skippedText}</span>
        </div>)
    } else {
      textBlock = <div id='text'>{this.state.givenText}</div>;
    }
    return (
      <div>
        { textBlock }
        { <div id='hidden-text'>{this.state.hiddenText}</div> }
      </div>
    );
  }

}
