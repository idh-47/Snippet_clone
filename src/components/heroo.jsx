import "../styles/hero.scss";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="heroW">
      <div className="container">
        <div id="hero">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Title />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Text />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div id="btnsW">
            <Btn
              text="Get started"
              id="btn1"
              link="https://snippet.ma/contact"
            />
            <Btn
              text="Learn More"
              id="btn2"
              link="https://snippet.ma/services"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <h1 id="title">
      We <br />
      <Typewriter
        options={{
          strings: ["Develop", "Launch", "Design"],
          autoStart: true,
          loop: true,
          delay: 150,
          deleteSpeed: 85,
        }}
      />{" "}
      Digital products
    </h1>
  );
}

function Text() {
  return (
    <p id="text">
      We partner with companies, brands, and founders to build solutions that
      truly transform businesses and connect meaningfully to the people that use
      them.
    </p>
  );
}

function Btn(props) {
  return (
    <a href={props.link}>
      <button className="btns" id={props.id}>
        {props.text}
      </button>
    </a>
  );
}
