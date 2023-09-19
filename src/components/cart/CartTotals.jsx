import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../store/cartSlice";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteProduct(item));
  };

  const handleAdd = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <div className="cart flex flex-col h-full max-h-[calc(100vh_-_90px)]">
      <h2 className="bg-blue-600 text-center py-4 text-white tracking-wide">
        Products in Basket
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {cart.cartItems.length > 0 ? (
          cart.cartItems.map((item, index) => (
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
              <div className="flex items-center gap-x-1.5">
                <Button
                  type="primary"
                  size="medium"
                  danger
                  className="w-full capitalize flex justify-center items-center !rounded-full"
                  icon={<MinusCircleOutlined />}
                  onClick={() => {
                    if (item.quantity === 1) {
                      if (window.confirm("Delete product?")) {
                        handleDelete(item);
                      }
                    } else {
                      handleDelete(item);
                    }
                  }}
                />
                <span className="font-semibold select-none w-6 text-center">
                  {item.quantity}
                </span>
                <Button
                  type="primary"
                  size="medium"
                  className="w-full capitalize flex justify-center items-center !rounded-full"
                  icon={<PlusCircleOutlined />}
                  onClick={() => handleAdd(item)}
                />
              </div>
            </li>
          ))
        ) : (
          <h3 className="text-yellow-600 font-semibold text-center">
            Your cart is empty...
          </h3>
        )}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <span className="font-medium capitalize">subtotals</span>
            <span className="font-medium">
              {cart.total > 0 ? cart.total.toFixed(2) : 0} $
            </span>
          </div>
          <div className="flex justify-between p-2">
            <span className="font-medium uppercase">kdv %{cart.tax}</span>
            <span className="font-medium text-red-600">
              {(cart.total * cart.tax) / 100 > 0
                ? ((cart.total * cart.tax) / 100).toFixed(2)
                : 0}{" "}
              $
            </span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2 mt-4">
            <span className="font-bold uppercase text-xl">total</span>
            <span className="font-bold text-xl">
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}{" "}
              $
            </span>
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
