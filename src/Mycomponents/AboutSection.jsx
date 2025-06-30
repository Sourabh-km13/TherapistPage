"use client"
import  Image  from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-[#B5DBDF] px-2 md:py-32 md:px-24 overflow-hidden" id="about">
            <div className="max-w-6xl  flex flex-col md:flex-row 
            items-center gap-10 xl:mx-auto">
                
                <div className="flex flex-col basis-1/2 items-end">
                <div className="rounded-2xl w-full max-h-[90vh] aspect-auto border-8 border-white
                shadow-md overflow-hidden">
                    <Image
                    src="/images/DocProfile.jpg"
                    width={380}
                    height={600} 
                    alt="Dr Serena Blake"
                    className="overflow-hidden object-cover w-full h-full"
                    />
                </div>
                </div>


                {/* Text Content */}
                <div className="text-[#1e4145] basis-1/2 p-2">
                    <span className="inline-block bg-yellow-200 text-sm px-3 py-1 rounded-full mb-3 font-medium text-gray-700">
                        About Dr. Serena Blake,licensed clinical psychologist 
                        based in Los Angeles, CA
                        </span>
                    <h2 className="text-2xl lg:text-5xl font-bold mb-4">Hi I'm Dr.Serena Blake</h2>

                    <p className="mb-4 text-xl lg:text-2xl/10
                        font-[600]
                    ">
                        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                        with eight years of experience and over 500 client sessions. She blends evidence-based 
                        approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
                        personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma
                    </p>


                    <p className='text-xl lg:text-2xl/10 font-[600]'>
                        Whether you meet in her Maplewood Drive office or connect virtually via Zoom,
                        Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                    </p>
                </div>
            </div>
        </section>
    );
}
