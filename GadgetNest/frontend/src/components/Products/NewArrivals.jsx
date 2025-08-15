import iphone from "../../assets/iphones.png";
import Arrivals from "./Arrivals/Arrivals";
import "./NewArrival.css";

const NewArrivals = () => {
  return (
    <>
      <div className="container gx-0 py-5">
        <h2 className="pb-5 main_h2">New Arrivals </h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="NewArrival_col1">
              <h3>New Iphone 14 Pro  </h3>
              <div className="banner_btns pt-3">
                
              </div>
              <img src={iphone} alt="" className="img-fluid" width={500} height={600} />
              <button className="main_btn">Shop Now </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="NewArrival_col2">
              <Arrivals />
              <Arrivals />
              <Arrivals />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
