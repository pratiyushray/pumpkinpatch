import React from "react";
// import playschoolclassroom from "../assets/playschoolclassroom.png";
import "./Curriculum.css";
import playbasedlearning from "../assets/playbasedlearning.png";
import kidsstudy from "../assets/kidsstudy.png";
import physicalactivity from "../assets/physicalactivity.png";
import scienceimage from "../assets/scienceimage.png";
import artcraft from "../assets/artcraft.png";

function Curriculum() {
  return (
    <div className="curriculumContainer">
      {/* <div className="sloganContainer flex justify-center mt-2">
            <img src={playschoolclassroom} className='rounded-xl xl:w-[80%] xl:h-72 xl:rounded-xl' alt="Classroom_img" />
        </div> */}
      <div className="curriculumHeading">
        <h6>CURRICULUM</h6>
      </div>
      <div className="curriculumContent">
        <h4>
          Our programs are designed to help your child develop essential skills,
          foster creativity, and build a strong foundation for their future.
          Here's a glimpse into what we offer
        </h4>

        <div className="insideRightContainer">
          <div className="contentBox leftright">
            <h6>
              <b>1. Play-Based Learning:</b>{" "}
              <span class="spaninsideContent">
                We believe that children learn best through play. Our play-based
                curriculum allows kids to explore, discover, and experiment in a
                safe and supervised setting. Through interactive activities,
                they will develop social skills, problem-solving abilities, and
                a love for learning.
              </span>
            </h6>
          </div>
          <div className="imageBox">
            <img src={playbasedlearning} alt="" />
          </div>
        </div>

        <div className="insideLeftContainer ">
          <div className="imageBox">
            <img src={kidsstudy} alt="" />
          </div>
          <div className="contentBox rightleft">
            <h6>
              <b>2. Early Literacy:</b>{" "}
              <span class="spaninsideContent">
                At our preschool, we prioritize early literacy skills to ensure
                your child's success in reading and writing. Through storytime,
                phonics exercises, and hands-on activities, we introduce them to
                the world of words, letters, and sounds. We also encourage a
                love for books and storytelling, igniting their imagination and
                creativity.
              </span>
            </h6>
          </div>
        </div>

        <div className="insideRightContainer ">
          <div className="contentBox leftright">
            <h6>
              <b>3. Math and Science Exploration:</b>{" "}
              <span class="spaninsideContent">
                Our program introduces basic math and science concepts through
                fun and engaging activities. Through hands-on experiments,
                counting games, and puzzles, your child will develop a solid
                foundation in numbers, shapes, patterns, and problem-solving
                skills. We want to instill a sense of wonder and curiosity about
                the world around them.
              </span>
            </h6>
          </div>
          <div className="imageBox">
            <img src={scienceimage} alt="" />
          </div>
        </div>

        <div className="insideLeftContainer ">
          <div className="imageBox">
            <img src={artcraft} alt="" />
          </div>
          <div className="contentBox rightleft">
            <h6>
              <b>4. Arts and Crafts:</b>{" "}
              <span class="spaninsideContent">
                Creativity is a crucial aspect of your child's development. Our
                art and craft activities allow them to express their imagination
                and explore different mediums. From finger painting to collage
                making, your little one will have the opportunity to create
                masterpieces while enhancing their fine motor skills and
                boosting self-confidence.
              </span>
            </h6>
          </div>
        </div>

        <div className="insideRightContainer ">
          <div className="contentBox leftright">
            <h6>
              <b>5. Physical Development:</b>
              <span class="spaninsideContent">
                We understand the importance of physical activity for your
                child's overall growth. Our program includes outdoor playtime,
                where kids can run, jump, climb, and play games that enhance
                their gross motor skills. We also incorporate yoga and
                stretching exercises to promote flexibility and mindfulness.
              </span>
            </h6>
          </div>
          <div className="imageBox">
            <img src={physicalactivity} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
