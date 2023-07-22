import { Button, Form, Input, Modal, Table, message } from "antd";
import { useState } from "react";

const EditCategory = ({
  isEditModalOpen,
  setIsEditModalOpen,
  categories,
  setCategories,
}) => {
  const [editingRow, setEditingRow] = useState({});

  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form>
              <Form.Item className="mb-0" name="title">
                <Input defaultValue={record.title} />
              </Form.Item>
            </Form>
          );
        } else {
          return <p>{record.title} </p>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="link"
              onClick={() => setEditingRow(record)}
              className="pl-0"
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit" className="text-gray-500">
              Save
            </Button>
            <Button type="link" danger>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({
          ...values,
          id: editingRow._id,
        }),
        headers: { "Content-Type": "application/json charset=UTF-8" },
      });
      message.success("category updated successfully");
      setCategories(
        categories.map((category) => {
          if (category._id === editingRow._id) {
            return {
              ...category,
              title: values.title,
            };
          }
          return category;
        })
      );
    } catch (err) {
      message.success("Error: " + err.message);
      console.log(err);
    }
  };

  return (
    <Modal
      title="Category Operations"
      open={isEditModalOpen}
      footer={false}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <Form onFinish={onFinish}>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
    </Modal>
  );
};

export default EditCategory;
