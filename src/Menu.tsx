import React, { useState } from "react";
import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  SettingOutlined,
  BookOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, message } from "antd";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/Home",
    icon: <HomeOutlined />,
  },
  {
    label: "Book Post",
    key: "/BookPost",
    icon: <BookOutlined />,
    disabled: false,
  },
  {
    label: "Text List",
    key: "/Text",
    icon: <UnorderedListOutlined />,
    disabled: false,
  },
  {
    label: "Setting",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "Proflie",
            key: "/My Profile",
            icon: <UserOutlined />,
          },
          {
            label: "Log Out",
            key: "Logout",
            icon: <LogoutOutlined />,
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("user");
    setTimeout(message.success("Logout success"), 2000);
    navigate("/");
  };

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "Logout") {
      Logout();
      return;
    }
    navigate(e.key);
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme="dark"
    />
  );
};

export default App;
