import { Layout } from "../../components";
import { ProductCategories, ProductWrapper } from "./Hamburgers.style";

export default function Hamburgers() {
  return (
    <Layout>
      <h1>Hamburgers</h1>
      <ProductCategories></ProductCategories>
      <ProductWrapper></ProductWrapper>
    </Layout>
  );
}
