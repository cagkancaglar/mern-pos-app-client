import Header from "./components/Header";
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories flex-1 max-h-[calc(100vh-_-112px)] overflow-auto">
        <Categories />
        </div>
        <div className="products flex-[8]">
          <Products />
        </div>
        <div className="cart-totals">
          cart totals
        </div>
      </div>
    </>
  );
}

export default App;
