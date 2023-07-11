import { Modal, Input, Form, Select, Card, Button } from "antd";

const CreateInvoice = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Modal
      title="Create Invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item
          name={"phone"}
          label="Phone Number"
          rules={[{ required: true }]}
        >
          <Input placeholder="53x xxx xx xx" maxLength={11} />
        </Form.Item>
        <Form.Item
          name={"payment type"}
          label="Payment Type"
          rules={[{ required: true }]}
        >
          <Select placeholder="Choose...">
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Credit Card">Credit Card</Select.Option>
          </Select>
        </Form.Item>
        <Card>
          <div className="flex justify-between">
            <span className="capitalize">subtotal</span>
            <span>1000.00 $</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="uppercase">kdv</span>
            <span className="text-red-600">180.00 $</span>
          </div>
          <div className="flex justify-between">
            <span className="capitalize font-semibold text-lg">subtotal</span>
            <span className="font-semibold text-lg">550.00 $</span>
          </div>
          <Button
            type="primary"
            className="mt-4 w-full"
            size="large"
            onClick={() => setIsModalOpen(true)}
            htmlType="submit"
          >
            Create Order
          </Button>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateInvoice;
