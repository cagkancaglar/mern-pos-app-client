import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../store/cartSlice";

const CartTotals = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteProduct(item));
  };

  return (
    <div className="cart flex flex-col h-full max-h-[calc(100vh_-_90px)]">
      <h2 className="bg-blue-600 text-center py-4 text-white tracking-wide">
        Products in Basket
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {cartItems &&
          cartItems.map((item, index) => (
            <li
              className="cart-item capitalize flex justify-between select-none"
              key={index}
            >
              <div className="flex items-center gap-x-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex flex-col">
                  <b>{item.title}</b>
                  <span>
                    {item.price}$ x {item.quantity}{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <Button
                  type="primary"
                  size="medium"
                  danger
                  className="w-full capitalize flex justify-center items-center !rounded-full"
                  icon={<MinusCircleOutlined />}
                  onClick={() => handleDelete(item)}
                />
                <span className="font-semibold select-none">
                  {item.quantity}
                </span>
                <Button
                  type="primary"
                  size="medium"
                  className="w-full capitalize flex justify-center items-center !rounded-full"
                  icon={<PlusCircleOutlined />}
                />
              </div>
            </li>
          ))}
      </ul>
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
          <Button type="primary" size="large" className="w-full capitalize">
            create order
          </Button>
          <Button
            type="primary"
            size="large"
            danger
            className="w-full capitalize flex justify-center items-center"
            icon={<ClearOutlined />}
          >
            clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
