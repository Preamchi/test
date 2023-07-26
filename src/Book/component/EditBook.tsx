import React, { useState } from "react";
import { Book } from "../../Component/interface";
import { Modal, Form, Input, Button, message } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

interface EditBook {
  book?: Book;
  handleEdit: (editedBook: Book) => void;
  onCancel?: () => void;
}

const BookEditForm = ({ book, handleEdit, onCancel }: EditBook) => {
  const [name, setName] = useState(book ? book.name : "");
  const [detail, setDetail] = useState(book ? book.detail : "");
  const [date, setDate] = useState(book ? book.date : "");
  const [total, setTotal] = useState(book ? book.total : 0);
  const [price, setPrice] = useState(book ? book.price : 0);
  const [modal2Open, setModal2Open] = useState(true);

  const handleSubmit = () => {
    if (name && detail && date && total && price) {
      const editedBook: Book = {
        ...book!,
        name,
        detail,
        date,
        total,
        price,
      };
      handleEdit(editedBook);
      onCancel && onCancel();
    } else {
      message.error("Please fill in all the fields");
    }
  };

  return (
    <>
      <Modal
        title="Edit Book"
        visible={Boolean(book)}
        onCancel={onCancel}
        footer={null}
      >
        <Form initialValues={book} onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter a name" }]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Detail"
            name="detail"
            rules={[{ required: true, message: "Please enter a detail" }]}
          >
            <Input value={detail} onChange={(e) => setDetail(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please enter a date" }]}
          >
            <Input value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Total"
            name="total"
            rules={[{ required: true, message: "Please enter a total" }]}
          >
            <Input
              value={total.toString()}
              onChange={(e) => setTotal(parseInt(e.target.value))}
            />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter a price" }]}
          >
            <Input
              value={price.toString()}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BookEditForm;
