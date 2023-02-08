import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectDemo = [{
//   title:'Project 1',
//   description: 'discriotion about this project 1',
//   link:'click here'
// },{
//   title:'Project 2',
//   description: 'discriotion about this project 2',
//   link:'click here'
// },{
//   title:'Project 3',
//   description: 'discriotion about this project 3',
//   link:'click here'
// },{
//   title:'Project 4',
//   description: 'discriotion about this project 4',
//   link:'click here'
// }];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
     {/* List of Objects  */}
    <GridContainer>
      {projects.map(({id, image, title,description, tags, source, visit})=>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
        // <div>
        //   {project.title}
        //   <br/>
        //   {project.description}
        //   <br/>
        //   {project.link}
        // </div>  
      ))}

    </GridContainer>

  </Section>
);

export default Projects;