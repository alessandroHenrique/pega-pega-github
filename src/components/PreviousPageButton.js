import React, {Component} from 'react';


class PreviousPageButton extends Component {
  render () {
    if (this.props.currentPage > 1) {
      return (
        <button type="button" className="btn btn-primary" onClick={this.props.onClick}>previous page</button>
      )
    } else {
      return null
    }
  }
}

export default PreviousPageButton;
