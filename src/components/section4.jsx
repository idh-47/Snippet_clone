import "../styles/section4.scss";
import { Title } from "./section1.jsx";
import { Text } from "./section1.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faMap,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";

export default function Section4() {
  return (
    <section id="section4">
      <div id="txtW3">
        <Title text="CONTACT US, YOU WILL NOT BE DISAPPOINTED" id="title4" />
        <Text
          text="Don't hesitate to get in touch with us – we would be happy to discuss your needs and goals in more detail. Contact us today and let's start a conversation!"
          width={510}
          TA="center"
        />
      </div>
      <div id="cardW2">
        {Cards.map((Card) => {
          return (
            <Card2
              icon={Card.icon}
              title={Card.title}
              text1={Card.text1}
              text2={Card.text2}
            />
          );
        })}
      </div>
    </section>
  );
}

function Card2(props) {
  return (
    <div className="card2W">
      <div>
        <FontAwesomeIcon icon={props.icon} className="icon2" />
      </div>
      <div className="txt3">
        <h3 className="title2">{props.title}</h3>
        <p className="text1">{props.text1}</p>
        <p className="text2">{props.text2}</p>
      </div>
    </div>
  );
}

const Cards = [
  {
    icon: faMap,
    title: "Our Locations",
    text1: "77 Rue Mohamed Smiha",
    text2: "Etg 10 No57 -Casablanca",
  },
  {
    icon: faMessage,
    title: "Give Us A Call",
    text1: "(+212) 663-212-790",
    text2: "(+212) 522-616-183",
  },
  {
    icon: faEnvelopeOpen,
    title: "Email Address",
    text1: "contact@snippet.ma",
    text2: "support@snippet.ma",
  },
];
