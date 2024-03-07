import { Button, Layout, TextField } from "../../components";
import {
  LoginActionContentElement,
  LoginBgImage,
  LoginWrapperElement,
} from "./Login.style";
import LoginBg from "../../assets/bg-top.jpg";

export default function Login() {
  return (
    <Layout>
      <LoginWrapperElement>
        <LoginActionContentElement>
          <h1>Entre com sua conta</h1>
          <p>Entre com sua conta para fazer pedidos</p>
          <TextField id="email" label="E-mail" type="email" />
          <TextField id="password" label="Senha" type="password" />
          <Button onClick={() => {}}>Entrar</Button>
        </LoginActionContentElement>
        <LoginBgImage src={LoginBg} alt="placeholder" />
      </LoginWrapperElement>
    </Layout>
  );
}
