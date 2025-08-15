import { Context } from "../../utils/context";
import { useContext } from "react";
import "./Cart.css";
import Cartitems from "./CartItems/Cartitems";
import { makePaymentRequest } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe(
    "pk_test_51NJHc9Kg3ytMsovySVHD60CmdbLOzf1KjkC0IF9UWxLn3DknBPQtL7sNWmJINdrjeOf70Da3EyOYse8rWSL1nMpi00HpNggAaM"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      // console.log(error);
    }
    console.log("click");
  };
  return (
    <>
      {/* <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Toggle right offcanvas
      </button> */}

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          {/* ***************************** */}
          {!cartItems.length && (
            <div className="empty-cart text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/13637/13637462.png"
                alt=""
                className="img-fluid"
              />
              <h4 className="pt-5 pb-3">Unfortunately, Your Cart is Empty</h4>
              <p>Please Add Somethings in your Cart</p>
              <a href="/products">
                <button className="btn5 my-3">Continue Shopping</button>
              </a>
            </div>
          )}
          <Cartitems />
        </div>
        {cartItems.length && (
          <>
            <div className="offcanvas-footer p-3">
              <div className="row align-items-center ">
                <div className="col-md-7 col-12">
                  <h5>
                    SubTotal : <span>$ {cartSubTotal}</span>
                  </h5>
                </div>
                <div className="col-md-5 col-12 my-3 my-md-0">
                  {/* <button className="btn4" onClick={handlePayment}> */}
                  <button className="btn4" onClick={handlePayment}>
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
