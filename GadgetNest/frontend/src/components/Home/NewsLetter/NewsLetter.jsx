const NewsLetter = () => {
  return (
    <>
      <div className="NewLetter pb-5">
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-md-6 pb-5 px-3 pb-md-0 px-md-0">
              <div className="Newletter_col1">
                <h2>Join Us & Get Updates</h2>
                <p>Sign up for exclusive offers, latest news and updates</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Newletter_col2">
                <form action="">
                  <div className="form-input d-md-flex px-3 px-md-0 text-md-start text-center">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="form-control mx-md-3 mb-3 mb-md-0"
                    />
                    <button type="submit" className="main_btn rounded-5">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
