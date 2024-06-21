import { ContactFormData, ContactMeData } from "../Data/ContactMe.jsx";
import ContactImg from "../assets/try.avif";

const ContactForm = () => {
  return (
    <>
      <h2 className="my-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Contact me
      </h2>
      <div className="section-container mb-12 gap-4 md:flex">
        <div className="hidden border-2 lg:flex">
          <div className="relative">
            <img src={ContactImg} alt="" className="h-full object-cover" />
            <div className="absolute bottom-0 right-0 top-0 space-y-4 bg-black/70 p-12 text-white">
              {ContactMeData.map((item, index) => (
                <div className="mx-auto flex max-w-80 gap-4" key={index}>
                  <p className="px-2 pt-1 text-2xl">{item.icon}</p>
                  <div>
                    <h4 className="text-xl">{item.heading}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-primary py-6 text-white md:w-2/5 lg:hidden">
          <h2 className="mb-4 text-center text-3xl">Contact Details</h2>
          <div className="space-y-4">
            {ContactMeData.map((item, index) => (
              <div className="mx-auto flex max-w-80 gap-4" key={index}>
                <p className="px-2 pt-1 text-2xl">{item.icon}</p>
                <div>
                  <h4 className="text-xl">{item.heading}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 text-center md:w-3/5 md:text-left">
          <h2 className="mb-2 mt-6 text-3xl font-semibold md:mt-0">
            LET'S DISCUSS YOUR IDEA
          </h2>
          <p className="mx-auto max-w-lg text-slate-600 md:mx-0 md:max-w-xl">
            Our team is looking forward to discussing the scope of your future
            project. Don't hesitate to contact us and we'll help your business
            skyrocket!
          </p>
          <div className="mt-4 space-y-4">
            {ContactFormData.map((input) => (
              <div key={input.name} className="flex flex-col gap-1">
                <label htmlFor={input.id} className="text-left font-medium">
                  {input.name}
                </label>
                {input.type === "textarea" ? (
                  <textarea
                    key={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    rows={input.rows}
                    className="max-w-lg rounded-sm border-b-2 border-black p-2 focus:outline-none"
                  />
                ) : (
                  <input
                    key={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    className="rounded-sm border-b-2 border-black p-2 focus:outline-none md:max-w-lg"
                  />
                )}
              </div>
            ))}
            <button className="rounded-lg bg-primary px-4 py-2 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
