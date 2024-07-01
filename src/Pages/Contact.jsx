import ContactForm from "../Components/ContactForm";
import LocationMap from "../Components/LocationMap";

const Contact = () => {
  return (
    <div className="pt-6 md:pt-12">
      <div>
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Contact Us
        </h2>
        <p className="mx-auto my-4 max-w-2xl px-8 text-center text-slate-600">
          We’d love to hear from you. Whether you have a question about
          features, trials, pricing, need a demo, or anything else, our team is
          ready to answer all your questions.
        </p>
      </div>
      <ContactForm />
      <LocationMap />
    </div>
  );
};

export default Contact;
