import React from 'react';
import "../Components/Home.css";
import securinglogo from "../assets/securingsafe.png";
import playschoolbanner from "../assets/playschoolbanner.png";
import playschoolprograms from "../assets/playschoolprograms.png";
import playschoolfeedback from "../assets/playschoolfeedback.png"

function Home() {
  return (
    <div className="homeContainer">
        <div className="sloganContainer flex justify-center mt-2">
            <img src={securinglogo} className='rounded-xl xl:w-[80%] xl:h-72 xl:rounded-xl' alt="Slogan_img" />
        </div>
        <div className="playschoolbanner flex justify-center mt-2">
            <img src={playschoolbanner} className='rounded-xl xl:w-[80%] xl:h-96 xl:rounded-xl' alt="" />
        </div>
        <div className="playschoolbanner flex justify-center mt-2">
            <img src={playschoolprograms} className='rounded-xl xl:w-[80%] xl:h-96 xl:rounded-xl' alt="" />
        </div>
        <div className="playschoolbanner flex justify-center mt-2">
            <img src={playschoolfeedback} className='rounded-xl xl:w-[80%] xl:h-96 xl:rounded-xl' alt="" />
        </div>
    </div>
  )
}

export default Home