import "../styles/section1.scss";
import plan from "../assets/plan.webp";
import man from "../assets/man.webp";
import { motion } from "framer-motion";

export default function Section1() {
  return (
    <section id="sectionW">
      <motion.div
        id="textW"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title text="We are a full-service digital agency" id="title1" />
        <Text
          text="No matter if it's a small website or bespoke application we are always
            ready to offer our services with dedication and perfection."
          width={500}
          TA="center"
        />
      </motion.div>
      <div id="div2W">
        <motion.div
          id="imgs"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image url={plan} alt="plan" />
          <Image url={man} alt="man" offsetx={-40} offsety={70} />
        </motion.div>
        <motion.div
          id="text2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}

export function Title(props) {
  return (
    <div>
      <h1
        className="title"
        style={{ width: props.width, fontSize: props.sFS, color: props.color }}
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
      <p
        className="text"
        style={{ fontSize: props.font, color: props.color }}
        id={props.id}
      >
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
        height: props.height,
      }}
    />
  );
}

function TitleMini(props) {
  return <p id="titleMini">{props.text}</p>;
}

export { Image, TitleMini };
