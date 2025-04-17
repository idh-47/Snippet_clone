import "../styles/section1.scss";
import plan from "../assets/plan.webp";
import man from "../assets/man.webp";

export default function Section1() {
  return (
    <section id="sectionW">
      <div id="textW">
        <Title text="We are a full-service digital agency" />
        <Text
          text="No matter if it's a small website or bespoke application we are always
        ready to offer our services with dedication and perfection."
          width={500}
          TA="center"
        />
      </div>
      <div id="div2W">
        <div id="imgs">
          <Image url={plan} alt="plan" />
          <Image url={man} alt="man" offsetx={-40} offsety={70} />
        </div>
        <div id="text2">
          <TitleMini text="Empowering your digital journey" />
          <Title
            text="We think strategy, craft design, develop digital.."
            width={530}
            sFS={33}
            id="title2"
          />
          <Text
            text="We can help you transform an idea into a fully viable product, starting by defining the goals and building a roadmap to the best user-experience solution."
            width={400}
            font={16}
            id="p2"
          />
          <a href="https://snippet.ma/about-us">
            <button id="btn3">About Us</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Title(props) {
  return (
    <div>
      <h1
        className="title"
        style={{ width: props.width, fontSize: props.sFS }}
        id={props.id}
      >
        {props.text}
      </h1>
    </div>
  );
}

export function Text(props) {
  return (
    <div style={{ width: props.width, textAlign: props.TA }}>
      <p className="text" style={{ fontSize: props.font }} id={props.id}>
        {props.text}
      </p>
    </div>
  );
}

function Image(props) {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className="Img"
      style={{
        position: "relative",
        left: props.offsetx,
        bottom: props.offsety,
      }}
    />
  );
}

function TitleMini(props) {
  return <p id="titleMini">{props.text}</p>;
}
