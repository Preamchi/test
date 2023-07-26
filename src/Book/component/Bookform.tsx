// src/components/BookForm.tsx

import React, { useState } from "react";
import { Book } from "../../Component/interface";
import { Button, Card, DatePicker, Form, Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";

/* interface BookProps {
  bookprops: (book: Book) => void;
} */

interface Param {
  setnewBook: Function;
  handleSubmit: Function;
}

type props = Param;

const BookForm: React.FC<props> = (props: props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    props.setnewBook(values);
    form.resetFields();
    console.log(
      moment(values.date).format("YYYY-MM-DD") +
        moment(values.time).format("HH:mm")
    );

    const newBook: Book = {
      id: new Date().getTime(),
      name: values.name,
      total: values.total,
      price: parseFloat(values.price),
      date:
        moment(values.date).format("YYYY-MM-DD") +
        moment(values.time).format("HH:mm"),
      detail: values.detail,
    };

    props.handleSubmit(newBook);

    /*  const storedBooks = JSON.parse(localStorage.getItem("books") || "[]");
    storedBooks.push(newBook);
    localStorage.setItem("books", JSON.stringify(storedBooks)); */
  };

  return (
    <Card
      title="Add Book"
      style={{
        width: "100%",
        height: "100%",
        marginTop: "4rem",
        marginBottom: "4rem",
      }}
    >
      <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
        <label>Book Name</label>
        <Form.Item name="name">
          <Input placeholder="Book Name" />
        </Form.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Date Post</label>
            <Form.Item name="date">
              <DatePicker showTime placeholder="Select Time" />
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2rem",
            }}
          >
            <label>Total</label>
            <Form.Item name="total">
              <InputNumber min={1} max={10} />
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2rem",
            }}
          >
            <label>Price</label>
            <Form.Item name="price">
              <InputNumber
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              />
            </Form.Item>
          </div>
        </div>
        <br></br>
        <label>Book Detail</label>
        <Form.Item name="detail">
          <TextArea rows={4} />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginTop: "2rem" }}>
          Add
        </Button>
      </Form>
    </Card>
  );
};

export default BookForm;
