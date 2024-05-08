import React, { useState, useEffect } from 'react';
import { Layout, Avatar, Button, Space, Dropdown, Menu, Affix } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() =>{
    setIsLoggedIn(checkIsUserLoggedIn());
  },[checkIsUserLoggedIn]);

  function checkIsUserLoggedIn() {
    const storedEmail = localStorage.getItem("jobTracker_id");
    if (storedEmail) {
      return true
    }else{
      return false
    }
  }

  const handleMenuClick = (item: any) => {
    if (item.key === 'logout') {
      localStorage.removeItem("jobTracker_id");
      setIsLoggedIn(false);
      navigate('/login');
    }
  };

  const profileMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout" style={{ color: 'red' }} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Header>
          {isLoggedIn ?  (
            <Space className='space'>
              <Button type="primary">Add Alert</Button>
              <Dropdown overlay={profileMenu}>
                <Avatar size={29} icon={<UserOutlined />} />
              </Dropdown>
            </Space>
          ) : null}
        </Header>
      </Affix>
    </Layout>
  );
};

export default Navbar;