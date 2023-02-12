import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Andrey Faigon <br/> Full-Stack Developer
      </SectionTitle>
      <SectionText>
        Will bring your application to the next level
      </SectionText>
      <Button onClick={ () => window.location = 'mailto:andreyfaigon@gmail.com'}> Hire Me

      </Button>
    </LeftSection>
  </Section>
);

export default Hero;