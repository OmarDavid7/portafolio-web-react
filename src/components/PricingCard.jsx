import { Link } from "react-router-dom";
import "./pricingcard.css";

const PricingCard = () => {
  return (
    <>
      <div className="pricing">
        <div className="card-container">
            {/*primera carta*/}
          <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn-p">PURCHASE NOW</Link>
          </div>

            {/*segunda carta*/}
          <div className="card">
            <h3>- Premiun -</h3>
            <span className="bar"></span>
            <p className="btc">$ 200</p>
            <p>- 2 Days -</p>
            <p>- 5 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn-p">PURCHASE NOW</Link>
          </div>

            {/*tercera carta*/}
          <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="btc">$ 300</p>
            <p>- 5 Days -</p>
            <p>- 8 pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn-p">PURCHASE NOW</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
