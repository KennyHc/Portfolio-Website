import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Welcome to <br /> my Personal Portfolio
      </SectionTitle>
      <SectionText>
        Passionate learner and versatile problem solver. 3rd year BS Computer
        Science student at The University of British Columbia.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://www.linkedin.com/in/kenny-he-chen')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
