"use client"

export default function Button({ text, animate=false }) {
    return (
        <>

        
        <div className="relative inline-flex flex-col items-center">
            <button 
            className="px-6 py-3 text-blue-900 font-semibold bg-white rounded-lg shadow-md z-10
            cursor-pointer"
            >
                ✨ Start Healing Today
            </button>

            {animate&&<span className="absolute bottom-[-6px] h-2 w-3/5 rounded-full blur-md animate-rainbow-glow z-0"></span>}
        </div>


            
        </>
    )
}
