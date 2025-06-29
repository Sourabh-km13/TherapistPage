export default function ContactForm() {
    return (
        <div className="flex-1">
            <div className="w-3/4 bg-[#F5F7FA] p-8 rounded-md shadow border border-gray-300 outline-1">
                <h3 className="text-xl font-bold mb-2 text-center">Get In Touch</h3>
                <p className="text-center mb-6 text-md">
                    Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
                </p>

                <form className="">
                    <div  className="mb-3">
                        <label className="block mb-1">Name</label>
                        <input type="text" placeholder="Name" className="w-full border border-gray-400 rounded px-3 py-2" />
                    </div>

                    <div className="mb-3">
                        <label className="block mb-1">Email</label>
                        <input type="email" placeholder="you@example.com" className="w-full border border-gray-400 rounded px-3 py-2" />
                    </div>

                    <div className="mb-3">
                        <label className="block mb-1">Phone</label>
                        <input type="tel" placeholder="(555) 234-5678" className="w-full border border-gray-400 rounded px-3 py-2" />
                    </div>

                    <div className="mb-3">
                        <label className="block mb-1">Message</label>
                        <textarea rows="4" placeholder="How can I help you?" className="w-full border border-gray-400 rounded px-3 py-2" />
                    </div>
                    <div className="mb-3 flex flex-row gap-1 justify-baseline">
                        <input type="checkbox" placeholder="check" className="border border-gray-400 rounded px-3 py-2" />
                        <label className=" ">I agree to be contacted checkbox</label>
                    </div>
                    

                    <button
                        type="submit"
                        className="w-full bg-slate-800 text-white font-medium py-2 rounded
                        hover:bg-transparent hover:border-1 hover:text-[#1E4145] transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
