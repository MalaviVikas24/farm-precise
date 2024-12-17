import maleUserImage from "../assets/male_user_image.png";
import femaleUserImage from "../assets/female_user_image.png";

const teamMembers = [
  {
    name: "डॉ. नरेश शेजवळ",
    role: "डेप्युटी जनरल मॅनेजर",
    email: "naresh.shejwal@wotr.org.in",
    photo: maleUserImage,
  },
  {
    name: "सचिन कराडकर",
    role: "कृषी विस्तार समन्वयक",
    email: "sachin.karadkar@wotr.org.in",
    photo: maleUserImage,
  },
  {
    name: "मिनल मेहेत्रे",
    role: "प्रशिक्षण समन्वयक",
    email: "minal.mehetre@wotr.org.in",
    photo: femaleUserImage,
  },
  {
    name: "प्रियंका बाबर",
    role: "विक्री समन्वयक",
    email: "priyanka.babar@wotr.org.in",
    photo: femaleUserImage,
  },
  {
    name: "प्रिती झांबरे",
    role: "व्हिडीओ एडीटर",
    email: "priti.zambare@wotr.org.in",
    photo: femaleUserImage,
  },
  {
    name: "विकास माळवी",
    role: "वेब डेवलपर",
    email: "vikas.malavi@wotr.org.in",
    photo: maleUserImage,
  },
];

const Team = () => {
  return (
    <section className="team-section">
      {/* <h2 className="team-section-title">Meet Our Team</h2> */}
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              src={member.photo}
              alt={member.name}
              className="team-member-photo"
            />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <a href={`mailto:${member.email}`} className="team-member-email">
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
