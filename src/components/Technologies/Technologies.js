import React from 'react';
import { DiAtom, DiDatabase} from 'react-icons/di';
import { CgWebsite } from 'react-icons/cg';
import { VscGear } from "react-icons/vsc";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech"> 
  {/* <SectionDivider/><br/> */}
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range a technologies in the web development world From Back-end To Design
  </SectionText>
  <List>
    <ListItem>
      <DiAtom size={"3rem"}/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          <br/>React.Js
          <br/>Angular
          <br/>ASP.NET
          <br/>JavaScript
          <br/>HTML5
          <br/>PHP
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <VscGear size={"3rem"}/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          <br/>Java
          <br/>C#
          <br/>NodeJs
          <br/>JSON
          <br/>RESTfullAPI
          <br/>RapidAPI
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiDatabase size={"3rem"}/>
      <ListContainer>
        <ListTitle>Data Base</ListTitle>
        <ListParagraph>
          <br/>Microsoft SQL 
          <br/>MySQL
          <br/>Mongo
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <CgWebsite size={"3rem"}/>
      <ListContainer>
        <ListTitle>UX/UI</ListTitle>
        <ListParagraph>
          <br/>Angular Materials
          <br/>BootStrap
          <br/>Next.js
          <br/>CSS          
          <br/>JavaFX
          <br/>GUI
          <br/>Adobe Creative Cloud
          <br/>WordPress
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>

);

export default Technologies;
