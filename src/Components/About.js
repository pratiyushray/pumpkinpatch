import React from "react";
// import playschoolaboutusbanner from "../assets/playschoolaboutusbanner.png";
// import playschoolvision from "../assets/playschoolvision.png";
import "./About.css";
import aboutsideimage from "../assets/aboutusimagelap.png";

function About() {
  return (
    <div className="aboutContainer flex flex-col justify-center p-8">
      <div className="aboutHeading">
        <h6>ABOUT US</h6>
      </div>
      {/* <div className="aboutBannerContainer flex justify-center mt-2">
        <img
          src={playschoolaboutusbanner}
          className="rounded-xl xl:w-[60%] xl:h-10 xl:rounded-xl"
          alt="AboutUs_img"
        />
      </div> */}
      <div className="firstTagline mt-3">
        <h3>
          We strive to foster the holistic development of every child and
          provide a nurturing and caring environment for your child's growth and
          development.
        </h3>
        <br />
        <hr />
        <h4>
          Welcome to Pumpkin Patch Playschool, a place where little minds are
          nurtured, and big dreams begin to take shape. We are a premier
          playschool dedicated to providing a warm, safe, and inclusive
          environment where children can learn, play, and grow.
        </h4>
      </div>
      <hr />

      <div className="mainDataContainer">
        <div className="dataContainer">
          <div className="missionContainer">
            <h3>Our Mission: </h3>
            <h4>
              At Pumpkin Patch, our mission is to inspire and empower young
              learners to become curious, confident, and compassionate
              individuals. We strive to create a strong foundation for lifelong
              learning by embracing each child's unique abilities, interests,
              and strengths.
            </h4>
          </div>

          <div className="visionContainer">
            <h3>Our Vision:</h3>
            <h4>
              Our vision is to be recognized as a unique playschool that sets
              the standard for excellence in early childhood education. We aim
              to create a community where children, parents, and educators work
              together to create a love for learning that lasts a lifetime.
            </h4>
          </div>

          <div className="valuesContainer">
            <h3>Our Values:</h3>
            <h4>
              Early childhood years calls for an infant that he might never be
              able to match again. He establishes the foundation of his
              personality as he learns to walk, communicate, develop a
              conscience, memory, and learn from his own experiences. His
              preschool years are when two-thirds of his mind is formed.
            </h4>
          </div>
        </div>
        <div className="photoContainer">
          <img src={aboutsideimage} alt="" />
        </div>
      </div>
      {/* <div className="visionContainer flex justify-center mt-2">
        <img src={playschoolvision} className='rounded-xl xl:w-[60%] xl:h-72 xl:rounded-xl' alt="AboutVision_img" />
    </div> */}
      <div className="contactRedirectContainer">
        <div className="contactlineContainer">
          <marquee behavior="" direction="">
            Contact us today to schedule a visit and learn more about our
            playschool. We look forward to welcoming you and your little one
            into the Pumpkin Patch family!
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default About;
