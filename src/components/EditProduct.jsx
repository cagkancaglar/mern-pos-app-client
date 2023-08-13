import { Button, Form, Input, Modal, Table, Select, message } from "antd";
import { useState, useEffect } from "react";

const EditProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  const [form] = Form.useForm();

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products/get-all");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/categories/get-all");
      const data = await res.json();
      data &&
        setCategories(
          data.map((category) => {
            return { ...category, value: category.title };
          })
        );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const columns = [
    {
      title: "Product Title",
      dataIndex: "title",
      width: "20%",
      render: (_, record) => {
        return <p>{record.title} </p>;
      },
    },
    {
      title: "Image",
      dataIndex: "img",
      width: "20%",
      render: (_, record) => {
        return (
          <img
            src={record.img}
            alt={record.title}
            className="w-full h-32 object-cover"
          />
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "20%",
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <div>
            <Button
              type="link"
              className="pl-0"
              onClick={() => {
                setIsEditModalOpen(true);
                setEditingItem(record);
              }}
            >
              Edit
            </Button>

            <Button
              type="link"
              danger
              onClick={() => handleCategoryDelete(record._id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const handleCategoryDelete = (id) => {
    console.log(id);

    try {
      fetch("http://localhost:5000/api/categories/delete-category", {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
        headers: { "Content-Type": "application/json charset=UTF-8" },
      });
      message.success("category deleted successfully");
      setCategories(categories.filter((category) => category._id !== id));
    } catch (err) {
      message.error(err);
      console.log(err);
    }
  };

  const onFinish = (values) => {
    console.log("editingItem", editingItem);
    try {
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({
          ...values,
          productId: editingItem._id,
        }),
        headers: { "Content-Type": "application/json charset=UTF-8" },
      });
      message.success("product updated successfully");
      setProducts(
        products.map((category) => {
          return category;
        })
      );
    } catch (err) {
      message.error(err);
      console.log(err);
    }
  };

  return (
    <>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
      <Modal
        title="New Add Product"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingItem}
        >
          <Form.Item
            label="Product Name"
            name="title"
            rules={[
              {
                required: true,
                message: "product field cannot be empty",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product Image"
            name="img"
            rules={[
              {
                required: true,
                message: "image field cannot be empty",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product Price"
            name="price"
            rules={[
              {
                required: true,
                message: "price field cannot be empty",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Categories"
            name="category"
            rules={[
              {
                required: true,
                message: "category field cannot be empty",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Category"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditProduct;
