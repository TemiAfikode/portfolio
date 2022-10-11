import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { srConfig } from "configData";
import sr from "utils/sr";
import { usePrefersReducedMotion } from "hooks";

const StyledJobsSection = styled.section`
  #experience {
    padding: 50px 15px;
    text-align: center;

    h2 {
      color: $heading;
    }
  }

  #experience-timeline {
    margin: 30px auto 0 auto;
    position: relative;
    max-width: 1000px;

    &:before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 303px;
      right: auto;
      height: 100%;
      width: 3px;
      background: var(--green);
      z-index: 0;
    }

    &:after {
      position: absolute;
      content: "";
      width: 3px;
      height: 40px;
      background: var(--green);
      background: linear-gradient(
        to bottom,
        var(--green),
        rgba(var(--green), 0)
      );
      top: 100%;
      left: 303px;
    }
  }

  .vtimeline-content {
    margin-left: 350px;
    background: #fff;
    border: 1px solid #e6e6e6;
    padding: 15px;
    border-radius: 3px;
    text-align: left;

    h3 {
      font-size: 1.5em;
      font-weight: 300;
      color: $heading;
      display: inline-block;
      margin: 0;
    }

    h4 {
      font-size: 1.2em;
      font-weight: 300;
      color: #7e8890;
      margin: 0 0 15px 0;
    }

    p {
      color: $text;
      font-size: 0.9em;
      margin: 0;
    }
  }

  .vtimeline-point {
    position: relative;
    display: block;
    vertical-align: top;
    margin-bottom: 30px;
  }

  .vtimeline-icon {
    position: relative;
    color: #fff;
    width: 50px;
    height: 50px;
    background: var(--green);
    border-radius: 50%;
    float: left;
    z-index: 99;
    margin-left: 280px;

    i {
      display: block;
      font-size: 2em;
      margin-top: 10px;
    }
  }

  .vtimeline-date {
    width: 260px;
    text-align: right;
    position: absolute;
    left: 0;
    top: 10px;
    font-weight: 300;
    color: #374054;
  }
`;

const Jobs = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

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

  return (
    <StyledJobsSection id="jobs" >
      <h2 className="numbered-heading">Where Work Experience</h2>
      <div className="experience-timeline">
        coming soon
        {/* <ul className="experience-list">
          <li>
            <p>Novemberv2013 - February 2015</p>

          </li>
        </ul> */}
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
