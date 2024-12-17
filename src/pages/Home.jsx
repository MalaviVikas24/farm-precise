import { Link } from "react-router-dom";
import GooglePlayStore from "../assets/google-play-store.png";
import ImageComponent from "../components/ImageComponent";
import SEOFile from "../SEOFile.jsx";
import Team from "../components/Team.jsx";

const Home = () => {
  return (
    <>
      <SEOFile />
      <div className="home">
        <div className="about">
          <h2>आमच्या बद्दल</h2>
          <div className="content">
            <h3>एफपीओ</h3>
            <p>
              शेतकरी उत्पादकांसाठी 3 वर्षांचा कॉर्पोरेट-स्तरीय प्रशिक्षण आणि
              सहाय्य प्रकल्प #FPCs / #FPOs खात्रीशीर महसूल निर्मितीसाठी
            </p>
            <p>
              आमचा फ्लॅगशिप कार्यक्रम #एफपीओ लाँच झाल्याची घोषणा करताना आम्हाला
              आनंद होत आहे. या उपक्रमाची सुरुवात पुणे शहरात दोन दिवसीय निवासी
              कार्यशाळेने झाली. या प्रकल्पाचे प्राथमिक उद्दिष्ट या कंपन्यांमध्ये
              तीन महत्त्वपूर्ण भूमिकांचे कौशल्य तयार करणे आहे: सीईओ, #Accountant
              सह #Admin आणि #Salesofficer. या कंपन्यांनी कार्यक्रमाच्या पहिल्या
              वर्षात 0 ते 1 कोटीपर्यंत महसूल वाढ मिळवून देणारी उद्योजकीय
              मानसिकता निर्माण करणे हे आमचे ध्येय आहे.
            </p>
            <p>
              आमच्या पहिल्या बॅचमध्ये महाराष्ट्र राज्यातील 12 FPC चा समावेश आहे,
              विशेषत: #जालना, #धाराशिव, #सोलापूर आणि #चंद्रपूर. आमच्या समर्पित
              कार्यसंघाने काळजीपूर्वक प्रशिक्षण मॉड्यूल्स तयार केले आहेत ज्यात
              फार्म प्रीसाईझ #VisionBuilding, #NLP आणि #LOA, #Sales आणि
              #Marketing आणि #communication कौशल्य समाविष्ट आहे.
            </p>
            <p>
              कार्यशाळेदरम्यान, सहभागींना ते पुरवत असलेल्या बाजाराच्या आकाराची
              ओळख करून देण्यात आली आणि त्यांनी 1 कोटी INR पेक्षा जास्त उद्दिष्ट
              असलेल्या व्हिजन बोर्डवर त्यांचे कमाईचे उद्दिष्ट व्हिज्युअलाइज केले
              आणि प्रक्षेपित केले. विशेष म्हणजे, 30% पेक्षा जास्त सहभागी महिला
              होत्या, ज्यांनी लिंग समावेशाला प्रोत्साहन देण्यासाठी आमच्या
              आदेशानुसार संरेखित केले.
            </p>
            <p>
              तीन वर्षांच्या प्रकल्प कालावधीत, वॉटरशेड ऑर्गनायझेशन ट्रस्ट (WOTR)
              हे सुनिश्चित करेल की कॉर्पोरेट प्रणाली FPCs मध्ये स्थापित केली
              जाईल आणि या कंपन्यांना कार्यक्षमतेने आणि आर्थिकदृष्ट्या
              चालविण्यासाठी कौशल्ये विकसित केली जातील. पहिल्या वर्षी, आम्ही
              डिजिटायझेशन, मार्केटिंग, टीम बिल्डिंग, अकाउंटिंगचे प्रशिक्षण
              देण्यावर लक्ष केंद्रित करतो आणि मार्केट लिंकेज आणि त्यांच्यासोबत
              काम करणाऱ्या ऍग्रोनॉमी कर्मचाऱ्यांना 3 वर्षे सतत समर्थन देऊ करतो.
            </p>
            <p>
              पहिल्या वर्षात अतिरिक्त 1 कोटी महसूल मिळवण्याच्या आश्वासनासह सर्व
              सहभागी FPC ने या सशुल्क कार्यक्रमात नावनोंदणी केली आहे. निवड
              प्रक्रिया कठोर होती, ज्यामध्ये उमेदवारांच्या वचनबद्धतेचे आणि
              शिकण्याच्या क्षमतेचे मूल्यांकन करण्यासाठी मुलाखतींचा समावेश होता.
            </p>
            <p>
              आम्हाला खात्री आहे की या शेतकरी कंपन्या तीन वर्षांच्या कालावधीत
              हळूहळू त्यांचा महसूल वाढवण्यासाठी आवश्यक कौशल्ये आत्मसात करतील आणि
              स्वावलंबी बनतील.
            </p>
            <h3>फार्म प्रीसाईज ऍप</h3>
            <p>
              फार्म प्रीसाईज ॲप हवामान आधारित, स्थान विशिष्ट, तुमच्या पिकासाठी
              वैयक्तिकृत सल्ला. हे टिकाऊपणाला प्रोत्साहन देते एकात्मिक कीड
              व्यवस्थापनासह कृषी पद्धती, इष्टतम खतांचा वापर आणि सिंचन, ज्यामुळे
              पीक सुधारते उत्पादकता आणि लहान आणि सीमांत शेतकऱ्यांसाठी खर्च कमी
              करणे.
            </p>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=wotr.farmprecise&hl=en_IN"
                target="blank"
              >
                <ImageComponent
                  src={GooglePlayStore}
                  fallbackSrc={GooglePlayStore}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="team">
          <h2>आमची संघटना</h2>
          <Team />
        </div>
        <div className="contact">
          <h2>संपर्क करा</h2>
          <p>
            आमच्याशी संपर्क करण्यासाठी <Link to="/contact">इथे क्लीक करा</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;