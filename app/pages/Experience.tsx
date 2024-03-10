import React from 'react';

const Experience = () => {
  return (
    <div className="h-[100vh] bg-black text-white flex flex-col justify-center items-center" id='exp'>
      <h1 className="text-4xl md:text-6xl mb-8">Experience</h1>
      <div className="relative w-full max-w-lg">

        <div className="absolute left-1/2 transform -translate-x-1/2 h-full bg-white rounded-full w-1">
        </div>

        {/* Experience 1 */}
        <div className="relative mb-8 cursor-pointer">
          <div className="bg-black border-2 duration-[350ms] hover:text-black border-white hover:bg-white hover:border-black p-6 rounded-lg">
            <h2 className="text-2xl text-blue-500 font-bold mb-2">Stable Labs</h2>
            <p className=" mb-2">Backend Developer</p>
            <p>Jan 2024 - Present</p>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative mb-8 cursor-pointer">
        <div className="bg-black border-2 duration-[350ms] hover:text-black border-white hover:bg-white hover:border-black p-6 rounded-lg">
            <h2 className="text-2xl text-green-500  font-bold mb-2">My Fab 11</h2>
            <p className=" mb-2">SDE intern</p>
            <p>May 2023 - Nov 2023</p>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="relative mb-8 cursor-pointer">
        <div className="bg-black border-2 hover:text-black duration-[350ms] border-white hover:bg-white hover:border-black p-6 rounded-lg">
            <h2 className="text-2xl text-red-500  font-bold mb-2">Vulture Institute</h2>
            <p className=" mb-2">Freelance Web Developer</p>
            <p>Aug 2022 - Feb 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;