/* eslint-disable react/prop-types */
import thumbnail from "../assets/default_image.jpg";
import ImageComponent from "./ImageComponent";
const NewsItem = ({ news }) => {
  return (
    <div className="news-item">
      <ImageComponent
        src={news?.image}
        fallbackSrc={thumbnail}
        alt={news?.title}
        width={200}
        height={200}
        loading="lazy"
        className="news-image"
      />
      <div className="news-content">
        <h3 className="news-title">{news?.title}</h3>
        <p className="news-description">{news?.description}</p>
        <div className="news-meta">
          <span className="news-date">{news?.date}</span>
          <span className="news-time">{news?.time}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
