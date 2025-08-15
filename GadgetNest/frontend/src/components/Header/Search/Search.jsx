import { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setsearch }) => {
  const [query, setQuery] = useState("");
  // const [search, setsearch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filter[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <>
      {/* modal-dialog modal-xl */}
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}
      <div
        className="modal fade modal-xl"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            {/* ********************************** */}
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* ********************************** */}
            <div className="modal-body">
              <div className="container">
                {/* ********************************** */}
                <div className="row pb-4">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="search_input">
                      <input
                        type="search"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="SEARCH PRODUCTS ..."
                        value={query}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                  {/* ********************************** */}
                </div>
                {/* ********************************** */}
                {data?.data?.map((item) => (
                  <div
                    key={item.id}
                    className="row py-2 search_row2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      navigate("/product/" + item.id);
                      setsearch(true);
                    }}
                  >
                    <div className="col-md-3"></div>
                    <div className="col-md-6 search_row2_col1">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <img
                            src={
                              "http://localhost:1337" +
                              item?.attributes?.img?.data.attributes?.url
                            }
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-8">
                          <h5>{item.attributes.title}</h5>
                          <h6 className="py-1">
                            {item.attributes.description}
                          </h6>
                        </div>
                        <div className="col-md-1"></div>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                  </div>
                ))}

                {/* ********************************** */}
              </div>
            </div>
            {/* ********************************** */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
