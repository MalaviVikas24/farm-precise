import { useEffect, useState } from "react";
import thumbnail from "../assets/default_image.jpg";
import ImageComponent from "./ImageComponent";
import Modal from "./Modal";

const truncate = (text, length) =>
  text.length > length ? text.substring(0, length) + "..." : text;

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch news inside useEffect directly
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiW0NCQVNQZ29JTDIwdk1EZGpNWFlTQW1WdUdnSlZVeUlQQ0FRYUN3b0pMMjB2TURKdFpqRnVLaGtLRndvVFIwRkVSMFZVWDFORlExUkpUMDVmVGtGTlJTQUJLQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURkak1YWVNBbVZ1R2dKVlV5Z0FQAVAB&limit=500&country=US&lang=en",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
              "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // console.log(data);
        setNews(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures this runs only once when the component mounts
  // console.log(news);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  const openModal = (newsItem) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setIsModalOpen(false);
  };

  return (
    <div className="news-container">
      {news?.map((item) => (
        <div key={item.title} className="card" onClick={() => openModal(item)}>
          <div className="thumbnail">
            <ImageComponent
              src={item.photo_url}
              fallbackSrc={thumbnail}
              alt={`${item.title} logo`}
              width={300}
              height={200}
              loading="lazy"
            />
          </div>
          <div className="content">
            <h3>{truncate(item.title, 20)}</h3>
            <p>{truncate(item.snippet, 30)}</p>
          </div>
        </div>
      ))}
      {selectedNews && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>{selectedNews.title}</h2>
          <div className="image-container">
            <ImageComponent
              src={selectedNews.photo_url}
              fallbackSrc={thumbnail}
              alt={`${selectedNews.title} logo`}
              width={"500px"}
              height={"350px"}
              loading="lazy"
            />
          </div>
          <p>{selectedNews.snippet}</p>
        </Modal>
      )}
    </div>
  );
};

export default News;
