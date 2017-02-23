import React, {Component} from 'react';


class NextPageButton extends Component {
  render () {
    if (this.props.totalCount > 28 && this.props.currentPage < Math.ceil(this.props.totalCount / 28)) {
      return (
        <button type="button" className="btn btn-primary" onClick={this.props.onClick}>next page</button>
      )
    } else {
      return null
    }

  }
}

export default NextPageButton;
