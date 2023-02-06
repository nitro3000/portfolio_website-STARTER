import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems:"center", color: 'cyan' }}>
        <DiCssdeck size="3rem"/> <span>Portofolio</span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink style={{color:'skyblue'}}>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink style={{color:'skyblue'}}>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink style={{color:'skyblue'}}>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#help">
          <NavLink style={{color:'skyblue'}}>Help</NavLink>
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
