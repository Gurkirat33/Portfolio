import { MethodologyData } from "../Data/Methodology";

const Methodology = () => {
  return (
    <div className="section-container mt-12">
      <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        My Methodology for Success
      </h2>
      <p className="mx-auto mb-6 mt-2 max-w-2xl text-center text-slate-600 md:mt-4">
        Explore my structured approach to web development, meticulously crafted
        to tackle complexity with clarity and precision.
      </p>
      <div className="mx-auto max-w-2xl">
        {MethodologyData.map((item) => (
          <div key={item.id} className="flex flex-col p-1 text-center">
            <div className="flex items-center justify-center gap-4">
              <img
                src={item.stepImg}
                alt="stepImg"
                className="pointer-events-none h-20 w-20 select-none object-contain"
              />
              <h3 className="select-none text-xl font-semibold tracking-wider md:text-2xl">
                {item.heading}
              </h3>
            </div>
            <p>{item.desctiption}</p>
            {item.id != 4 ? (
              <img
                src={item.arrowDownImg}
                alt="arrowDownImg"
                className="pointer-events-none mx-auto mt-2 h-16 w-16 select-none object-cover"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
