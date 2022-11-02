import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, font } from 'styles/theme';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    box-shadow: 0 0 0 1000px ${colors.grey[900]} inset !important;
    -webkit-text-fill-color: #fff !important;
  }
`;

export const Card = styled.div`
  padding: 40px 60px;
  background-color: ${colors.grey[900]};
  border-radius: 25px;
`;

export const TitleWrap = styled.div`
  padding-bottom: 20px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0;
  width: 100%;
`;

export const Label = styled.div`
  color: #a1a1ac;
  font-size: 14px;
  font-weight: 500;
  float: right;
  padding-left: 12px;
  padding-bottom: 8px;
`;

export const Input = styled.input`
  font-family: ${font};
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: transparent;
  border: solid 3px #424247;
  border-radius: 15px;
  transition: all 0.2s ease;
  padding: 14px 12px;
  caret-color: ${colors.yellow};
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: ${colors.pink};
    outline: none;
  }
`;

export const CreateAccountWrap = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  font-size: 13px;
  * {
    padding: 0 2px;
  }
  span {
    color: #fff;
  }
  a {
    color: ${colors.yellow};
    font-weight: 700;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginButton = styled.button`
  font-family: ${font};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background: ${colors.blue};
  border-radius: 15px;
  border: solid 3px ${colors.blue};
  width: 100%;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackWrap = styled(Link)`
  margin-top: 50px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    padding: 0 5px;
  }
`;

export const ErrorMessage = styled.div`
  padding: 5px 0;
  text-align: center;
  color: ${colors.red};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.div`
  width: fit-content;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
