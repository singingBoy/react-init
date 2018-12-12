import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getUser} from '../../redux/user/actions'
import {showNotify} from '../../redux/notify/actions'
import {homeBanner} from "../../services/homeService";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  async componentWillMount() {
    const bannerImage = await homeBanner();
  }

  render() {
    const { user, showNotify } = this.props;
    return (
      <section>
        {user.name}
        <button onClick={() => showNotify({
          message: '呦呦呦!'
        })}>点击提示</button>
      </section>
    )
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    getUser: () => dispatch(getUser()),
    showNotify: params => dispatch(showNotify(params))
  })
)(Home)
