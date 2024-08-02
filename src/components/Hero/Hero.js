import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateOnce animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Vaaneet.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Product Manager',
                    700,
                    'A Former Tech Lead',
                    700,
                    'An Electronics Graduate',
                    // 'I design and code beautifully simple things, and I love what I do.',
                    700,
                    'A problem solver.',
                    700,
                    'An innovative thinker.',
                    700,
                    'Someone who loves crafting unforgettable travel itineraries....',
                    700,
                    '..not just for myself, but for others too',
                    700,
                    'A....',
                    700,
                    'A.... cool guy?',
                    700,
                    "Ok...",
                    700,
                    "Oh...Yes... I love finding trivia about Movies",
                    700,
                    "Also... I am a part time movie critic",
                    700,
                    "Sometimes, I enjoy reading fiction rather than self-help books.",
                    700,
                    "Ok...  I'm running out of ideas...",
                    700,
                    "Uhh...",
                    700,
                    "Uhh... you can scroll down to see my projects and know more about me",
                    300,
                    () => setShowScrollDown(true),
                    // 700,
                    // "Seriously, my projects are really cool, go check them out!",
                    700,
                    "You're uh...",
                    700,
                    "You're uh... still here?",
                    700,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                    // 700,
                    // "Or...",
                    // 700,
                    // "Or... I could scroll you by force! Muahaha!",
                    700,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateOnce animateIn="fadeIn">
              <Image
                src="/boy.png"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateOnce animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
