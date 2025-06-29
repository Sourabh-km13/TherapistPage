import { Phone,Mail } from 'lucide-react';

export default function Info() {
  return (
    <div className="flex-1 space-y-8">
      <div>
        <h3 className="text-4xl font-bold mb-2">Our Office</h3>
        <p className="text-xl ">
          1287 Maplewood Drive<br />
           Los Angeles<br />
          Richmond<br />
          CA 90026<br />
        </p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700"
        >
          Google Maps
        </a>
      </div>

      <div>
        <h3 className="text-4xl font-bold mb-2">Hours</h3>
        <p className="text-xl">
          In-person: Tue & Thu, 10 AM–6 PM
          <br />
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold mb-2">Contact</h3>
        <p className="text-xl flex gap-2 items-center"><Phone/> (323) 555-0192</p>
        <p className="text-xl "><Mail /> serena@blakepsychology.com</p>
      </div>
    </div>
  );
}
