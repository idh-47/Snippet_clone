import "../styles/section2.scss";
import "../styles/section1.scss";
import { Title } from "./section1.jsx";
import { Text } from "./section1.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faImage,
  faImages,
} from "@fortawesome/free-regular-svg-icons";

export default function section2() {
  return (
    <section id="section2">
      <div id="textW">
        <Title text="We can help you bring your idea to life" />
        <Text
          text="From idea to viable product, we can help you define your goals and create a roadmap to the best user experience solution"
          width={500}
          TA="center"
        />
      </div>
      <div id="cardW">
        {Cards.map((card) => {
          return (
            <Card
              icon={card.icon}
              title={card.title}
              text={card.text}
              link={card.link}
            />
          );
        })}
      </div>
    </section>
  );
}

function Card(props) {
  return (
    <div className="card">
      <FontAwesomeIcon icon={props.icon} className="iconsCard" />
      <h3 className="tito">{props.title}</h3>
      <p className="cardTxt">{props.text}</p>
      <a href={props.link} className="links">
        Learn More
      </a>
    </div>
  );
}

const Cards = [
  {
    icon: faCircle,
    title: "Consulting",
    text: "We help you identify the key features and functionality that will make your product stand out, and we work with you to design and build a solution that meets your needs and exceeds your expectations.",
    link: "https://snippet.ma/services/consulting",
  },
  {
    icon: faImages,
    title: "UX/UI Design",
    text: "Whether you need a new website, an app, or any other type of digital product, we have the skills and expertise to design a solution that meets your needs and delivers the best possible user experience.",
    link: "https://snippet.ma/services/ux-ui-design",
  },
  {
    icon: faImage,
    title: "Development",
    text: "We take care of the entire development cycle of your product, from the initial conceptualization and design phase, through to the coding, testing, and deployment stages.",
    link: "https://snippet.ma/services/development",
  },
];
