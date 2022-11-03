import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, font } from 'styles/theme';

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${colors.white};
  font-weight: 800;
  margin-bottom: 8px;
  max-width: 400px;
`;
export const Artist = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${colors.white};
  font-weight: 500;
  max-width: 400px;
`;

export const InfoSection = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 24px;
`;
export const InfoSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey[500]};
`;
export const Info = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.white};
`;
