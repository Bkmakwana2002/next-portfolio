"use client"

import React from 'react'
import { HoverEffect } from "../components/ui/card-hover-effect";


export const projects = [
    {
        title: "Blockchain API",
        description:
            "Developed backend application that uses AlchemyAPI to get different details of an account.User authentication is handled via JSON Web Tokens (JWT) and signature verification using metamask and ethers. Protected route from DDOS attack.",
        link: "https://github.com/Bkmakwana2002/Alchemy-API",
    },
    {
        title: "Share-Image-AI",
        description:
            "Developed web application that uses AI to generate images based on text prompts, users can create photos to share. React.js for the frontend and Node.js with Express.js for the backend. MongoDB managed the NoSQL database, and Cloudinary facilitated the storage of raw images. This tech stack ensures a seamless user experience.",
        link: "https://github.com/Bkmakwana2002/Share-Image-AI",
    },
    {
        title: "Chatter’s Paradise",
        description:
            "Designed application using React.js for the frontend, backed by Node.js with Express.js for dynamic backend support.MongoDB served as the NoSQL database, while the incorporation of the Socket.IO library for real-time chat capabilities.",
        link: "https://github.com/Bkmakwana2002/Chatters-paradise",
    },
    {
        title: "Quaerere",
        description:
            "Quaerere is a full-stack web application that harnesses the capabilities of the Metaphor API to provide an enhanced web search experience.",
        link: "https://github.com/Bkmakwana2002/Quaerere",
    },
    {
        title: "E-Commerce API",
        description:
            "This project is an example of a simple E-Commerce API built using FastAPI and MongoDB. It provides endpoints to manage products and orders in an e-commerce application.",
        link: "https://github.com/Bkmakwana2002/E-commerce-fastapi",
    },
    {
        title: "JS-Chain",
        description:
            "Implementing and understanding core blockchain topics like mining and hashing using JavaScript",
        link: "https://github.com/Bkmakwana2002/JS-Chain",
    },
];

const Projects = () => {
    return (
        <div className='h-max bg-black' id='projects'>
            <p className='text-center text-white text-4xl md:text-6xl'>Projects</p>
            <HoverEffect items={projects} />
        </div>
    )
}




export default Projects