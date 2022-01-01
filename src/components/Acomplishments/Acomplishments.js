import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { item : 'NJIT \'20', text: 'MS in Computer Science'},
  { item : 'GTU \'18', text: 'BE in Computer Engineering' },
  { item : 'Interests', text: 'ATP/Tennis , MLB , F1 , UEFA/Soccer , NBA. ', },
  { item : 'CS 698', text: 'Blockchain Technology and it\'s Applications', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>More About Me</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.item}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
