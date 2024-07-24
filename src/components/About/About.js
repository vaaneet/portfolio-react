import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateOnce animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateOnce animateIn="fadeInLeft">
            Hello! My name is <strong>Vaaneet Kapoor</strong>. I am a product manager at Leverage Edu with a strong background in both tech and product management. My former role as a Tech Lead has equipped me with the ability to think strategically and approach problems with higher-order thinking, allowing me to create solutions that are scalable and impactful.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateOnce animateIn="fadeInLeft">
            I graduated with a degree in Electronics and Communications. During my studies, I worked with embedded systems and VLSI designs, which provided a solid technical foundation. My first exposure to a dynamic work environment came during a business development internship at UrbanClap. This role was pivotal in my career, as it helped me understand user needs, user obsessions, and the critical role products play in meeting those needs.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateOnce animateIn="fadeInLeft">
            My journey into tech began with a role in SEO, where I discovered the power of simple modifications using developer tools. This experience ignited my passion for technology and led me to internships as a Node.js and React developer, eventually progressing to a Full Stack Developer role.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateOnce animateIn="fadeInLeft">
            As a Tech Lead for over two years, I developed a strong ability to analyze data and extract actionable insights. What truly excites me is the process of translating these insights into tangible actions. I thrive in collaborative environments and enjoy working with diverse teams to simplify complex problems and drive product enhancements. Throughout my career, I have successfully identified and addressed bottlenecks in existing processes, ensuring alignment with the overall product vision.
            </ScrollAnimation>

            <br /><br />

            {/* <ScrollAnimation animateOnce animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateOnce animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies> */}
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
