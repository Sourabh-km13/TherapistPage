
"use client"
import Card from "./Card"
import Image from "next/image"

export default function CardContainer() {
    const data = [
    {
        src: '/images/asmimg.jpg',
        title: 'Anxiety & Stress Management',
        description:
        'Find relief from overwhelming anxiety and chronic stress through compassionate, evidence-based therapy.',
    },
    {
        src: '/images/relmanagement.jpg',
        title: 'Relationship Counseling',
        description:
        "Strengthen your relationship by improving communication,rebuilding trust, and resolving conflict. ",
    },
    {
        src: '/images/trauma.jpg',
        title: 'Trauma Recovery',
        description:
        'Heal from past trauma in a safe, supportive environment.Therapy helping you process painful experiences.',
    }
]

    return (
        
        <section 
        className='relative px-30 py-24 text-[#1E4145] '
        >
            <p className='text-6xl font-bold mb-10'>

                How I Help
            </p>
            <div className='flex flex-row h-max justify-between'>
                {
                    data.map(item=>{
                        return(
                            <div key={item.title}>
                                <Card imageSrc={item.src} title={item.title} description={item.description}/>

                            </div>
                        )
                    })
                }
            </div>
            <div className="">
            <Image
            src={'/images/image.webp'}
            alt={'plant'}
            width={140}
            height={140}
            objectFit="cover"
            className="absolute bottom-0 right-1"
            />
            </div>
        </section>
       
    )
}
