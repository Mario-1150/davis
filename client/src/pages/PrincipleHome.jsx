import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import "./PrincipleHome.css";

const PrincipleHome = () => {
  return (
    <div className="principle-home">
      <FrameComponent2 />
      <FrameComponent3 />
      <section className="image-belleco">
        <img
          className="pexels-liza-summer-6347901-1-icon"
          loading="lazy"
          alt=""
          src="/pexelslizasummer6347901-1@2x.png"
        />
        <div className="image-belleco-child" data-scroll-to="rectangle2" />
        <div className="image-belleco-inner">
          <div className="for-students-recent-graduate-parent">
            <h2 className="for-students">{`For Students & Recent Graduates`}</h2>
            <div className="we-provide-the-container">
              <p className="we-provide-the">
                We provide the necessary tools for ease of understanding
              </p>
              <ul className="offer-letters-financial-aid-in">
                <li className="offer-letters">Offer Letters</li>
                <li className="financial-aid-information">
                  Financial Aid Information
                </li>
                <li className="visa-information">Visa Information</li>
                <li className="academic-transcripts">Academic Transcripts</li>
                <li className="course-information">Course Information</li>
                <li className="employment-contracts">Employment Contracts</li>
              </ul>
              <p className="blank-line">&nbsp;</p>
            </div>
          </div>
        </div>
      </section>
      <img
        className="pexels-belle-co-99483-1000445-icon"
        loading="lazy"
        alt=""
        src="/pexelsbelleco994831000445-1@2x.png"
      />
      <FrameComponent4 />
      <section className="rectangle-parent">
        <div className="frame-child" data-scroll-to="rectangle" />
        <h2 className="our-goal">Our Goal</h2>
        <div className="our-goal-is-to-provide-people-wrapper">
          <div className="our-goal-is">{`Our goal is to provide people from all walks of life with the necessary tools to understand and make sense of any immediate burdens. We are dedicated to sustaining a service that ensures people no longer spend hours and hours on their documents attempting to understand all of the technical language involved. In providing this service we are committing to the goal of maximizing well being through a service that works alongside our customer as another toolkit. `}</div>
        </div>
      </section>
      <section className="principle-home-inner">
        <div className="interested-in-supporting-our-m-parent">
          <h1 className="interested-in-supporting-container">
            <p className="interested-in-supporting">{`Interested in supporting our mission? `}</p>
            <p className="make-sure-to">Make sure to sign up for updates!</p>
          </h1>
          <div className="rectangle-wrapper">
            <textarea className="frame-item" rows={19} cols={55} />
          </div>
        </div>
      </section>
      <footer className="principle-home-child" />
    </div>
  );
};

export default PrincipleHome;
