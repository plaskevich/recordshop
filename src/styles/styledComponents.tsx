import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Menu as MenuInner } from '@szhsin/react-menu';
import { menuItemSelector, menuSelector } from '@szhsin/react-menu/style-utils';

import { colors, font } from '@/styles/theme';

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
  border: solid 1px ${colors.grey[700]};
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
  color: ${colors.grey[100]};
  text-align: center;
`;

export const LeftSection = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Artwork = styled.div<{ imgUrl: string }>`
  width: 250px;
  height: 250px;
  background: ${(props) =>
    props.imgUrl ? `url(${props.imgUrl})` : 'linear-gradient(135deg, #ee67d8 0%, #0b87ff 100%)'};
  background-size: cover;
  border-radius: 10px;
  text-align: center;
  img {
    width: 250px;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 72px;
  float: right;
`;

export const FillButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.grey[100]};
  font-size: 14px;
  border-radius: 25px;
  padding: 5px 20px;
  font-weight: 500;
  font-family: ${font};
  &:hover {
    background-color: ${colors.blue_hover};
  }
`;

export const LinkButton = styled(Link)`
  color: ${colors.grey[100]};
  font-size: 14px;
  padding: 6px 20px;
  font-weight: 500;
  font-family: ${font};
`;

export const Menu = styled.div`
  position: absolute;
  left: 60px;
  background-color: ${colors.grey[100]};
  border-radius: 15px;
  padding: 6px;
  min-width: 8rem;
`;

export const MenuItem = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0.375rem 0.625rem;
  color: ${colors.grey[700]};
  font-family: ${font};
  font-size: 1rem;
  gap: 0.5rem;
  &:hover {
    color: ${colors.grey[100]};
    background-color: ${colors.grey[700]};
  }
`;
