import "../styles/hero.scss";
// import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="heroW">
      <div className="container">
        <div id="hero">
          <Title />
          <Text />
        </div>
        <div id="btnsW">
          <Btn text="Get started" id="btn1" link="https://snippet.ma/contact" />
          <Btn text="Learn More" id="btn2" link="https://snippet.ma/services" />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <h1 id="title">
      We <br />
      <span>Design</span>
      <br /> Digital products
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
