import React, { useState } from "react";
import { Button, Modal, Input, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DataPost } from "../../Component/interface";

interface Param {
  setnewCard: Function;
  handleSubmit: Function;
}

type props = Param;

const App: React.FC<props> = (props: props) => {
  const [modal2Open, setModal2Open] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values: DataPost) => {
    props.handleSubmit(values);
    props.setnewCard(values);
    setModal2Open(false);
    form.resetFields();
  };

  const close = () => {
    setModal2Open(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button
        style={{ marginRight: "3rem", marginTop: "2rem" }}
        type="default"
        onClick={() => setModal2Open(true)}
      >
        <PlusCircleOutlined />
        Add Card
      </Button>

      <Modal
        title="New Card"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={false}
      >
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            style={{ marginTop: "2rem", paddingLeft: "0.5rem" }}
            rules={[{ required: true, message: "Please Enter Your Word" }]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>
          <Form.Item
            label="Detail"
            name="body"
            rules={[{ required: true, message: "Please Enter Word Meaning" }]}
          >
            <Input.TextArea
              rows={3}
              maxLength={200}
              placeholder="Enter Word Meaning... "
            />
          </Form.Item>
          <div
            style={{
              display: "flex",
              minWidth: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Form.Item>
              <Button onClick={close}>Cancel</Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: "0.5rem" }}
              >
                Add
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default App;
