import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="f-r-a-m-e-a-parent">
      <div className="f-r-a-m-e-a">
        <div className="f-r-a-m-e-b">
          <div className="f-r-a-m-e-b-inner">
            <div className="easyread-container">
              <h1 className="easyread2" onClick={onEasyReadTextClick}>
                EasyRead
              </h1>
              <div className="a-simplified-tool2">
                A Simplified Tool for Everyday Life...
              </div>
            </div>
          </div>
          <div className="for-students2">For Students</div>
        </div>
      </div>
      <div className="frame-wrapper6">
        <div className="for-professionals-group">
          <div className="for-professionals2">For Professionals</div>
          <div className="home1" onClick={onHomeTextClick}>
            Home
          </div>
        </div>
      </div>
      <div className="union-wrapper1">
        <img className="union-icon2" loading="lazy" alt="" src="/union.svg" />
      </div>
      <div className="frame-wrapper7">
        <div className="rectangle-parent7">
          <div className="frame-child11" />
          <div className="sign-in2">Sign In</div>
        </div>
      </div>
      <Button
        className="frame-child12"
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#000",
          fontSize: "20",
          background: "#fff",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { background: "#fff" },
          width: 167,
          height: 43,
        }}
      >
        Sign Up
      </Button>
    </header>
  );
};

export default FrameComponent1;
