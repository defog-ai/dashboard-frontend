import { Layout, Divider, Typography } from 'antd';
import NavBar from './Components/NavBar';
import TimeSelector from './Components/TimeSelector';
import FilterSelector from './Components/FilterSelector';
import MainStats from './Components/MainStats';

import "./App.css"

function Main() {
  const { Content, Footer } = Layout;
  const { Title } = Typography;
  return (
    <Layout className="layout">
      <NavBar />
      <Content style={{ padding: '20px 50px' }}>
        {/* Used to select time */}
        <TimeSelector /> 
        
        <Divider />
        
        {/* Used to select filters for referrers, device type etc – TO ADD */}
        <FilterSelector />

        <Divider />
        <Title level={3}>Stats for your homepage</Title>

        {/* Used to show the main stats – TO ADD */}
        <MainStats />
      </Content>
      <Footer style={{ textAlign: 'center' }}>© Full Stack Data | Crafted with care in Singapore</Footer>
    </Layout>
  );
}

export default Main;
