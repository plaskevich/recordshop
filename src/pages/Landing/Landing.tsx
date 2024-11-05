import logo from '@/assets/logo.png';

import {
  BrandLogo,
  BrandLogoWrap,
  FirstLine,
  LandingContent,
  LoginButton,
  LogoText,
  Main,
  Nav,
  NavButtons,
  SignUpButton,
  TryText,
} from './LandingStyles';

export default function Landing() {
  return (
    <Main>
      <Nav>
        <BrandLogoWrap to="/">
          <BrandLogo src={logo} alt="" />
          <LogoText>RecordShop</LogoText>
        </BrandLogoWrap>
        <NavButtons>
          <LoginButton to="/login">Login</LoginButton>
          <SignUpButton to="/signup">
            <span>Get Started</span>
          </SignUpButton>
        </NavButtons>
      </Nav>
      <LandingContent>
        <FirstLine>
          Inventory management app <br /> for your record store
        </FirstLine>
        <TryText to="signup">
          <h1>TRY NOW</h1>
        </TryText>
      </LandingContent>
    </Main>
  );
}
