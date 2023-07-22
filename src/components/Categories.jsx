import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Input, Button, message } from "antd";
import { useState } from "react";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      message.success("category added successfully");
      form.resetFields();
      setCategories([...categories, values]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className="flex md:flex-col gap-4 ">
      {categories.map((category, index) => (
        <li className="category-item" key={index}>
          <span className="capitalize">{category.title}</span>
        </li>
      ))}
      <li
        className="category-item !bg-purple-800 hover:!opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:2xl" />
      </li>
      <Modal
        title="New Add Category"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            label="Add Category"
            name="title"
            rules={[
              {
                required: true,
                message: "category field cannot be empty",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;
