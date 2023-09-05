import React from "react";
import "../Components/Faq.css";
import faqQuestion from "../assets/faqquestionimg.png";

function Faq() {
  return (
    <div className="firstContainer">
      <div className="faqContainer">
        <div className="headingContainer flex flex-col items-center mt-4">
          <h1 class="sm:text-4xl mb-8 font-bold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight dark:text-[#377531]">
            <span>Frequently</span>{" "}
            <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-purple-800 lg:inline">
              Asked
            </span>{" "}
            <span>Questions 🚀</span>
          </h1>
          <hr className="mt-0" />
        </div>
        <div className="faqSecContainer">
          <div className="faqSection">
            <div className="faqQuestion">
              Why should you choose Pumpkin Patch Kindergarten for your kid?
            </div>
            <div className="faqAnswer">
              Our playschool offers a well-rounded curriculum that is designed
              specifically for early learners. We focus on developing essential
              skills such as language and communication, motor skills,
              problem-solving, creativity, and social interaction through a
              play-based fun approach.
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++ */}
            <div className="faqQuestion">
              How is playschool important for a child?
            </div>
            <div className="faqAnswer">
              A playschool provides a structured environment where children can
              begin their learning journey at an early age. Playschool provides
              ample opportunities for children to engage in physical activities
              such as running, jumping, climbing, and playing outdoor games.{" "}
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++ */}
            <div className="faqQuestion">What are your operating hours?</div>
            <div className="faqAnswer">
              Our playschool is open from Monday to Friday, from 9:30 am to
              12:30 pm. You can contact our office directly, and our staff will
              guide you through the process.
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++ */}

            <div className="faqQuestion">
              What experience do teachers and staff have?
            </div>
            <div className="faqAnswer">
              Our playschool has a team of highly skilled and experienced
              teachers who are passionate about early childhood education. The
              warm staff provides a nurturing and caring environment for your
              child's growth and development.
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++ */}
          </div>
          <div className="faqSecImageContainer">
            <img src={faqQuestion} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
