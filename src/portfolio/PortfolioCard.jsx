/* eslint-disable react/prop-types */
import {
  FaMapMarkerAlt,
  FaUsers,
  FaLeaf,
  FaWarehouse,
  FaRupeeSign,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const PortfolioCard = ({ fpo }) => {
  return (
    <div className="portfolio-card">
      <h2>{fpo.name}</h2>
      <div className="card-grid">
        <div className="flex1">
          <p>
            <FaMapMarkerAlt style={{ color: "red" }} />{" "}
            <span>{fpo.location}</span>
          </p>
          <p>
            <FaUsers style={{ color: "blue" }} /> <span>{fpo.memberCount}</span>
          </p>
          <p>
            <FaLeaf style={{ color: "green" }} />{" "}
            <span>{fpo.crops.join(", ")}</span>
          </p>
          <p>
            <GrCertificate style={{ color: "orange" }} />{" "}
            <span>{fpo.certifications.join(", ")}</span>
          </p>
          <p>
            <FaWarehouse style={{ color: "purple" }} />{" "}
            <span>{fpo.infra.join(", ")}</span>
          </p>
          <p>
            <FaRupeeSign style={{ color: "gold" }} />{" "}
            <span>{fpo.turnover}</span>
          </p>
        </div>
        <div className="flex2">
          <img src={fpo.imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
