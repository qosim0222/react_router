import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1C1E53] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-1/2">
            <Link to="/" className="w-[110px]">
              <img src={logo} alt="Finsweet" className="w-full" />
            </Link>
            <p className="text-sm opacity-80">
              We are always open to discuss your project and improve your online presence.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-1/2">
            <div className="text-lg font-semibold">Let's Talk!</div>
            <p className="text-sm opacity-80">
              We are always open to discuss your project, improve your online presence, and help with your UX/UI design challenges.
            </p>
            <div className="flex gap-6 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F4F6FC33] mt-12 pt-6">
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
