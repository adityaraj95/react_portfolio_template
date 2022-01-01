import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hello. <br />
        
        </SectionTitle>
        <SectionText>
        Welcome to my corner of the internet and I'm glad that you are here.
          Let's build something amazing together.
        </SectionText>
        <Button onClick={props.handleClick}>le* Button</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;