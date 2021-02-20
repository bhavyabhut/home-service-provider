import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Input, Select, Button } from "antd";
import {
  DotChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  SettingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Avatar from "antd/lib/avatar/avatar";
const { Option } = Select;

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
            <SubMenu key="13" icon={<PieChartOutlined />} title="Charts">
              <Menu.Item key="1" icon={<RadarChartOutlined />}>
                <Link to="/home-services/charts/state">State charts</Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<DotChartOutlined />}>
                <Link to="/home-services/charts/course">course charts</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            theme="dark"
            className="site-layout-background"
            style={{ padding: 0 }}
          >
            <Menu
              style={{
                // padding: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              theme="dark"
              mode="horizontal"
            >
              <Input.Group>
                <Select
                  className="locationState"
                  defaultValue="Gujarat"
                  style={{ color: "white" }}
                >
                  <Option value="Gujarat">Gujarat</Option>
                  <Option value="Maharastra">Maharastra</Option>
                </Select>
                <Input
                  prefix={
                    <i
                      style={{ marginRight: "0.75rem" }}
                      className="fa fa-map-marker"
                      aria-hidden="true"
                    ></i>
                  }
                  style={{
                    width: "10%",
                    color: "white",
                  }}
                  className="locationCity"
                  defaultValue="Rajkot"
                  placeholder="Enter your location"
                />
                <Input
                  style={{
                    width: "20%",
                    color: "white",
                  }}
                  className="locationCity"
                  placeholder={'Search "plumber"'}
                />
                <Button
                  icon={<SearchOutlined />}
                  style={{
                    marginLeft: "1rem",
                    boxShadow:
                      "0 4px 10px 0 #6c757d6e, 0 0 10px 0 #f8f8f9 !important",
                  }}
                  type="primary"
                  className="mainSearchButton"
                >
                  Search
                </Button>
              </Input.Group>

              <SubMenu
                key="100"
                title={
                  <Avatar size="large" src="../images/team_01.jpg"></Avatar>
                }
              >
                <Menu.Item key="101" icon={<ProfileOutlined />}>
                  <Link to="/home-services/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="102" icon={<SettingOutlined />}>
                  <Link to="/home-services/setting">Setting</Link>
                </Menu.Item>
                <Menu.Item key="103" icon={<LogoutOutlined />}>
                  <Link to="/signin">LogOut</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
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
