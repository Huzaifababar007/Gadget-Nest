import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import { useParams, NavLink } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="category-title d-flex">
            <NavLink to="/">
              <h4>Home</h4>
            </NavLink>
            <span className="px-3">/</span>
            <h4 className="">
              {
                data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
                  ?.title
              }
            </h4>
          </div>
        </div>
        <Products products={data} />
      </div>
    </>
  );
};

export default Category;
