import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.cheff} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            — Chef Marco Valente, Culinary Maestro at Dine & Dash
          </p>
        </div>
        <p className="p__opensans">
          "At Dine and Dash, we believe food should be fast, but never rushed.
          Every dish I create is crafted with passion, precision, and a love for
          the simple pleasures in life."
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Marco Valente</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
