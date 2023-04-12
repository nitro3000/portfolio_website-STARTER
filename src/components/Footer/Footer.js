import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>


      {/* <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovative solution for any project</Slogan>
        </CompanyContainer>
      </SocialIconsContainer> */}

      <SocialIconsContainer>
        <SocialIcons href='https://github.com/nitro3000'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/andrey-faigon-full-stack-developer/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='http://instagram.com'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
      {/* <footer>&copy; Copyright 2022 - {new Date(). getFullYear() }  All Rights Reserved <a style={{color: 'white'}} href='https://faigon.tech'>@faigon.tech</a></footer> */}
    </FooterWrapper>
  );
};

export default Footer;
