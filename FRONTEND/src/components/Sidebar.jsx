import React, { useState } from 'react';
import { Flex, Menu } from 'antd';
import { FaHouse } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from React Router
import { UserOutlined, CameraOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidebar = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([]);

  // Function to handle submenu open change
  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  // Function to get the parent keys of the active route
  const getParentKeys = (pathname) => {
    const paths = pathname.split('/').filter((p) => p);
    return paths.map((_, index) => `/${paths.slice(0, index + 1).join('/')}`);
  };

  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaHouse />
        </div>
      </Flex>

      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        selectedKeys={[location.pathname]}
        defaultOpenKeys={openKeys}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        className="menu-bar"
      >
        {/* Use Link components from React Router */}
        <Menu.Item key="/" icon={<UserOutlined />} title="Dashboard">
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        
        <SubMenu key="sub1" icon={<CameraOutlined />} title="Camera">
          <Menu.Item key="/cam1"><Link to="/camone">Cam 1</Link></Menu.Item>
          <Menu.Item key="/cam2"><Link to="/cam2">Cam 2</Link></Menu.Item>
          <Menu.Item key="/cam3"><Link to="/cam3">Cam 3</Link></Menu.Item>
        </SubMenu>

        <SubMenu key="2" icon={<SettingOutlined />} title="Lists">
          <Menu.Item key="/listetudiant"><Link to="/listetudiant">List Etudiant</Link></Menu.Item>
          <Menu.Item key="/listpers"><Link to="/listpers">List Personal</Link></Menu.Item>
          <Menu.Item key="/listprof"><Link to="/listprof">List Prof</Link></Menu.Item>
        </SubMenu>
        
        <Menu.Item key="/log" icon={<OrderedListOutlined />} title="Log"><Link to="/log">Log</Link></Menu.Item>
        <Menu.Item key="/salle" icon={<CarryOutOutlined />} title="Salle"><Link to="/salle">Salle</Link></Menu.Item>
        <Menu.Item key="/logout" icon={<LogoutOutlined />} title="Logout"><Link to="/logout">Logout</Link></Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
