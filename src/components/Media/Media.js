import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { GridContainer } from '../Projects/ProjectsStyles';
// import Tennis from '../../../public/images/guitar.mp4';
import ReactPlayer from 'react-player';


const Media = () => (
   
        <Section>
            <SectionTitle>
            Random Access Memories 
            </SectionTitle>
            <SectionText>
                 Always try {
                     
                 } catch (error) {
                     
                 } throw ( Tennis , Music, Books, Blockchain Technology and Decentralized Applications ) ;)
            </SectionText>
            <GridContainer>
          
                <ReactPlayer
                width={480}
                height={360}
                controls
                url='./images/guitar.mp4' 
                onError={()=> console.log('onError Callback')} />

        
                <ReactPlayer
                children
                width={480}
                height={360}
                controls
                url='./images/tennis.mp4' 
                onError={()=> console.log('onError Callback')} />
     
                <img src='./images/6.jpg' width={460} height={320} />
                <img src='./images/7.jpg' width={460} height={320} />

                <br/>
            </GridContainer>
            <SectionDivider/>
        </Section>);

export default Media;