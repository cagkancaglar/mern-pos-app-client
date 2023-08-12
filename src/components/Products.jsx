import { useState, useEffect } from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";

const Products = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const navigate = useNavigate();

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

  return (
    <div className="products-wrapper grid grid-cols-card gap-4">
      {products.map((product, index) => (
        <div
          className="product-item border hover:shadow-md cursor-pointer transition-all select-none"
          key={index}
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
      ))}
      <div
        className="product-item flex justify-center items-center border bg-purple-800 hover:shadow-md cursor-pointer transition-all select-none hover:opacity-90 min-h-[180px]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="text-white md:text-2xl" />
      </div>
      <div className="product-item flex justify-center items-center border bg-orange-800 hover:shadow-md cursor-pointer transition-all select-none hover:opacity-90 min-h-[180px]"onClick={() => navigate("/products")} >
        <EditOutlined className="text-white md:text-2xl" />
      </div>
      <AddProduct
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default Products;
