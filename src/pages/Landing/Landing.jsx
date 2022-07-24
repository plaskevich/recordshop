import {
  Main,
  Nav,
  BrandLogo,
  NavButtons,
  SignUpButton,
  LoginButton,
  FirstLine,
  TryText,
  BrandLogoWrap,
  LogoText,
  LandingContent,
} from './LandingStyles';

import logo from './vinyl-logo.png';

export default function Landing() {
  return (
    <Main>
      <Nav>
        {/* <Logo to='/'>record shop</Logo>
         */}
        <BrandLogoWrap>
          <BrandLogo src={logo} alt='' />
          <LogoText>RecordShop</LogoText>
        </BrandLogoWrap>
        RECORD SHOP
        <NavButtons>
          <LoginButton to='/login'>Login</LoginButton>
          <SignUpButton to='/signup'>
            <span>Get Started</span>
          </SignUpButton>
        </NavButtons>
      </Nav>
      <LandingContent>
        <FirstLine>
          INVENTORY MANAGEMENT APP FOR YOUR LOCAL RECORD STORE
        </FirstLine>
        <TryText to='signup'>
          <h1>TRY NOW</h1>
        </TryText>
      </LandingContent>
    </Main>
  );
}
