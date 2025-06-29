import ContactForm from './ContactForm';
import Info from './Info';

export default function Footer() {
  return (
    <section className="w-full bg-[#c7e7ef] px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 text-[#1E4145]">
        <Info />
        <ContactForm />
      </div>
    </section>
  );
}
