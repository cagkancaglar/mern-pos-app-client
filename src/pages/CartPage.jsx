import { Table, Card, Button } from "antd";
import Header from "../components/header/Header";
import CreateInvoice from "../components/invoices/CreateInvoice";
import { useState } from "react";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="flex justify-end mt-4">
          <Card className="w-72">
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
            >
              Create Order
            </Button>
          </Card>
        </div>
      </div>
      <CreateInvoice
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default CartPage;
