import NewsItem from "../components/NewsItem";

const newsData = [
  {
    id: 1,
    image:
      "https://www.pmindia.gov.in/wp-content/uploads/2020/01/H2020010283455.jpg",
    title: "पंतप्रधान मोदी यांनी राष्ट्रीय कृषी पुरस्कार जाहीर केला",
    description:
      "पंतप्रधान नरेंद्र मोदी यांनी भारतातील कृषी क्षेत्रातील सर्वोत्कृष्ट कामगिरी करणाऱ्या शेतकऱ्यांना राष्ट्रीय कृषी पुरस्कार जाहीर केला.",
    date: "12 नोव्हेंबर 2024",
    time: "10:30 AM",
  },
  {
    id: 2,
    image:
      "https://etvbharatimages.akamaized.net/etvbharat/prod-images/768-512-12107591-656-12107591-1623491232687.jpg?imwidth=1200",
    title: "मुंबईत पाऊस जोरदार, अनेक ठिकाणी रस्ते जलमग्न",
    description:
      "मुंबईत सोमवारी रात्री जोरदार पाऊस झाला, ज्यामुळे शहरातील अनेक रस्ते जलमग्न झाले आणि वाहतूक कोंडी निर्माण झाली.",
    date: "11 नोव्हेंबर 2024",
    time: "8:45 PM",
  },
  {
    id: 3,
    image:
      "https://ojaswisarkariyojana.com/wp-content/uploads/2024/10/PM-Yashsvi-Scholarship-Yojana-.jpg",
    title: "विद्यार्थ्यांना मिळणार नवीन शिष्यवृत्ती योजना",
    description:
      "शासनाने विद्यार्थ्यांना शिष्यवृत्ती योजना सुरु केली आहे, ज्यामध्ये शालेय आणि महाविद्यालयीन विद्यार्थ्यांना आर्थिक सहाय्य मिळेल.",
    date: "10 नोव्हेंबर 2024",
    time: "2:00 PM",
  },
  // Add more news objects here
];
const Forum = () => {
  return (
    <div className="forum-navigation">
      <div className="news-container">
        {newsData.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Forum;
