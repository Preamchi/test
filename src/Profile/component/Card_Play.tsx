import React, { useState } from "react";
import { Button, Card, Form, Input, Select } from "antd";
import CryptoJS from "crypto-js";
import { useAppContext } from "../../Context/UseAppContext";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Card_Play() {
  const [form] = Form.useForm();

  const {
    inputText,
    setInputText,
    action,
    setAction,
    outputText,
    setOutputText,
  } = useAppContext();

  const onActionChange = (value: string) => {
    const inputText = form.getFieldValue("input");
    const key = "secretkey123";
    let result = "";

    if (value === "Encrypt") {
      const encryptText = CryptoJS.AES.encrypt(inputText, key).toString();
      result = encryptText;
      /*  console.log(result); */
    } else if (value === "Decrypt") {
      try {
        const decryptBytes = CryptoJS.AES.decrypt(inputText, key);
        const decryptText = decryptBytes.toString(CryptoJS.enc.Utf8);
        result = decryptText;
        /*   console.log(result); */
      } catch (error) {
        console.error("Decryption error:", error);
        result = "Error: Unable to decrypt";
      }
    }
    setInputText(inputText);
    setAction(value);
    setOutputText(result);
  };

  const onFinish = (values: any) => {
    const storelist = JSON.parse(localStorage.getItem("textlist") || "[]");
    storelist.push({ values, outputText });
    localStorage.setItem("textlist", JSON.stringify(storelist));
    console.log(storelist);
  };

  const onReset = () => {
    form.resetFields();
    setOutputText("");
    setInputText("");
    setAction("");
  };

  return (
    <>
      <Card
        title="Encrypt or Decrypt Text"
        style={{
          width: "60%",
          height: "100%",
          margin: "0 auto 4rem",
          marginBottom: "4rem",
        }}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="input" label="Input" rules={[{ required: true }]}>
            <TextArea />
          </Form.Item>
          <Form.Item name="action" label="Action" rules={[{ required: true }]}>
            <Select
              placeholder="Select an option and change input text above"
              onChange={onActionChange}
            >
              <Option value="Encrypt">Encrypt Text</Option>
              <Option value="Decrypt">Decrypt Text</Option>
            </Select>
          </Form.Item>
          <div
            style={{
              display: "flex",
              marginLeft: "9rem",
              marginBottom: "2rem",
            }}
          >
            Result: {outputText}
          </div>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "6px" }}
            >
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default Card_Play;
