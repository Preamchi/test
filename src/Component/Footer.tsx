import React from 'react';
import { Layout, Space } from 'antd';

const {Footer} = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#000',
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Footer style={footerStyle}>www.Tain@React.com</Footer>
    </Layout>
  </Space>
);

export default App;

export{};