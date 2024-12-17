import PortfolioCard from "./PortfolioCard";
import { fpoData } from "../data/fpoData";

const Portfolio = () => {
  return (
    <div className="portfolios">
      <h2>एफपीओ</h2>
      <div className="portfolio-container">
        {fpoData.map((fpo) => (
          <PortfolioCard key={fpo.name} fpo={fpo} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
