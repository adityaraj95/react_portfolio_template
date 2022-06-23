import React from 'react'; 
import Sudoku from 'sudoku-react';

const SudokuLand = () => (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Sudoku</SectionTitle>
      <GridContainer>
        <Sudoku/>
      </GridContainer>
    </Section>
  );
  
  export default SudokuLand;