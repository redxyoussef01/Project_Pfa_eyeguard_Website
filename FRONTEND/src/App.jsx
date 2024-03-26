import React, {useState} from 'react'
import { Button, Flex, Layout } from 'antd';

import './App.css'


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//pages
import Dashboard from './pages/dashboard'
import ListEtudiant from './pages/ListEtudiant'
import ListPers from './pages/ListPers'
import ListProf from './pages/ListProf'
import Log from './pages/logsdata'
import Salle from './pages/sallesdata'
import Login from './pages/login'
import CamOne from './pages/CamOne'


const {Sider, Header, Content} = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    //<SignupForm />
    //<LoginForm />

    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Dashboard />}/>
          <Route path="login" element={<Login />}/>
          <Route path="listetudiant" element={<ListEtudiant />}/>
          <Route path="listpers" element={<ListPers />}/>
          <Route path="listprof" element={<ListProf />}/>
          <Route path="log" element={<Log />}/>
          <Route path="salle" element={<Salle />}/>
          <Route path="camone" element={<CamOne />}/>
        </Routes>
      </main>
    </BrowserRouter>
    /*<Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className="sider">

        <Sidebar />

        <Button type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)} className='triger-btn' />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>*/
  );
};

export default App