import React, {useState} from 'react'
import LoginPage from '../components/LoginForm';
import { Layout } from 'antd';


const {Sider, Header, Content} = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <LoginPage />
    </Layout>
  
    
  );
};

export default App