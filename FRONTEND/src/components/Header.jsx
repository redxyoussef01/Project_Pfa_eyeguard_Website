import React from 'react';
import { Avatar, Dropdown, Menu, Typography } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CustomHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Title level={3} type="secondary">
        Welcome Back, Yassine
      </Title>
      <div style={{ position: 'relative' }}>
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <Avatar icon={<UserOutlined />} style={{marginTop: '-25px', cursor: 'pointer' }} />
        </Dropdown>
      </div>
    </div>
  );
};

export default CustomHeader;
