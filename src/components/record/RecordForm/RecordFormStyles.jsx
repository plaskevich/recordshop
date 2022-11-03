import styled from 'styled-components';
import { colors, font } from 'styles/theme';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  width: 350px;
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

export const Container = styled.div`
  display: flex;
  width: 100%;
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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const FormGroupShort = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 47%;
`;

export const Label = styled.div`
  color: ${colors.grey[500]};
  font-size: 12px;
  font-weight: 500;
  float: right;
  padding-left: 12px;
  padding-bottom: 8px;
`;

export const Input = styled.input`
  font-family: ${font};
  font-size: 14px;
  color: ${colors.grey[300]};
  background-color: transparent;
  border: solid 2px ${colors.grey[600]};
  border-radius: 5px;
  transition: all 0.2s ease;
  padding: 6px 10px;
  caret-color: ${colors.yellow};
  width: 100%;

  box-sizing: border-box;
  &:focus {
    border-color: ${colors.pink};
    outline: none;
  }
`;

export const Select = styled.select`
  font-family: ${font};
  font-size: 14px;
  color: ${colors.grey[300]};
  background-color: transparent;
  border: solid 2px ${colors.grey[600]};
  border-radius: 5px;
  transition: all 0.2s ease;
  padding: 6px 10px;
  width: 100%;

  box-sizing: border-box;
  &:focus {
    border-color: ${colors.pink};
    outline: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 60px;
  float: right;
`;
