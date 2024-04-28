import FrameComponent1 from "../components/FrameComponent1";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <FrameComponent1 />
      <section className="about-us-more-parent">
        <h1 className="about-us1">{`About Us & More`}</h1>
        <div className="info-to-fill">Info to fill should time permit</div>
      </section>
    </div>
  );
};

export default AboutUs;
