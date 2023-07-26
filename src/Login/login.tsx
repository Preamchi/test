/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Input, Space, message } from "antd";
import { Card } from "antd";
import "./login.css";
import { useNavigate } from "react-router-dom";
/* import { LoginContext } from "./../Context/LoginContext"; */

interface Props {}

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [form] = Form.useForm();

  /* 
  const { setUsername } = useContext(LoginContext); */

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const navigate = useNavigate();

  const loginbutton = () => {
    if (username === "Phatsorn" && password === "123456") {
      setTimeout(message.success("Login Success"), 2000);
      navigate("/Home");
      localStorage.setItem("user", username);
    } else {
      form.resetFields();
      setTimeout(message.error("Your Username or Password incorrect"), 2000);
      setUsername("");
      setPassword("");
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/Home");
    }
  }, [navigate]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage: 'url("/img/bg1.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Card style={{ width: 400 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "10vh",
              backgroundImage: 'url("/img/bg1.jpg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              marginBottom: "2rem",
              color: "#000",
            }}
          >
            <h1>Log In</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Form
              name="basic"
              form={form}
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Space
                direction="vertical"
                style={{ width: "100%", marginTop: "1rem" }}
              >
                <Button className="btn" block onClick={loginbutton}>
                  Log In
                </Button>
              </Space>
            </Form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default login;

export {};
