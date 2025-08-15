import "./OrderMethod.css";
import img1 from "../../../assets/ship.png";
import img2 from "../../../assets/secure.png";
import img3 from "../../../assets/online-support.png";

const OrderMethod = () => {
  return (
    <>
      <div className="Order">
        <div className="container gx-0 py-0 py-md-5">
          <div className="row gx-0 align-items-center">
            <div className="col-md-4">
              <div className="order_col1">
                <img src={img1} alt="" className="img-fluid" />
                <h6 className="py-2">Free Shipping</h6>
                <p>
                  Enjoy fast and reliable shipping with every order. We offer multiple shipping options to meet your needs.
                  Track your package every step of the way for peace of mind. Free shipping on orders over [$ 150]
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="order_col1">
                <img src={img2} alt="" />
                <h6 className="py-2">Payment</h6>
                <p>
                  We accept a variety of payment methods including credit cards, debit cards, and PayPal. All transactions are securely processed to ensure your information is safe.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="order_col1">
                <img src={img3} alt="" />
                <h6 className="py-2">Online Support</h6>
                <p>
                  Our dedicated support team is here to assist you 24/7. Whether you have questions about your order, need help with a product, or require technical support, we're just a click away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderMethod;
