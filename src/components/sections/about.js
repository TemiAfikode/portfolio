import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import { srConfig } from "configData";
// import sr from "utils/sr";
import { usePrefersReducedMotion } from "hooks";
import dynamic from "next/dynamic";

const sr = dynamic(() => import("utils/sr"), { ssr: false });

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealContainer = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    // async function animate() {
    //   if (revealContainer.current) {
    //     const sr = (await import("scrollreveal")).default;
    //     sr?.reveal(revealContainer.current, srConfig());
    //   }
    // }
    // animate();
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "MySql",
    "React",
    "Asp.net",
    "Node.js",
    "PHP",
    "HTML/CSS",
  ];

  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello, my name is Temitope Babalola. I am curious and I enjoy work
              that challenges me to learn something new and stretch in a
              different direction. I do my best to stay on top of changes, as
              the world keeps evolving everyday so I can meet challenges with
              tools well suited to the job at hand. I am a great communicator
              and hardworking. I also enjoy working in teams as this helps to
              collaborate and learn from others. I have knowledge of some
              programming languages like HTML, CSS, JavaScript, SQL, React, Node
              JS, PHP, and ASP.net.
            </p>

            <p>
              I also recently concluded post graduate course in web development
            </p>
            <p>Here are some of the Technologies I have being working with</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img src="/imgs/temi-img.jpg" alt="about user" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
