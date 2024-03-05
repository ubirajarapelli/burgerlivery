import { Button, Layout } from "../../components";
import {
  HomeActionContentElement,
  HomeBgImage,
  HomeWrapperElement,
} from "./Home.style";
import HomeBg from "../../assets/bg-top.jpg";

export default function Home() {
  return (
    <Layout>
      <HomeWrapperElement>
        <HomeActionContentElement>
          <h1>Hamburgers para todos os gostos</h1>
          <p>Nós fazemos deliciosos hamburgers e entregamos na sua porta</p>
          <Button onClick={() => {}}>Peça agora</Button>
        </HomeActionContentElement>
        <HomeBgImage src={HomeBg} alt="placeholder" />
      </HomeWrapperElement>
    </Layout>
  );
}
