import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FetchDataFromApi } from "../../../utils/api";
// import Category from "../Home/Category/Category";
import { Context } from "../../../utils/context";
import Products from "../Products";
// import "./BestProduct.css";

const AllProducts = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
  });

  const getProducts = () => {
    FetchDataFromApi(
      // "/api/products?populate=*?pagination[page]=1&pagination[pageSize]=50"
      "/api/products?populate=*"
    ).then((res) => {
      // console.log(res);
      setProducts(res);
    });
  };

  return (
    <div className="Best_main">
      <div className="container gx-0 py-5 my-md-3">
        <div className="row gx-0 ">
          {/* ***************** */}
          <div className="col-md-12">
            <Products products={products} headingText="All Products" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
