import styled from 'styled-components';
import { colors, font } from 'styles/theme';
import { Link } from 'react-router-dom';
import { Menu as MenuInner } from '@szhsin/react-menu';
import { menuSelector, menuItemSelector } from '@szhsin/react-menu/style-utils';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Card = styled.div`
  padding: 2.8rem 3.2rem;
  background-color: ${colors.grey[900]};
  border-radius: 25px;
  border: solid 1px ${colors.grey[800]};
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Header = styled.h3`
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.grey[300]};
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
  margin-top: 4.5rem;
  float: right;
`;

export const FillButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.grey[300]};
  font-size: 14px;
  border-radius: 25px;
  padding: 5px 20px;
  font-weight: 500;
  font-family: ${font};
`;

export const LinkButton = styled(Link)`
  color: ${colors.grey[300]};
  font-size: 14px;
  padding: 6px 20px;
  font-weight: 500;
  font-family: ${font};
`;

export const Menu = styled(MenuInner)`
  ${menuSelector.name} {
    background-color: ${colors.grey[300]};
    border-radius: 15px;
    padding: 6px;
    min-width: 8rem;
  }
  ${menuItemSelector.name} {
    border-radius: 10px;
    padding: 0.375rem 0.625rem;
    color: ${colors.grey[800]};
    font-family: ${font};
    font-size: 1rem;
    gap: 0.5rem;
  }
  ${menuItemSelector.hover} {
    color: ${colors.grey[300]};
    background-color: ${colors.grey[800]};
  }
`;
