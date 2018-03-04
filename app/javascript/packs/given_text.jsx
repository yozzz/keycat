// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'

const text = <span id='line1'>She was a good deal frightened by this very sudden change, but she felt that</span>

export class GivenText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='text'>{this.props.textLine}</div>
    );
  }

}
GivenText.defaultProps = {
  textLine: text
};
