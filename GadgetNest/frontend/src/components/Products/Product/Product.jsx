import { useNavigate } from "react-router-dom";
//import img from "../../../assets/Mouser.png"

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Product_main">
        <div className="col" onClick={() => navigate("/product/" + id)}>
          <div className="card border-0 h-100">
            <div className="card_head">
              <img
                src={"http://localhost:1337"+ data?.img?.data?.attributes?.url}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="card-body">
              <p className="Product_name py-1">{data.title}</p>
              <div className="icons py-2 d-flex align-items-center">
                <i className="fa-solid fa-star"></i>
                <p>{data.rating}</p>
              </div>
              <h4 className="Product_price">${data.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
