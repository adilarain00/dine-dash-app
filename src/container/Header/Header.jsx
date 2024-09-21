import { SubHeading } from "../../components";

import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Eat fast, live well" />
      <h1 className="app__header-h1">
        Fuel your day with <br /> Dine & Dash{" "}
        <img src={images.hiEmoji} alt="Hello" />{" "}
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to Dine & Dash, where quality meets speed! Whether you're in for
        a quick bite or craving something delicious on the go, we offer a unique
        dining experience tailored for modern living.
      </p>
      <button type="button" className="custom__button">
        Our Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.showcase} alt="ShowcaseImage" />
    </div>
  </div>
);

export default Header;
