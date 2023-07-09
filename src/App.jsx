import Header from "./components/Header";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between items-center">
        <div className="categories">
        <Categories />
        </div>
        <div className="products">
          products
        </div>
        <div className="cart-totals">
          cart totals
        </div>
      </div>
    </>
  );
}

export default App;
