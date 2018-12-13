import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import NotifyContent from './NotifyContent';
import {connect} from 'react-redux';
import {closeNotify, showNotify} from "../../redux/notify/actions";

class Notify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.notify,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.notify,
    })
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.close();
  };

  render() {
    const {
      message,
      open,
      vertical,
      horizontal,
      variant,
    } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical,
            horizontal,
          }}
          open={open}
          autoHideDuration={2000}
          onClose={this.handleClose}
        >
          <NotifyContent
            onClose={this.handleClose}
            variant={variant}
            message={message}
          />
        </Snackbar>
      </div>
    )
  }
}

export default connect(
  state => ({notify: state.notify}),
  dispatch => ({
    show: params => dispatch(showNotify(params)),
    close: params => dispatch(closeNotify(params)),
  })
)(Notify)
