import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TitleWrap = styled.div`
  padding-bottom: 20px;
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
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: transparent;
  border: solid 3px #424247;
  border-radius: 15px;
  transition: all 0.2s ease;
  padding: 14px 12px;
  caret-color: #ffe607;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #ee67d8;
    outline: none;
  }
`;
/* input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  box-shadow: 0 0 0 1000px #141415 inset !important;
  -webkit-text-fill-color: #F5F5F5 !important;
} */

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
    color: #ffe607;
    font-weight: 700;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginButton = styled.button`
  font-family: Rubik;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background: #0000ff;
  padding: 14px 12px;
  border-radius: 15px;
  border: solid 3px #0000ff;
  width: 100%;
`;

export const BackWrap = styled(Link)`
  margin-top: 80px;
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
  text-align: center;
  color: #ffe607;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.div`
  width: fit-content;
  padding: 7px;
  background-color: #ffd23f20;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
