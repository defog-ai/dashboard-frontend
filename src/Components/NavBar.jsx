import { Layout, Menu } from 'antd';

const NavBar = () => {
  const { Header } = Layout;
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Full Stack Data</Menu.Item>
      </Menu>
    </Header>
  )
}

export default NavBar
