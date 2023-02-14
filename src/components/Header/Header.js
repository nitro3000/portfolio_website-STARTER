import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Span2 } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems:"center", color: 'cyan', marginBottom: '30px' }}>
      <img src="images/FT_Logo@3x.png" width="140" height="100"/> 
        <Span><img src="images/FaigonTech_logo_1@5x.png" alt="Faigon.Tech" width="200" height="30"/></Span>
      </a>
      
      </Link>
    </Div1>
    <Div2>
      <li padding= '2.5rem' >
        <Link href="#projects" >
          <NavLink style={{color:'skyblue'}}><Span2>Projects</Span2> </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink style={{color:'skyblue'}}><Span2>Technologies</Span2></NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink style={{color:'skyblue'}}><Span2>About</Span2></NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contacts">
          <NavLink style={{color:'skyblue'}}><Span2>Contacts</Span2></NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/nitro3000'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/andrey-faigon-full-stack-developer/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='http://instagram.com'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
