import "./styles/app.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import Section1 from "./components/section1";
import Section2 from "./components/section2";

function App() {
  return (
    <>
      <div id="herooo">
        <Header />
        <Hero />
      </div>
      <Section1 />
      <Section2 />
    </>
  );
}

export default App;
