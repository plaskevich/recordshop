import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'styles/theme';

export const Main = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  position: sticky;
  top: 0;
  background-color: ${colors.black};
`;

export const BrandLogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const LogoText = styled.div`
  color: ${colors.blue};
  font-size: 30px;
  font-weight: 600;
`;

export const BrandLogo = styled.img`
  width: 35px;
  height: 35px;
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  font-weight: 700;
  font-size: 18px;
`;

export const LoginButton = styled(Link)`
  transition: ease-out 0.3s;
  color: ${colors.grey[100]};
  &:hover {
    color: ${colors.blue};
  }
`;

export const SignUpButton = styled(Link)`
  transition: ease-out 0.3s;
  color: ${colors.grey[100]};
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 3px transparent;
  padding: 12px 25px;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(-101deg, ${colors.pink} 0%, ${colors.blue} 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px ${colors.black} inset;
  border-radius: 25px;

  &:hover {
    box-shadow: none;
  }
`;

export const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 140px 0;
  gap: 20px;
`;

export const FirstLine = styled.h1`
  color: ${colors.grey[100]};
  font-size: 52px;
  font-weight: 800;
  text-align: center;
  line-height: 60px;
  margin-bottom: 100px;
  line-height: 80px;
`;
export const TryText = styled(Link)`
  h1 {
    color: ${colors.grey[100]};
    font-size: 66px;
    font-weight: 800;
    margin: 0;
  }

  transition: all 0.3s ease-out;

  background-image: url('textfill.png');
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background-image: url('textfill2.png');
  }
`;
