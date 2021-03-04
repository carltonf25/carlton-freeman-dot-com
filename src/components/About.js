import React from "react";
import styled from "styled-components";
import { PageHeading } from "../Site";

const AboutContainer = styled.div`
  font-size: 1.75rem;
  font-weight: 500;
  text-align: left;
  max-width: 620px;
`;

export const About = () => {
  return (
    <AboutContainer>
      <PageHeading>A little about myself...</PageHeading>
      <p>
        Before moving into engineering, I was a Product Analyst at MailChimp.
        Prior to this, I was a Technical Support Manager. Both of these roles
        required excellent communication to both technical and non-technical
        audiences, and an acute awareness of customer experience.{" "}
      </p>
    </AboutContainer>
  );
};
