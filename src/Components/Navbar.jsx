import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarData } from "../Data/Navbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="section-container fixed left-0 right-0 top-2 mx-4 flex items-center justify-between rounded-lg border border-white/50 bg-white/50 backdrop-blur-lg lg:mx-auto">
      <div className="text-xl font-medium md:text-2xl">Gurkirat singh</div>
      <div className="text-xl md:hidden">
        <GiHamburgerMenu />
      </div>
      <ul className="hidden gap-6 md:flex">
        {NavbarData.map((item) => (
          <Link
            to={item.link}
            className="link-effect text-lg font-medium capitalize"
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
