"use client"
import  Image  from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-[#B5DBDF] py-32 px-24 " id="about">
            <div className="max-w-6xl  flex flex-col md:flex-row 
            items-center  gap-10 ">
                {/* Profile Image */}
                {/* <div className="flex-shrink-0 flex flex-col basis-1/2 items-end">
                    <div className="rounded-2xl w-max h-[680px] border-8 border-white shadow-md
                    ">
                        
                        <Image
                            src='/images/DocProfile.jpg'
                            width={380}
                            height={680}
                            alt='Dr Serena Blake'
                            className="rounded-xl h-[680px] "
                        />

                    </div>
                    
                </div> */}
                <div className="flex-shrink-0 flex flex-col basis-1/2 items-end">
                <div className="rounded-2xl w-max max-h-[90vh] aspect-auto border-8 border-white shadow-md overflow-hidden">
                    <Image
                    src="/images/DocProfile.jpg"
                    width={380}
                    height={600} // for optimization (can be adjusted)
                    alt="Dr Serena Blake"
                    className="overflow-hidden object-cover w-full h-full"
                    />
                </div>
                </div>


                {/* Text Content */}
                <div className="text-[#1e4145] basis-1/2">
                    <span className="inline-block bg-yellow-200 text-sm px-3 py-1 rounded-full mb-3 font-medium text-gray-700">
                        About Dr. Serena Blake,licensed clinical psychologist 
                        based in Los Angeles, CA
                        </span>
                    <h2 className="text-5xl font-bold mb-4">Hi I'm Dr.Serena Blake</h2>

                    <p className="mb-4 text-2xl/10
                        font-[600]
                    ">
                        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                        with eight years of experience and over 500 client sessions. She blends evidence-based 
                        approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
                        personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma
                    </p>


                    <p className='text-2xl/10 font-[600]'>
                        Whether you meet in her Maplewood Drive office or connect virtually via Zoom,
                        Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                    </p>
                </div>
            </div>
        </section>
    );
}
