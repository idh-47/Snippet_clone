import "../styles/hero.scss";

export default function Hero() {
  return (
    <div id="heroW">
      <div id="hero">
        <Title />
        <Text />
        <div id="btnsW">
          <Btn text="Get started" id="btn1" />
          <Btn text="Learn More" id="btn2" />
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
    <button className="btns" id={props.id}>
      {props.text}
    </button>
  );
}
