import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import NotifyContent from './NotifyContent';
import {connect} from 'react-redux';
import {closeNotify, showNotify} from "../../redux/notify/actions";

class Notify extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      open: props.notify.open,
    };
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.close();
  };

  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
        >
          <NotifyContent
            onClose={this.handleClose}
            variant="success"
            message="This is a success message!"
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
