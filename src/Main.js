import { Layout, Divider } from 'antd';
import NavBar from './Components/NavBar';
import TimeSelector from './Components/TimeSelector';
import FilterSelector from './Components/FilterSelector';
import MainStats from './Components/MainStats';

import "./App.css"

function Main() {
  const { Content, Footer } = Layout;
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

        {/* Used to show the main stats – TO ADD */}
        <MainStats />
      </Content>
      <Footer style={{ textAlign: 'center' }}>© Full Stack Data | Crafted with care in Singapore</Footer>
    </Layout>
  );
}

export default Main;
