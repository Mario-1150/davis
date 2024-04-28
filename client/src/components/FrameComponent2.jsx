import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onForStudentsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onForProfessionalsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOurImpactTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUnionClick = useCallback(() => {
    navigate("/2-about-us");
  }, [navigate]);

  return (
    <section className="frame-parent">
      <header className="frame-container">
        <div className="frame-group">
          <div className="frame-wrapper1">
            <div className="frame-parent1">
              <div className="frame-wrapper2">
                <div className="easyread-parent">
                  <h1 className="easyread">EasyRead</h1>
                  <div className="a-simplified-tool">
                    A Simplified Tool for Everyday Life...
                  </div>
                </div>
              </div>
              <div className="for-students1" onClick={onForStudentsTextClick}>
                For Students
              </div>
            </div>
          </div>
          <div className="for-professionals-wrapper">
            <div
              className="for-professionals"
              onClick={onForProfessionalsTextClick}
            >
              For Professionals
            </div>
          </div>
          <div className="our-impact-wrapper">
            <div
              className="our-impact"
              onClick={onOurImpactTextClick}
            >{`Our Impact `}</div>
          </div>
          <div className="union-wrapper">
            <img
              className="union-icon"
              loading="lazy"
              alt=""
              src="/union.svg"
              onClick={onUnionClick}
            />
          </div>
          <div className="frame-parent2">
            <div className="rectangle-parent3">
              <div className="frame-child5" />
              <div className="sign-in">Sign In</div>
            </div>
            <Button
              className="frame-button"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "20",
                background: "#fff",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#fff" },
                height: 43,
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <div className="rectangle-parent4">
        <div className="frame-child6" />
        <div className="frame-wrapper3">
          <div className="our-objective-parent">
            <h1 className="our-objective">Our Objective</h1>
            <h1 className="our-objective1">Our Objective</h1>
          </div>
        </div>
        <div className="we-strive-to">{`We strive to make a service that eases your life, simple as that! By developing our tool we can cut down the time it takes to read your documents and provide a streamline approach to making sense of the complex nature of some forms and documents. `}</div>
      </div>
    </section>
  );
};

export default FrameComponent2;
