import React from 'react';
import logo from 'src/components/Icon/IconLogo/Logo.svg';
import KakaoLoginButton from 'src/components/KakaoLoginButton';
import UnivSearchBar from 'src/components/organims/UnivSearchBar';
import { Container, ContainerWithSearchAndLogin, LogoContainer } from './style';

export function LandingPage() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <ContainerWithSearchAndLogin>
        <UnivSearchBar />
        <KakaoLoginButton />
      </ContainerWithSearchAndLogin>
    </Container>
  );
}
