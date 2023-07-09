import { Button } from "antd";
import { ClearOutlined } from '@ant-design/icons';

const CartTotals = () => {
  return (
    <div className="cart flex flex-col h-full max-h-[calc(100vh_-_90px)]">
      <h2 className="bg-blue-600 text-center py-4 text-white tracking-wide">
        Products in Basket
      </h2>
      <div className="cart-items">
        <div className="cart-item capitalize"> cart item</div>
      </div>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <span className="font-medium capitalize">subtotals</span>
            <span className="font-medium">20 $</span>
          </div>
          <div className="flex justify-between p-2">
            <span className="font-medium uppercase">kdv %8</span>
            <span className="font-medium text-red-600">4 $</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2 mt-4">
            <span className="font-bold uppercase text-xl">total</span>
            <span className="font-bold text-xl">24 $</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 py-4 px-2">
            <Button type="primary" size="large" className="w-full capitalize">create order</Button>
            <Button type="primary" size="large" danger className="w-full capitalize flex justify-center items-center" icon={<ClearOutlined />}>clear</Button>
            
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
