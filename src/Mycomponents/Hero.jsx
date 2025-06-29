"use client"
import { useEffect, useState, useRef } from "react";
import Button from "./Button";

export default function Hero() {
    const lines = [
        "Support for anxiety, trauma, and grief.",
        "Therapy that helps you rediscover your strength.",
        "Personalized care in a safe, non-judgmental space.",
        "Together, we move toward healing and hope.",
    ]
    const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); // start exit animation
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % lines.length); // change text
        setShow(true); // start entry animation
      }, 500); // match animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);


    return (
        <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center 
    bg-no-repeat px-6 text-white
    bg-[url(../../public/images/Heroimg.jpg)]
    ">

            <div className="absolute inset-0 bg-black/30 z-0"></div>


            <div className="relative z-10 text-center max-w-3xl space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Care You Can Trust.<br />Change You Can Feel.
                </h1>
                <h2 className="text-lg md:text-xl text-gray-200 font-medium">
                    Empathetic, evidence-based therapy that meets you where you are and walks with you toward where you want to be.
                </h2>


             <div className="h-16 overflow-hidden relative flex items-center justify-center text-xl font-semibold">
                <p
                    key={index}
                    className={`absolute transition-all duration-500 ease-in-out ${
                    show ? "animate-slide-in" : "animate-slide-out"
                    }`}
                >
                    {lines[index]}
                </p>
            </div>

                <Button text={'book your session'} animate={true} />
            </div>
        </section>
    )
}
