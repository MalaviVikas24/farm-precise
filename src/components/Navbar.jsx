import { Link } from "react-router-dom";
import logo from "../assets/farm-precise-logo.jpg";

const Navbar = () => {
  return (
    <header>
      <nav className="top-navigation">
        <div className="brand-logo">
          <img
            loading="lazy"
            src={logo}
            width={200}
            height={"100%"}
            alt="FarmPrecise Logo"
          />
          <h1>फार्म प्रीसाईज</h1>
        </div>
        <ul className="navigation-links">
          <li>
            <Link to="/">मुख पृष्ठ</Link>
          </li>
          {[
            // { products: "उत्पादने" },
            { forum: "कृषि संवाद" },
            { market: "बाजारभाव" },
            { portfolio: "पोर्टफोलिओ" },
            { training: "प्रशिक्षण" },
            { FPO_products: "एफपीओ उत्पादने" },
          ].map((link, index) => (
            <li key={index}>
              {Object.entries(link).map(([key, value]) => (
                <Link key={key} to={`/${key.toLowerCase()}`}>
                  {value}
                </Link>
              ))}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
