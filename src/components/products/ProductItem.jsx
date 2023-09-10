import { addProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addProduct({ ...product, quantity: 1 }));
  };

  return (
    <div
      className="product-item border hover:shadow-md cursor-pointer transition-all select-none"
      onClick={() => handleClick(product)}
    >
      <div className="product-img">
        <img
          src={product.img}
          alt={product.title}
          className="object-cover w-full h-28 border-b"
        />
      </div>
      <div className="product-info flex flex-col p-4">
        <span className="font-semibold">{product.title}</span>
        <span>{product.price} $</span>
      </div>
    </div>
  );
};

export default ProductItem;
