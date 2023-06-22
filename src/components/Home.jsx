import React from 'react';
import HeroImage from '../assets/image5.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-900">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4">
        <div className="flex flex-col md:flex-row">
          <div className=" flex flex-col justify-center h-full md:w-1/2">
            <h2 className='text-4xl sm:text-7xl  text-white  font-bold'> I'm a Full Stack Developer </h2>
            <p className='text-gray-500 py-4 max-w-md'>
            I'm Sahil Shaik, a final year student at CMR College of Engineering and Technology. Proficient in C, C++ , Java and JavaScript, 
            I'm also a Full Stack Developer. As a Java Teaching Intern at Coding Ninjas,
             I've honed my skills and developed a passion for coding and education. 
             Continuous learning drives me to excel in both fields.
            </p>
            <div>
              <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
               flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={HeroImage} alt="My profile" className="rounded-2xl mx-auto w-full mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
