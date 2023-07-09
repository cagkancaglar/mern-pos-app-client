import Header from "./components/Header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import CartTotals from "./components/CartTotals";

function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories max-h-[calc(100vh-_-112px)] overflow-auto">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
}

export default App;
