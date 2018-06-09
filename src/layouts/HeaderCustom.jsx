import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class HeaderCustom extends Component {
  render() {
    return (
      <Header className="header">
        <h3>山东理工大学辅导员风采</h3>
      </Header>
    );
  }
}

export default HeaderCustom;