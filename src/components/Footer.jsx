import { Link } from "react-router-dom";
import logo from "../assets/farm-precise-logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <nav className="footer-navigation">
          <div className="brand-logo">
            <img
              src={logo}
              loading="lazy"
              width={300}
              height={"100%"}
              alt="FarmPrecise Logo"
            />
            <h1>फार्म प्रीसाईज</h1>
          </div>
          <div className="navigation-links">
            <ul>
              {[
                // { products: "उत्पादने" },
                { forum: "कृषि संवाद" },
                { market: "बाजारभाव" },
                { training: "प्रशिक्षण" },
                { FPO_products: "एफपीओ उत्पादने" },
                { contact: "संपर्क" },
              ].map((link, index) => (
                <li key={index}>
                  {Object.entries(link).map(([key, value]) => (
                    <Link
                      key={key}
                      to={`/${key.toLowerCase().replaceAll(" ", "")}`}
                    >
                      {value}
                    </Link>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
