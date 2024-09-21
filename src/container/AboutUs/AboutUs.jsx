import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.D} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.knifeLine} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The chefs craft mouthwatering dishes from fresh, sourced ingredients,
          ensuring you never have to compromise on flavor or quality. Swing by
          for a quick meal, and you'll leave satisfied, fueled, and ready to
          tackle the day!
        </p>
        <button type="button" className="custom__button">
          Read More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.knifeLine} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Founded in 2024, Dine and Dash started with one simple mission: to
          provide high-quality, delicious food for people on the move. From our
          humble beginnings as a small kitchen in the heart of the city
        </p>
        <button type="button" className="custom__button">
          Read More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
