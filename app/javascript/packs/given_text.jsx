// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'

const hiddenText = <div id='hidden-text' hidden>She was a good deal frightened by this very sudden change, but she felt that</div>
const givenText = <div id='text'>She was a good deal frightened by this very sudden change, but she felt that</div>

export class GivenText extends React.Component {
  constructor(props) {
    super(props);
    // this.props = {
    //   verifiedSymbols: props.validatedTextLine.verifiedSymbols,
    //   errorSymbol: props.validatedTextLine.errorSymbol
    // };
  }


  render() {
    const verifiedSymbols = this.props.validatedTextLine.verifiedSymbols;
    const errorSymbol = this.props.validatedTextLine.errorSymbol;
    const errorInText = this.props.validatedTextLine.errorInText;
    const skippedText = this.props.validatedTextLine.skippedText;
    return (
      <div>
        { verifiedSymbols ? (
          <div id='text'>
            <span className="verified">{verifiedSymbols}</span>
            <span className="error">{errorInText}</span>
            <span className="skipped">{skippedText}</span>
          </div>
        ) : givenText }
        { hiddenText }
      </div>
    );
  }
}
GivenText.defaultProps = {
  verifiedSymbols: '',
  errorSymbol: ''
};
