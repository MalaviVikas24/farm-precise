import ImageComponent from "../components/ImageComponent";
import Thumbnail from "../assets/default_image.jpg";

const courseData = {
  "sub-home": {
    data: [
      {
        _id: "66c4da218275204d538bd59f",
        resource: {
          title: "मशरूम शेती कोर्स",
          publisher: "मशरूम लेडी : अन्नू कानावत",
          imgUrl:
            "https://d502jbuhuh9wk.cloudfront.net/courses/66c4da218275204d538bd59f/66c4da218275204d538bd59f_scaled_cover.jpg?v=1",
          mrp: 4999,
          price: "९९९",
          productVariants: [
            {
              validityVariants: [
                {
                  type: "ONE_TIME",
                  validityType: "none",
                  mrp: 4999,
                  price: 999,
                  id: "v1-4999-999",
                  label: "Lifetime",
                  pgChargesLearner: true,
                  pgChargesLearnerPercent: 2.124,
                },
              ],
              id: "p1",
              productType: "OTP",
            },
          ],
          filter1: ["Other"],
          availableForMarket: "true",
          courseUrl: "Mushroom_Farming_Course",
          courseType: "normal",
          shortDescription:
            "<p>Unlock the full potential of your mushroom farm with our comprehensive course!</p>\n",
          coverVersion: 1,
          language: "Hindi",
          showLearners: false,
          availableForMembership: false,
          instalmentPlanId: "",
        },
        modules: 0,
      },
      {
        _id: "66b79ed37b58c26a194dc3cd",
        resource: {
          title: "यशस्वी दुग्धव्यवसाय शिका",
          publisher: "सौ. श्रद्धा ढवण-ढोरमले",
          imgUrl:
            "https://d502jbuhuh9wk.cloudfront.net/courses/66b79ed37b58c26a194dc3cd/3nd79.jpg",
          mrp: 1999,
          price: "९९९",
          productVariants: [
            {
              validityVariants: [
                {
                  type: "ONE_TIME",
                  validityType: "none",
                  mrp: 1999,
                  price: 999,
                  id: "v1-1999-999",
                  label: "Lifetime",
                  pgChargesLearner: true,
                  pgChargesLearnerPercent: 2.124,
                },
              ],
              id: "p1",
              productType: "OTP",
            },
          ],
          filter1: ["Other"],
          availableForMarket: "true",
          courseUrl: "dairy_and_milk_busineness_shradhha_dhawan",
          courseType: "normal",
          coverVersion: 3,
          language: "Marathi",
          shortDescription: "",
          showLearners: false,
          availableForMembership: false,
          instalmentPlanId: "",
        },
        modules: 0,
      },
      {
        _id: "66b1b510e9c44e7e46004aee",
        resource: {
          title: "संपूर्ण कांदा पिक व्यवस्थापन (A to Z माहिती)",
          publisher: "डॉ. तुषार उगले (प्रसिद्ध कृषी सल्लागार)",
          imgUrl:
            "https://d502jbuhuh9wk.cloudfront.net/courses/66b1b510e9c44e7e46004aee/66b1b510e9c44e7e46004aee_scaled_cover.jpg?v=4",
          mrp: 999,
          price: "२९९",
          productVariants: [
            {
              validityVariants: [
                {
                  type: "ONE_TIME",
                  mrp: 999,
                  price: 299,
                  id: "v1-999-299",
                  label: "Lifetime",
                  pgChargesLearner: true,
                  validityType: "none",
                  pgChargesLearnerPercent: 2.124,
                },
              ],
              id: "p1",
              productType: "ONE_TIME",
            },
          ],
          filter1: ["Other"],
          availableForMarket: "true",
          courseUrl: "Onion_Cultivation_Full_Guide_Course",
          courseType: "normal",
          language: "Marathi",
          shortDescription:
            "<p>कांदा शेती सोपी, कमी खर्चाची आणि फायदेशीर करणारा डिजिटल कोर्स..</p>\n",
          showLearners: false,
          coverVersion: 4,
          availableForMembership: false,
          instalmentPlanId: "",
        },
        modules: 0,
      },
      {
        _id: "66b07c65ffaf412bdbfd0c73",
        resource: {
          title: "गुलाब शेती - खुल्या प्रक्षेत्रासाठी संपूर्ण मार्गदर्शन",
          publisher: "डॉ. अविनाश मेमाणे",
          imgUrl:
            "https://d502jbuhuh9wk.cloudfront.net/courses/66b07c65ffaf412bdbfd0c73/66b07c65ffaf412bdbfd0c73_scaled_cover.jpg?v=3",
          mrp: 999,
          price: "३९९",
          productVariants: [
            {
              validityVariants: [
                {
                  type: "ONE_TIME",
                  mrp: 999,
                  price: 299,
                  id: "v1-999-299",
                  label: "Lifetime",
                  pgChargesLearner: true,
                  validityType: "none",
                  pgChargesLearnerPercent: 2.124,
                },
              ],
              id: "p1",
              productType: "ONE_TIME",
            },
          ],
          filter1: ["Other"],
          availableForMarket: "true",
          courseUrl: "Rose_Course",
          courseType: "normal",
          language: "Marathi",
          shortDescription:
            '<p>&nbsp;</p>\n\n<p><meta charset="utf-8" /></p>\n\n<p dir="ltr"><b id="docs-internal-guid-3444eddf-7fff-0552-a2a8-163fe38b81c4">गुलाब शेतीची संपूर्ण दिशा दाखवणारा कोर्स फक्त तुमच्यासाठी&nbsp;</b></p>\n',
          showLearners: false,
          coverVersion: 3,
          availableForMembership: false,
          instalmentPlanId: "",
        },
        modules: 0,
      },
    ],
    total: 4,
    limit: 16,
    skip: 0,
  },
  response: true,
};
const Training = () => {
  return (
    <div className="trainings-container">
      {courseData?.["sub-home"]?.data?.map((item) => (
        <div className="course" key={item.resource.title}>
          <div className="course-thumbnail">
            <ImageComponent
              src={item.resource.imgUrl}
              fallbackSrc={Thumbnail}
              width={"300px"}
              height={"200px"}
            />
          </div>
          <h3 className="course-title">{item.resource.title}</h3>
          <h4 className="course-creator">{item.resource.publisher}</h4>
          <p className="price">दर : {item.resource.price} ₹</p>
        </div>
      ))}
    </div>
  );
};

export default Training;
