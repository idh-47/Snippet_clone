import "./styles/app.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

function App() {
  return (
    <>
      <div id="herooo">
        <Header />
        <Hero />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default App;
