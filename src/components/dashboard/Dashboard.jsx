import React, { Component } from 'react';
import '../../assets/plugin/animate.min.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="main-content">
        <p className="animated bounceInUp" style={{ fontSize: '1.5em', fontWeight: 700}}>山东理工大学辅导员风采展示</p>
        <p className="animated infinite flash">点击左侧导航栏查看详情！</p>
      </div>
    );
  }
}

export default Dashboard;