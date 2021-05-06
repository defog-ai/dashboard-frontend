import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom"

const NavBar = () => {
  const { Header } = Layout;
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Full Stack Data</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default NavBar
