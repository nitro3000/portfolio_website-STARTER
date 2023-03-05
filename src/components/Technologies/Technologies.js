import React from 'react';
import { DiAtom, DiDatabase} from 'react-icons/di';
import { CgWebsite } from 'react-icons/cg';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech"> 
  <SectionDivider/><br/>
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
          Experiance with 
          <br/>React.js
          <br/>Angular
          <br/>ASP.NET
          <br/>HTML5
          <br/>CSS
          <br/>JavaScript
          <br/>BootStrap
          <br/>Next.js
          <br/>php
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiDatabase size={"3rem"}/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experiance with 
          <br/>SQL
          <br/>Java
          <br/>C#
          <br/>JDBC
          <br/>Node
          <br/>Microsoft SQL 
          <br/>REST API
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <CgWebsite size={"2rem"}/>
      <ListContainer>
        <ListTitle>UX/UI</ListTitle>
        <ListParagraph>
          Experiance with
          <br/>Adobe Photoshop
          <br/>Adobe Illustrator
          <br/>JavaFX
          <br/>GUI
          <br/>WordPress
          <br/>Woocommerce
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>

);

export default Technologies;
