import React from 'react';
import { FcFlowChart} from 'react-icons/fc';
import { FaAmazon,FaSlack, FaAws, FaFigma,FaNode , FaJenkins, FaGithub, FaNpm} from 'react-icons/fa';
import {BsKanban} from 'react-icons/bs';
import { SiMongodb ,SiMysql,SiGrafana } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Helping Technologies</SectionTitle>
    <SectionText>
     Modern tools, applications and storage expertise.
    </SectionText>
    <List>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Tools / Open Source</ListTitle>
          <ListParagraph>
            Slack , Kanbanize , Grafana , Jenkins , NPM Open Source Libraries.
           <br/><br/>
            <FaSlack size={33} /> &nbsp;&nbsp;&nbsp; 
            <BsKanban size={33} /> &nbsp;&nbsp;&nbsp;
            <FaJenkins size={33}/> &nbsp;&nbsp;&nbsp;
            <SiGrafana size={33} />&nbsp;&nbsp;&nbsp;
            <FaNpm size={33} />
            
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Database and Storage</ListTitle>
          <ListParagraph>
            <p>Amazon S3 and DynamoDB , Mongodb and SQL. </p> <br/>
          <FaAmazon size={33} />&nbsp;&nbsp;&nbsp; 
          <SiMongodb size={33} />&nbsp;&nbsp;&nbsp; 
          <SiMysql size={33} />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
          <p>Figma and LucidChart. </p> <br/><br/>
          <FaFigma size={33} />&nbsp;&nbsp;&nbsp; 
          <FcFlowChart size={33} />
          </ListParagraph>
        
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
