import { IconFileCv, IconMail } from '@tabler/icons-react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import React from 'react';

const Contact = () => {
  return (
    <div className='h-max bg-black text-white pt-16' id='contact'>
      {/* Your content above the footer */}

      <footer className="py-8">
        <div className="container mx-auto flex justify-center items-center">
          <nav className="flex space-x-4">
            <a href="https://github.com/Bkmakwana2002" target='_blank' className="text-white hover:text-gray-300 transition duration-300">
                <IconBrandGithub size={50}/>
            </a>
            <a href="https://www.linkedin.com/in/bhavya-kumar-makwana-547466217" target='_blank' className="text-white hover:text-gray-300 transition duration-300">
                <IconBrandLinkedin size={50}/>
            </a>
            <a href="mailto:bhavyakumarmakwana8112002@gmail.com" target='_blank' className="text-white hover:text-gray-300 transition duration-300">
                <IconMail size={50}/>
            </a>
            <a href="https://drive.google.com/file/d/10bUVomlfeZMHiN2rKtotjauDnJeRrcdw/view?usp=sharing" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
                <IconFileCv size={50}/>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
