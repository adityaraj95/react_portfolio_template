import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CgAdidas } from 'react-icons/cg';
import { FaLock, FaSteam , FaTwitter } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  ( //todo : add react-animations
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        <h2 className='headerLogo'>ἄλφα</h2> <CgAdidas size="3rem" /> 
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>+</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Me</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#">
          <NavLink>Blogs</NavLink>
        </Link> /<Link href="#">
          <NavLink> Portfolio</NavLink>
        </Link>  <FaLock />
        
      </li>
          
    </Div2>
      <Div3>
        <SocialIcons href="https://www.github.com/adityaraj95">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/adityaraj95">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/adityaraj95">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://steamcommunity.com/id/adityaraj95/'>
          <FaSteam size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
