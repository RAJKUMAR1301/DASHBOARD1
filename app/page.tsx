"use client";
import { useState } from 'react';
import { Space, Menu, MenuProps, Divider } from 'antd';
import { CaretRightOutlined, HomeOutlined, AppstoreOutlined, FundProjectionScreenOutlined, CodeSandboxOutlined, MessageOutlined, SettingOutlined, UploadOutlined, UserOutlined, LockOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Image from 'next/image';

const MyComponent: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  

  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    style?: React.CSSProperties 
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
      style
    };
  }

  const items: MenuItem[] = [
    getItem('PlayGround', 'sub2', <CaretRightOutlined />, [
      getItem('Home', '2', <HomeOutlined />),
      getItem('Template', '3', <AppstoreOutlined />),
      getItem('Projects', 'sub1', <FundProjectionScreenOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
      ]),
    ]),
    getItem('Developer Mode', 'sub3', <CodeSandboxOutlined />, [
      getItem('Dashboard', '12', <HomeOutlined />),
      getItem('API KEYS', '13', <LockOutlined />),
      getItem('Usage & Limits', '14', <ThunderboltOutlined />)
    ], undefined, { marginTop: '25px' }),
    
    getItem('divider', 'divider', <Divider style={isHovered ? { borderColor: "white", border: "2px solid white" } : {}} />),
    getItem('Give Feedback', '15', <MessageOutlined />,undefined, undefined, { marginTop: '330px' }),
    getItem('Settings', '16', <SettingOutlined />),
    getItem('Logout', '17', <UploadOutlined />),
    getItem('rajkumar223701', '18', <UserOutlined />),
  ];

  const rootSubmenuKeys = ['sub2', 'sub3'];

  const [openKeys, setOpenKeys] = useState(['sub2']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        height: '730px',
        width: !isHovered ? '65px' : '250px',
        transition: 'width 0.3s ease-in-out',
      }}
      className="bg-neutral-900"
    >
      <div className="flex justify-start items-center space-x-2 py-5 h-[50px] bg-neutral-900 sticky top-0 z-50">
        <Image
          src="/dashboard_circle.png"
          width={20}
          height={20}
          alt={"dashboard_logo"}
          className={`${!isHovered && "duration-500 w-8 h-8"} h-7 w-7 ml-2`}
        />
        <Image
          src="/applogos.png"
          width={100}
          height={57}
          alt={"dashboard_logo"}
          className={`${!isHovered ? "w-0 h-0" : "w-28"} duration-500`}
        />
      </div>
      <div>
        
      <Menu
  defaultOpenKeys={['sub1']} // Set defaultOpenKeys here
  openKeys={openKeys}
  onOpenChange={onOpenChange}
  mode="inline"
  theme="dark"
  inlineCollapsed={!isHovered}
  items={items}
  style={{ width: isHovered ? '250px' : '65px' }}
  className="bg-neutral-900"
/>

      </div>
    </div>
  );
};

export default MyComponent;
