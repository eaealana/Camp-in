import React from "react";
import Background from "./assets/side-image.jpg";
import ImageLogo from "./assets/logo.svg";

import {
  Main,
  Image,
  ContainerLeft,
  Logo,
  ContainerItens,
  H1,
  P,
  InputLabel,
  InputEmail,
  InputPassword,
  DivCheckbox,
  Checkbox,
  RemindMe,
  NewPassword,
  Button,
  NewAccount,
} from "./styles";

const App = () => {
  return (
    <Main>
      <ContainerLeft>
      <Logo src={ImageLogo} />

        <ContainerItens>

          <H1>Faça seu login</H1>
          <P>Entre com suas informações de cadastro.</P>

          <InputLabel>E-mail</InputLabel>
          <InputEmail type="email" />

          <InputLabel>Senha</InputLabel>
          <InputPassword type="password" />

        <DivCheckbox>
        <Checkbox type="checkbox"/>
          <RemindMe>Lembre-me</RemindMe>
          <NewPassword>Esqueci minha senha</NewPassword>
        </DivCheckbox>
  


          <Button>Entrar</Button>

          <NewAccount>
            Não tem conta?<span> Registre</span>
          </NewAccount>
        </ContainerItens>
      </ContainerLeft>

      <Image src={Background} />
    </Main>
  );
};

export default App;
