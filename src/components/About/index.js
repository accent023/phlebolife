import Section from "../Common/Section";
import { Main } from "./Main";
import Rectangle from "../Common/Rectangle";
import Image from "next/image";
import man from "../../assets/images/main.png";

const About = () => {
  return (
    <Section className="about">
      <Main />
      <Rectangle>
        <div className="image-wrapper">
          <Image
            quality={100}
            width={390}
            src={man}
            alt="phlebolife specialist"
          />
        </div>
      </Rectangle>
    </Section>
  );
};

export default About;
