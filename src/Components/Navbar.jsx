import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarData } from "../Data/Navbar";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const location = useLocation().pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="section-container sticky left-0 right-0 top-2 z-40 mx-4 flex flex-wrap items-center justify-between rounded-lg border border-white/50 bg-white/50 backdrop-blur-lg lg:mx-auto">
      <Link to="/" className="text-xl font-medium md:text-2xl">
        Gurkirat singh
      </Link>
      <div className="text-xl md:hidden">
        {isMobileMenuOpen ? (
          <RxCross1 onClick={handleMenuClick} className="text-2xl font-bold" />
        ) : (
          <GiHamburgerMenu onClick={handleMenuClick} />
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="mt-2 flex basis-full flex-col items-center gap-2">
          {NavbarData.map((item) => (
            <Link
              to={item.link}
              className={`link-effect w-fit text-lg font-medium capitalize ${location === item.link ? "text-primary" : ""}`}
              onClick={handleMenuClick}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
      <ul className="hidden gap-6 md:flex">
        {NavbarData.map((item) => (
          <Link
            to={item.link}
            className={`${location === item.link ? "text-primary" : ""} link-effect text-lg font-medium capitalize`}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
