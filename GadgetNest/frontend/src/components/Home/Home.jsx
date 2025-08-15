import NewArrivals from "../Products/NewArrivals";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Discount from "./Discount/Discount";
import OrderMethod from "./OrderMethod/OrderMethod";
import { FetchDataFromApi } from "../../utils/api";
import { useEffect, useContext } from "react";
import { Context } from "../../utils/context";

const Home = () => {
  const { category, setCategory, products, setProducts } = useContext(Context);

  useEffect(() => {
    getCategory();
    getProducts();
  });

  const getCategory = () => {
    FetchDataFromApi("/api/categories?populate=*").then((res) => {
       //console.log(res);
      setCategory(res);
    });
  };
  const getProducts = () => {
    FetchDataFromApi("/api/products?populate=*").then((res) => {
       //console.log(res);
      setProducts(res);
    });
  };

  return (
    <div>
      <Banner />
      <Category category={category} />
      <Products products={products} />
      <NewArrivals />
      <Discount />
      <div className="section1 py-5">
        <OrderMethod />
      </div>
    </div>
  );
};

export default Home;
