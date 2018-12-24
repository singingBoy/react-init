import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getUser} from '../../redux/user/actions'
import {showNotify} from '../../redux/notify/actions'
import {homeBanner} from "../../services/homeService";
import {ImageBox} from '../../components';

import {bannerData} from './data';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      bannerImage: [],
    };
  }

  async componentWillMount() {
    const bannerImage = await homeBanner();
    this.setState({
      bannerImage
    })
  }

  render() {
    const { user, showNotify } = this.props;
    const { bannerImage } = this.state;
    const imageData = {
      user,
      image: bannerImage[0],
      ...bannerData,
    };
    return (
      <section>
        <ImageBox {...imageData} />

        <button onClick={() => showNotify({
          message: '呦呦呦!'
        })}>点击提示{user.name}</button>
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
