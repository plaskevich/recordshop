import styled from 'styled-components';
import { colors } from 'styles/theme';

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

export const Header = styled.h3`
  margin-top: 0;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
