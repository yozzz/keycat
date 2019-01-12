import React from 'react'

export class GivenText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenText: props.validatedTextLine.givenText,
      verifiedSymbols: props.validatedTextLine.verifiedSymbols,
      errorInText: props.validatedTextLine.errorInText,
      skippedText: props.validatedTextLine.skippedText,
      hiddenText: props.validatedTextLine.hiddenText
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

  render() {
    var verifiedSymbols = this.state.verifiedSymbols;
    return (
      <div>

        { verifiedSymbols ?
          (
          <div id='text'>
            <span className="verified">{this.state.verifiedSymbols}</span>
            <span className="error">{this.state.errorInText}</span>
            <span className="skipped">{this.state.skippedText}</span>
          </div>
        ) : <div id='text'>{this.state.givenText}</div> }
        { <div id='hidden-text'>{this.state.hiddenText}</div> }
      </div>
    );
  }

}

// GivenText.defaultProps = {
//   verifiedSymbols: '',
//   errorSymbol: ''
// };
