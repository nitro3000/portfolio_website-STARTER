import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Span2 } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems:"center", color: 'cyan', marginBottom: '20px' }}>
        <DiCssdeck size="3rem"/> 
        <Span>Faigon.Tech</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
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
