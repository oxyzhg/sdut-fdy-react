import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterCustom extends Component {
  getCurrentYear(){
    let date = new Date();
    return date.getFullYear();
  }
  render() {
    return (
      <Footer style={{background:'#e0f0e9'}}>
        <div><a href="//www.youthol.cn">Youthol</a> © 2001-{this.getCurrentYear()} Created by oxyzhg</div>
      </Footer>
    );
  }
}

export default FooterCustom;