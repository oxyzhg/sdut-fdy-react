import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

class SiderCustom extends Component {
  state = {
    collapsed: false,
    defaultSelectedKeys: ['1'],
    collegeList: [
      {
        key: 1,
        name: '机械工程学院',
      },
      {
        key: 2,
        name: '交通与车辆工程学院',
      },
      {
        key: 3,
        name: '农业工程与食品科学学院',
      },
      {
        key: 4,
        name: '电气与电子工程学院',
      },
      {
        key: 5,
        name: '计算机科学与技术学院',
      },
      {
        key: 6,
        name: '化学化工学院',
      },
      {
        key: 7,
        name: '建筑工程学院',
      },
      {
        key: 8,
        name: '资源与环境工程学院',
      },
      {
        key: 9,
        name: '材料科学与工程学院',
      },
      {
        key: 10,
        name: '生命科学学院',
      },
      {
        key: 11,
        name: '数学与统计学院',
      },
      {
        key: 12,
        name: '物理与光电工程学院',
      },
      {
        key: 13,
        name: '经济学院',
      },
      {
        key: 14,
        name: '管理学院',
      },
      {
        key: 15,
        name: '文学与新闻传播学院',
      },
      {
        key: 16,
        name: '外国语学院',
      },
      {
        key: 17,
        name: '法学院',
      },
      {
        key: 18,
        name: '美术学院',
      },
      {
        key: 19,
        name: '音乐学院',
      },
      {
        key: 20,
        name: '体育学院',
      },
      {
        key: 21,
        name: '鲁泰纺织服装学院'
      }
      
      
    ]
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Sider style={{ width: 256, textAlign: 'right' }}>
        <Menu
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          {this.state.collegeList && this.state.collegeList.map((item, index) => (
            <Menu.Item key={item.key}>
              <Link to={`/college/${item.key}`} />
              <span>{item.name}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SiderCustom); 