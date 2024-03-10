"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";


const HomePage = () => {
    return (
        <div id="home">
            <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={10}
                        maxSize={30}
                        particleDensity={10}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                    Bhavya Kumar Makwana
                </h1>
                <p className="text-white text-3xl">Full Stack Dev</p>
            </div>
        </div>
    )
}

export default HomePage
