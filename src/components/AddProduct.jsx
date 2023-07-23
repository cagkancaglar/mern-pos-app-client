import { Form, Modal, Input, Button, message, Select } from "antd";

const AddProduct = ({
  categories,
  products,
  setProducts,
  isAddModalOpen,
  setIsAddModalOpen,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      message.success("product added successfully");
      form.resetFields();
      setProducts([...products, values]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      title="New Add Product"
      open={isAddModalOpen}
      onCancel={() => setIsAddModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
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
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProduct;
