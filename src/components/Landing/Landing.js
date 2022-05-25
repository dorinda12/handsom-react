//import Button from "../Button/Button";
import "./Landing.scss";
import LandingImg from "../../assets/images/landing.jpg";
import { Button } from "../../lib/style/generalStyles";
import {
  Landing as WraperLanding,
  LandingImage,
  LandingOverlay,
  LandingOverlayPrimary,
  LandingOverlaySecondary,
  LandingContent,
  LandingTitle,
  LandingSubtitle
}from "./LandingStyle";
/* const Landing = () =>{
     return (
        <div className="Landing">
          <img
            className="Landing-Img"
            src={LandingImg}
            alt="landing image"
          />
          <div className="Landing-Overlay">
            <div className="Landing-OverlayPrimary"></div>
            <div className="Landing-OverlaySecondary"></div>
          </div>
           <div className="Landing-Content">
            <div className="Landing-ContentInner">
              <h1 className="Landing-Title">Learn what matters with Speck</h1>
              <p className="Landing-Subtitle">
                Make a turnaround in your career or upgrade your current skill
                set with knowledge-based lessons from IT practice.
              </p>
             <Button modifiers={["landing"]}>Explore Courses</Button>
            </div>
          </div>
        </div>

     );
}; */
const Landing = () =>{
    return (
      <WraperLanding>
        <LandingImage src = {LandingImg}/>
          <LandingOverlay>
            <LandingOverlayPrimary/>
            <LandingOverlaySecondary/>
          </LandingOverlay>
          <LandingContent>
            <LandingTitle>Learn what matters with</LandingTitle>
            <LandingSubtitle>Make a turnaround in your career or upgrade your current skill
            set with knowledge-based lessons from IT practice. </LandingSubtitle>
          </LandingContent>
          <Button>Explore Courses</Button>

      </WraperLanding>
    );
}

export default Landing;