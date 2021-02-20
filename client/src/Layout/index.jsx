import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import {
  DotChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Index extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{ overflow: "hidden" }}>
            <Logo />
          </div>
          <Menu
            theme="dark"
            defaultOpenKeys={["13", "colleges"]}
            defaultSelectedKeys={["13"]}
            mode="inline"
          >
            <SubMenu key="13" icon={<PieChartOutlined />} title="Charts">
              <Menu.Item key="1" icon={<RadarChartOutlined />}>
                <Link to="/home-services/charts/state">State charts</Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<DotChartOutlined />}>
                <Link to="/home-services/charts/course">course charts</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="colleges" icon={<UserOutlined />} title="Colleges">
              <Menu.Item key="3">
                <Link to="/home-services/allColleges">All colleges</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/home-services/addCollege">Add college</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="students" icon={<TeamOutlined />} title="Students">
              <Menu.Item key="6">
                <Link to="/home-services/allStudents">All students</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/home-services/addStudent">Add student</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/*<Header className="site-layout-background" style={{ padding: 0 }} />*/}
          <Content style={{ margin: "0 16px" }}>
            {/*<Breadcrumb style={{ margin: "16px 0" }}>*/}
            {/*  <Breadcrumb.Item>User</Breadcrumb.Item>*/}
            {/*  <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*/}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Bhavya Design ©{new Date().getFullYear()} Created by bhavyabhut
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
