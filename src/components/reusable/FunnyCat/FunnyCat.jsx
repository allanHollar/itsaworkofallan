import funnyCat from "../../../images/cute-cat.webp";
import "./funnyCat.sass";

const FunnyCat = () => {
  return (
    <div className="catContainer">
      <div className="cat">
        <img src={funnyCat} alt="Cat playing with a ball" />
        <div className="left eye">
          <div className="eyeWatch">
            <div className="glare"></div>
          </div>
        </div>
        <div className="right eye">
          <div className="eyeWatch">
            <div className="glare"></div>
          </div>
        </div>
      </div>
      <div className="ballContainer">
        <div className="ballShadow">
          <div className="ball"></div>
        </div>
      </div>
    </div>
  );
};

export default FunnyCat;
