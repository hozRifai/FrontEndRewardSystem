import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, withRouter } from "react-router-dom";
import "./../App.css";
import { connect } from "react-redux";
import { Layout, Menu, Icon, Avatar, Badge, Steps, Dropdown } from "antd";
import * as actions from "../store/actions/auth";
import Form from "../components/Login";
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
const Step = Steps.Step;

const menu = (
  <Menu>
    <Menu.Item>
      <a href="/">Logout</a>
    </Menu.Item>
  </Menu>
);

class CustomLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1">
                  <Link to="/dashboard/">
                    <Icon type="dashboard" />
                    <span>Dashboard</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/addGoal/">
                    <Icon type="pie-chart" />
                    <span>Add Goal</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>Customer</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">
                    <Link to="/makeTransaction">
                      <Icon type="dollar" theme="outlined" />
                      <span>Make Transaction</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/dailyLogin">
                      <Icon type="login" theme="outlined" />
                      <span>Daily Login</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/fillasurvey">
                      <Icon type="file-done" theme="outlined" />
                      <span>Fill A Survey</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/shareRewards">
                      <Icon type="facebook" theme="outlined" />
                      <span>Share Rewards</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>Rewards</span>
                    </span>
                  }
                >
                  <Menu.Item key="7">
                    <Link to="/rewardsLevelOne">
                      <Icon type="gold" theme="outlined" />
                      <span>Level 1</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <Link to="/rewardsLevelTwo">
                      <Icon type="trophy" theme="outlined" />
                      <span>Level 2</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <Menu.Item key="9">
                  <Link to="/rewardshistory">
                    <Icon type="desktop" theme="outlined" />
                    <span>Reward History</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }}>
                <Icon
                  className="trigger"
                  style={{ paddingLeft: "2em" }}
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
                <div style={{ float: "right", paddingRight: "3em" }}>
                  <Badge count={2}>
                    <Icon
                      type="bell"
                      theme="outlined"
                      style={{ marginTop: "7px" }}
                    />
                  </Badge>
                  <Badge count={9} style={{ backgroundColor: "#52c41a" }}>
                    <Avatar
                      style={{ marginBottom: "7px", marginLeft: "10px" }}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    >
                      {" "}
                    </Avatar>
                  </Badge>
                  {/* <span size="small">HozRifai</span> */}
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                      HozRifai <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
              </Header>

              <Content
                style={{
                  margin: "24px 16px 0px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 280
                }}
              >
                {this.props.children}
              </Content>

              <Footer style={{ textAlign: "center" }}>
                Reward System ©2018 Made with{" "}
                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by
                404
              </Footer>
            </Layout>
          </Layout>
        ) : (
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["10"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="10">
                  <Link to="/login/">
                    <span>Login</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px", marginTop: 100 }}>
              <Form
                {...this.props}
                // style={{ background: "#fff", padding: 123 }}
              />
            </Content>
          </Layout>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CustomLayout)
);
