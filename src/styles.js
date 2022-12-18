import styled from "styled-components";

import Mail from "./assets/mail.svg";
import MailFocus from "./assets/mail-focus.svg";
import Password from "./assets/lock.svg";
import PasswordFocus from "./assets/lock-focus.svg";
import LogIn from "./assets/log-in.svg";

export const Main = styled.div`
  height: 100vh;

  background-color: var(--background);

  @media (min-width: 700px) {
    display: flex;
  }
`;

export const Logo = styled.img`
  margin: 1rem 2rem;
`;

export const Image = styled.img`
  display: none;
  visibility: hidden;
  z-index: 0;

  @media (min-width: 700px) {
    display: flex;
    visibility: visible;
    z-index: 1;
    float: right;
    width: 40vw;
    height: 100vh;
  }
`;

export const ContainerLeft = styled.div`
  @media (min-width: 700px) {
    width: 60vw;
  }
`;

export const ContainerItens = styled.div`
  padding: 3rem 2rem;
  margin: 2rem auto;
  height: 28rem;
  width: 25rem;

  border-radius: 5px;
  background: var(--form-background);
  box-shadow: 0px 0px 10px rgb(241, 234, 165);
`;

export const H1 = styled.h1`
  padding-left: 2rem;

  background-image: url("${LogIn}");
  background-repeat: no-repeat;
  background-position: 1px;
  font: 600 1.7rem "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #ffffff;
`;

export const P = styled.p`
  margin: 1.2rem 0;

  font: 500 1rem "Poppins", sans-serif;
  color: var(--text-title);
`;

export const InputLabel = styled.p`
  margin: 0.5rem 0;

  font: 500 0.8rem "Poppins", sans-serif;
  letter-spacing: 1px;
  color: var(--text-title);
`;

export const InputEmail = styled.input`
  width: 17rem;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 1rem 1rem 2.4rem;

  border: none;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  background-image: url("${Mail}");
  background-repeat: no-repeat;
  background-position: center left 10px;
  transition: width 0.7s ease-in;

  &:focus,
  &:hover {
    width: 20rem;
    border: 1px solid #ffc632;
    background-image: url("${MailFocus}");
    box-shadow: 0px 0px 5px 0px #ffc632;
    outline: none;
  }
`;

export const InputPassword = styled.input`
  width: 17rem;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 1rem 1rem 2.4rem;

  border: none;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  background-image: url("${Password}");
  background-repeat: no-repeat;
  background-position: center left 10px;
  transition: width 0.7s ease-in;

  &:focus,
  &:hover {
    width: 20rem;

    outline: none;
    border: 1px solid #ffc632;
    background-image: url("${PasswordFocus}");
    box-shadow: 0px 0px 5px 0px #ffc632;
  }
`;

export const DivCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.7rem 0;

  div {
    display: flex;
  }
`;

export const Checkbox = styled.input`
  display: flex;
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
    background-color: #24221f;
    border-radius: 2px;
    border: 1px solid #fff;
  }

  &:checked:after {
    content: "";
    display: block;
    width: 3px;
    height: 7px;
    border: solid #ffc632;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 3px;
    left: 6px;
  }
`;

export const RemindMe = styled.p`
margin: 0.2rem 0 0 0.7rem;
  font: 400 0.7rem "Roboto", sans-serif;
  letter-spacing: 1px;
  color: var(--text-title);
`;

export const NewPassword = styled.p`
  margin-top: 0.1rem;

  font: 400 0.7rem "Roboto", sans-serif;
  letter-spacing: 1px;
  color: var(--button-color);
  cursor: pointer;

  transition: color 0.5s;

  &:hover {
    color: var(--text-title);
  }
`;

export const NewAccount = styled.p`
  text-align: center;

  font: 500 0.9rem "Poppins", sans-serif;
  letter-spacing: 1px;
  color: var(--button-color);

  span {
    font-weight: 700;
    cursor: pointer;
    transition: color 0.7s;
  }

  &:hover {
    span {
      color: var(--text-title);
    }
  }
`;

export const Button = styled.button`
  width: 21rem;
  margin: 1rem 0;
  padding: 0.5rem;
  background: var(--button-color);
  background-image: linear-gradient(
    -60deg,
    transparent,
    transparent 40%,
    #ffffff44 40%,
    #ffffff44 60%,
    transparent 60%,
    transparent 100%
  );
  background-size: 200% 100%;
  background-repeat: no-repeat;
  background-position: -150%;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  transition: background 1s;
  font: 600 1rem "Poppins", sans-serif;
  letter-spacing: 1px;

  :hover {
    background-position-x: 150%;
    background-color: var(--button-color);
    box-shadow: 0px 0px 7px #949085;
    transition: background-position-x 600ms;
  }
`;
