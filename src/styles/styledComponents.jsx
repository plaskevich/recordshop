import styled from 'styled-components';
import { colors, font } from 'styles/theme';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Card = styled.div`
  padding: 40px 60px;
  background-color: ${colors.grey[900]};
  border-radius: 25px;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Header = styled.h3`
  margin-top: 0;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;

export const LeftSection = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Artwork = styled.div`
  width: 250px;
  height: 250px;
  background: ${(props) =>
    props.imgUrl
      ? `url(${props.imgUrl})`
      : 'linear-gradient(135deg, #ee67d8 0%, #0b87ff 100%)'};
  background-size: cover;
  border-radius: 10px;
  text-align: center;
  img {
    width: 250px;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 60px;
  float: right;
`;

export const FillButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 14px;
  border-radius: 25px;
  padding: 5px 20px;
  font-weight: 500;
  font-family: ${font};
`;

export const LinkButton = styled(Link)`
  color: ${colors.white};
  font-size: 14px;
  padding: 6px 20px;
  font-weight: 500;
  font-family: ${font};
`;
