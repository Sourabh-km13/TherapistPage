"use client"
import Image from 'next/image';

export default function Card({
    imageSrc,
    title,
    description,
    buttonText = "Learn More",

}) {
    return (
        <div className="max-w-sm w-full bg-[#c7e7ef] rounded-lg border border-gray-400 p-8
        flex flex-col items-center text-center h-full
        hover:shadow-lg transition-shadow duration-200
         ">
            <div className='hover:translate-x-1.5 transition-transform duration-200'>

                <div className="w-full relative mb-4 rounded-md h-48">
                    <Image
                        src={imageSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <h3 className="text-xl font-bold mb-2 ">
                    {title}
                </h3>

                <p className="text-md w-full mb-4 break-words">

                    {description}
                </p>
            </div>


            <button

                className="w-full px-4 py-2   font-medium border border-gray-400 rounded
                 hover:bg-white transition-colors duration-200"
            >
                {buttonText}
            </button>
        </div>
    );
}
