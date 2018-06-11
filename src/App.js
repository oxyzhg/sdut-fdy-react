import React, { Component } from "react";
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import HeaderCustom from "./layouts/HeaderCustom";
import FooterCustom from "./layouts/FooterCustom";
import SiderCustom from "./layouts/SiderCustom";
import Routes from "./routes";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <HeaderCustom />
            <Layout>
              <SiderCustom />
              <Content style={{ minWidth: 760, background: "#f3f9f1" }}>
                <Routes />
              </Content>
            </Layout>
            <FooterCustom />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
