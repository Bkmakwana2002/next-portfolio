"use client";

import { IconBrandCpp, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandPython } from '@tabler/icons-react';
import React from 'react';

const Tech = () => {
  return (
    <div className='h-max bg-black' id='tech'>
      <p className='text-center text-white text-6xl mb-8'>Tech Stack</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-16">
        {/* Box 1 */}
        <div className="bg-white p-6 hover:scale-105 duration-300 rounded-lg text-black text-center aspect-w-1 aspect-h-1">
          <p className="font-bold mb-2">
            <IconBrandCpp size={40} className='mx-auto' />
          </p>
          {/* Add content for Box 1 */}
        </div>

        {/* Box 2 */}
        <div className="bg-blue-200 p-6 hover:scale-105 duration-300 rounded-lg text-black text-center aspect-w-1 aspect-h-1">
          <p className="font-bold mb-2">
            <IconBrandPython size={40} className='mx-auto' />
          </p>
          {/* Add content for Box 2 */}
        </div>

        {/* Box 3 */}
        <div className="bg-yellow-200 hover:scale-105 duration-300 p-6 rounded-lg text-black text-center aspect-w-1 aspect-h-1">
          <p className="font-bold mb-2">
            <IconBrandJavascript size={40} className='mx-auto' />
          </p>
          {/* Add content for Box 3 */}
        </div>

        {/* Box 4 */}
        <div className="bg-gray-400 p-6 hover:scale-105 duration-300 rounded-lg text-black text-center aspect-w-1 aspect-h-1">
          <p className="font-bold mb-2">
            <IconBrandNextjs size={40} className='mx-auto' />
          </p>
          {/* Add content for Box 4 */}
        </div>

        {/* Box 5 */}
        <div className="bg-red-200 p-6 hover:scale-105 duration-300 rounded-lg text-black text-center aspect-w-1 aspect-h-1">
          <p className="font-bold mb-2">
            <IconBrandNodejs size={40} className='mx-auto' />
          </p>
          {/* Add content for Box 5 */}
        </div>

        {/* Box 6 */}
        <div className="bg-green-200 p-6 hover:scale-105 duration-300 rounded-lg text-black text-center aspect-w-1 aspect-h-1">
          <p className="font-bold mb-2">
            <IconBrandMongodb size={40} className='mx-auto' />
          </p>
          {/* Add content for Box 6 */}
        </div>
      </div>
    </div>
  );
};

export default Tech;
