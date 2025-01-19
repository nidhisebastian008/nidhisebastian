import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email, socialMedia } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 50px;
    }
  }

  .email-link,
  .linkedin-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    margin-right: 10px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      {/* <p>
        My inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p> */}

      <a className="email-link" href={`mailto:${email}`}>
        Email me
      </a>
      <a className="linkedin-link" href={`${socialMedia[2].url}`}>
        Linkedin
      </a>
    </StyledContactSection>
  );
};

export default Contact;
