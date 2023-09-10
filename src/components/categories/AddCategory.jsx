import { Form, Modal, Input, Button, message } from "antd";

const AddCategory = ({
  categories,
  setCategories,
  isAddModalOpen,
  setIsAddModalOpen,
}) => {
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
  );
};

export default AddCategory;
