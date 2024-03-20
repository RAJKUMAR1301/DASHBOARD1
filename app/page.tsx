"use client";
import { useState } from 'react';
import {Image, Space, Menu, MenuProps, Divider } from 'antd';
import { CaretRightOutlined, HomeOutlined, AppstoreOutlined, FundProjectionScreenOutlined, CodeSandboxOutlined, MessageOutlined, SettingOutlined, UploadOutlined, UserOutlined, LockOutlined, ThunderboltOutlined } from '@ant-design/icons';
const MyComponent: React.FC = () => {
  // Example JavaScript code to add the 'movement' class
// Example TypeScript code to add the 'movement' class to SVG elements
const lockElements: NodeListOf<SVGElement> = document.querySelectorAll('.anticon.anticon-lock.ant-menu-item-icon svg');

lockElements.forEach((element: SVGElement) => {
  element.classList.add('movement');
});

const codeSandboxElements: NodeListOf<SVGElement> = document.querySelectorAll('.anticon.anticon-code-sandbox.ant-menu-item-icon svg');

codeSandboxElements.forEach((element: SVGElement) => {
  element.classList.add('movement');
});



  const [isHovered, setIsHovered] = useState(false);
   const handleMouseEnter = () => {
    setIsHovered(true);
  };
const handleMouseLeave = () => {
    setIsHovered(false);
  };
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label:React.ReactNode,  key: React.Key, icon?: React.ReactNode,
  children?: MenuItem[],
    type?: 'group',
    style?: React.CSSProperties 
  ): MenuItem {
    return {
      key,  icon,
      children, label,type,style
    };
  }
  function getMenuMarginTop() {
    const screenWidth = window.innerWidth;
    return screenWidth <= 680 ? '100px' : '260px';
  }
  
 const items: MenuItem[] = [
    ...getItems(), // Include menu items for two images
    getItem('PlayGround', 'sub2', <CaretRightOutlined />, [
      getItem('Home', '2', <HomeOutlined />, ),
      getItem('Template', '3', <AppstoreOutlined />),
      getItem('Projects', 'sub1', <FundProjectionScreenOutlined />, [
        { label: 'Option 5', key: '5' }, 
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
      ]) 
    ]),
    getItem('Developer Mode', 'sub3', <CodeSandboxOutlined  />, [
      getItem('Dashboard', '12', <HomeOutlined />),
      getItem('API KEYS', '13', <LockOutlined />),
      getItem('Usage & Limits', '14', <ThunderboltOutlined />)
    ], undefined, { marginTop: '25px' }),
    getItem('divider', 'divider', <Divider style={isHovered ? { borderColor: "white", border: "2px solid white ",marginLeft:'18px' } : {}} />),
    getItem('Give Feedback', '15', <MessageOutlined />,undefined, undefined, { marginTop: '120px' }),
    getItem('Settings', '16', <SettingOutlined />),
    getItem('Logout', '17', <UploadOutlined />),
    getItem(
      'rajkumar223701',
      '18',
      <UserOutlined />,
      undefined,
      undefined,
      { marginTop: '80px' }
    )
  ];
  function getItems(): MenuItem[] {
    return [
    getItem(
        <Image src="/dashboard_circle.png" width={40} height={40} />,
        'image1',  undefined, undefined,undefined,undefined
      ),
    getItem(
        <Image src="/applogos.png" width={40} height={40} />,
        'image2',
        undefined, undefined,undefined,undefined )
];
  }
  return (
    <div  className="rlative top-0 h-screen " >
  <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      width: !isHovered ? '65px' : '250px',
      transition: 'width 0.5s ease-in-out',
    }}
    className="dark:bg-neutral-900 h-screen "
  >
    <Menu
      mode="inline"
      theme="dark"
      inlineCollapsed={!isHovered}
      items={items}
      style={{ width: isHovered ? '250px' : '65px' }}
      className={`bg-neutral-900 ${isHovered ? 'hovered' : ''}  min-h-screen menu-items-space-evenly`}
    />
  </div>
</div>

   );
};
export default MyComponent;
