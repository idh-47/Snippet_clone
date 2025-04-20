import "../styles/city.scss";
import { Title } from "./section1.jsx";
import { Text } from "./section1.jsx";

export default function City() {
  return (
    <div id="city">
      <Title
        text="Let's discuss how we can work together"
        id="title4"
        color="white"
      />
      <Text
        text="Ready to start your project? We would love to hear from you. Our team of experts is ready to help you bring your digital projects to life."
        width={520}
        TA="center"
        color="white"
      />
    </div>
  );
}
