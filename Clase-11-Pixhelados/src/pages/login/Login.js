import Panel from "../../components/panel/Panel";
import FieldSet from "../../components/fieldSet/FieldSet";
import Button from "../../components/button/Button";
import {
  LoginFormStyled,
  LoginSectionStyled,
  LoginTitleStyled,
} from "./LoginStyles";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Login() {
  const { handleSubmit, form } = useContext(AuthContext)

  return (
    <LoginSectionStyled>
      <LoginTitleStyled>{"Unite a la comunidad pa...."}</LoginTitleStyled>
      <Panel>
        <LoginFormStyled>
          <FieldSet
            type="text"
            placeholder="Escribí tu username..."
            id="username"
            value={ form.username }
            name="username"
            label="User"
            maxLength={10}
          />

          <FieldSet
            type="password"
            placeholder="Escribí tu contraseña..."
            id="password"
            name="password"
            value={ form.password }
            label="Password"
            error="Este campo es requerido"
          />

          <Button
            primary
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Enviar!
          </Button>
        </LoginFormStyled>
      </Panel>
    </LoginSectionStyled>
  );
}

export default Login;
