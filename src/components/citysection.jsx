import "../styles/city.scss";
import { Title } from "./section1.jsx";
import { Text } from "./section1.jsx";
import { motion } from "framer-motion";

export default function City() {
  return (
    <div id="city">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          text="Let's discuss how we can work together"
          id="title4"
          color="white"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Text
          text="Ready to start your project? We would love to hear from you. Our team of experts is ready to help you bring your digital projects to life."
          width={485}
          TA="center"
          color="white"
        />
      </motion.div>
    </div>
  );
}
