import "./styles/app.scss";
import Header from "./components/header";
import Hero from "./components/Hero.jsx";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import City from "./components/citysection";
import Section4 from "./components/section4";
import Footer from "./components/footer";

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
      <City />
      <Section4 />
      <Footer />
    </>
  );
}

export default App;
