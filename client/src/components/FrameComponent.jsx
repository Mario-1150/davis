import { Button } from "@mui/material";
import "./FrameComponent.css";

const FrameComponent = ({ onEasyReadTextClick, onUnionClick }) => {
  return (
    <header className="union-container-wrapper">
      <div className="union-container">
        <div className="union-container-inner">
          <div className="easyread-group">
            <h1 className="easyread1" onClick={onEasyReadTextClick}>
              EasyRead
            </h1>
            <div className="a-simplified-tool1">
              A Simplified Tool for Everyday Life...
            </div>
          </div>
        </div>
        <div className="frame-parent4">
          <div className="home-wrapper">
            <div className="home">Home</div>
          </div>
          <div className="account-wrapper">
            <div className="account">Account</div>
          </div>
          <div className="union-frame">
            <img
              className="union-icon1"
              loading="lazy"
              alt=""
              src="/union.svg"
              onClick={onUnionClick}
            />
          </div>
          <div className="canvas-reference">
            <div className="sign-up-button">
              <div className="sign-up-button-child" />
              <div className="sign-in1">Sign In</div>
            </div>
          </div>
          <Button
            className="frame-child10"
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
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
