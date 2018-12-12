import React, { Component } from 'react';
import {homeBanner} from "../../services/homeService";


export default class Home extends Component{
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    const bannerImage = await homeBanner();
  }
  render() {
    return(
        <section>

        </section>
    )
  }
}