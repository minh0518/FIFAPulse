import React from 'react';
import { FooterContainerDiv, CopyrightsDiv, ContactDiv, GitHubDiv, ContactAndGitHubDiv } from './Footer.styled';
import { FooterProps } from '../../types/props';

const Footer = ({ scrollPoint, page }: FooterProps) => {
  return (
    <FooterContainerDiv scrollPoint={scrollPoint} page={page}>
      <CopyrightsDiv>
        <p>© Copyright by minh0518. All rights reserved</p>
        <p>Data based on NEXON DEVELOPERS</p>
      </CopyrightsDiv>
      <ContactAndGitHubDiv>
        <ContactDiv>
          <h3>contact</h3>
          <p>sunrise9612@gmail.com</p>
          <p>010-7504-5509</p>
        </ContactDiv>
        <GitHubDiv>
          <h3>github</h3>
          <p>github.com/minh0518</p>
        </GitHubDiv>
      </ContactAndGitHubDiv>
    </FooterContainerDiv>
  );
};

export default Footer;
