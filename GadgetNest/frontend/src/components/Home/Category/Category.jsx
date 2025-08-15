import "./Category.css";
import { useNavigate } from "react-router-dom";


const Category = ({ category }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container gx-0 py-5 my-5 Full_main_category">
        <h2 className="p-md-3 main_h2">Top Categorys</h2>
        {/* **************************** */}
        <div className="row gx-0 main_category">
          {category?.data?.map((item) => {
            return (
              <div
                key={item.id}
                className="col-md-2 col-6"
                onClick={() => navigate(`/category/${item.id}`)}
              >
                <div className="home_category text-center">
                  <img
                    src={ 
                      "http://localhost:1337" +
                      item?.attributes?.img?.data?.attributes?.url
                    }
                    alt=""
                    className="img-fluid"
                  />
                  <h5 className="Category_title">{item?.attributes?.title}</h5>
                </div>
              </div>
            );
          })}
          {/* **************************** */}
        </div>
      </div>
    </>
  );
};

export default Category;
