import { Button, Form, Input, Modal, Table, message } from "antd";
import { useState, useEffect } from "react";

const EditProduct = ({
  isEditModalOpen,
  setIsEditModalOpen,
  categories,
  setCategories,
}) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products/get-all");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
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
            <Button type="link" className="pl-0">
              Edit
            </Button>
            <Button type="link" htmlType="submit" className="text-gray-500">
              Save
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
    console.log(values);
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({
          ...values,
        }),
        headers: { "Content-Type": "application/json charset=UTF-8" },
      });
      message.success("category updated successfully");
      setCategories(
        categories.map((category) => {
          return category;
        })
      );
    } catch (err) {
      message.error(err);
      console.log(err);
    }
  };

  return (
    <Form onFinish={onFinish}>
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
    </Form>
  );
};

export default EditProduct;
