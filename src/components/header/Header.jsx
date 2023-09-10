import { Input, Badge } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems.length);

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </Link>
        </div>
        <div className="header-search w-full ">
          <Input
            size="large"
            placeholder="Search..."
            className="rounded-full "
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="menu-links flex justify-center items-center gap-x-7 fixed md:static bottom-0 md:w-auto w-full bg-white md:bg-transparent left-0 border-t md:border-t-0 p-4 md:p-0 z-50">
          <Link
            to="/"
            className="menu-link flex flex-col items-center justify-center gap-y-1 hover:text-[#40a9ff] transition-all"
          >
            <HomeOutlined className="text-md md:text-2xl " />
            <span className="text-sm md:text-md capitalize">home</span>
          </Link>
          <Badge count={cartItems.length} offset={[0, 6]} className="hidden md:flex">
            <Link
              to="/cart"
              className="menu-link flex flex-col items-center justify-center gap-y-1 hover:text-[#40a9ff] transition-all"
            >
              <ShoppingCartOutlined className="text-md md:text-2xl " />
              <span className="text-sm md:text-md capitalize">cart</span>
            </Link>
          </Badge>
          <Link
            to="/invoices"
            className="menu-link flex flex-col items-center justify-center gap-y-1 hover:text-[#40a9ff] transition-all"
          >
            <CopyOutlined className="text-md md:text-2xl " />
            <span className="text-sm md:text-md capitalize">invoices</span>
          </Link>
          <Link
            to="/customers"
            className="menu-link flex flex-col items-center justify-center gap-y-1 hover:text-[#40a9ff] transition-all"
          >
            <UserOutlined className="text-md md:text-2xl " />
            <span className="text-sm md:text-md capitalize">customers</span>
          </Link>
          <Link
            to="/statistics"
            className="menu-link flex flex-col items-center justify-center gap-y-1 hover:text-[#40a9ff] transition-all"
          >
            <BarChartOutlined className="text-md md:text-2xl " />
            <span className="text-sm md:text-md capitalize">statistics</span>
          </Link>
          <Link
            to="/"
            className="menu-link flex flex-col items-center justify-center gap-y-1 hover:text-[#40a9ff] transition-all"
          >
            <LogoutOutlined className="text-md md:text-2xl " />
            <span className="text-sm md:text-md capitalize">logout</span>
          </Link>
        </div>
        <Badge count={5} offset={[0, 6]} className="md:hidden">
          <Link
            to="/"
            className="menu-link flex flex-col items-center justify-center gap-y-1 hover:text-[#40a9ff] transition-all"
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="text-sm md:text-md capitalize">cart</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
}

export default Header;
