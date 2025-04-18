import "../styles/section3.scss";
import "../styles/skillbars.scss";
import skill1 from "../assets/skill-1.webp";
import skill2 from "../assets/skill-2.webp";
import { Image } from "./section1";
import { Title } from "./section1.jsx";
import { TitleMini } from "./section1";

export default function Section3() {
  return (
    <div id="section3">
      <div className="imgs">
        <Image url={skill2} alt="skill2" />
        <Image url={skill1} alt="skill1" offsetx={-105} offsety={200} />
      </div>
      <div id="leftPart">
        <div id="text3">
          <TitleMini text="Your success is our motivation" id="titleM" />
          <Title
            text="We are passionate about using technology to solve problems and create value"
            width={620}
            sFS={36}
            id="title3"
          />
          <div id="sliders">
            {skills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const SkillBar = ({ label, percentage, colorGradient }) => {
  return (
    <div className="skillbar">
      <span className="skillbar-label">{label}</span>
      <div className="skillbar-track">
        <div
          className="skillbar-fill"
          style={{
            width: `${percentage}%`,
            background: colorGradient,
          }}
        >
          <span className="skillbar-circle" />
        </div>
      </div>
    </div>
  );
};

const skills = [
  {
    label: "Websites",
    percentage: 95,
    colorGradient: "linear-gradient(to right, #00c6ff, #0072ff)",
  },
  {
    label: "E-Commerce",
    percentage: 85,
    colorGradient: "linear-gradient(to right, #ec008c, #fc6767)",
  },
  {
    label: "Web & Mobile Apps",
    percentage: 90,
    colorGradient: "linear-gradient(to right, #f7971e, #ffd200)",
  },
  {
    label: "API & 3rd Party Integrations",
    percentage: 80,
    colorGradient: "linear-gradient(to right, #ff416c, #ff4b2b)",
  },
  {
    label: "DevOps",
    percentage: 70,
    colorGradient: "linear-gradient(to right, #11998e, #38ef7d)",
  },
];
