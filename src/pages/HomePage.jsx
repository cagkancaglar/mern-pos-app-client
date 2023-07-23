import Header from "../components/Header";
import Categories from "../components/Categories";
import Products from "../components/Products";
import CartTotals from "../components/CartTotals";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/categories/get-all");
      const data = await res.json();
      data &&
        setCategories(
          data.map((category) => {
            return { ...category, value: category.title };
          })
        );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Header />
      <div className="home px-6 flex flex-col md:flex-row justify-between gap-10 pb-24 md:pb-0">
        <div className="categories max-h-[calc(100vh_-_112px)] overflow-auto md:pb-10">
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products categories={categories} />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default HomePage;
