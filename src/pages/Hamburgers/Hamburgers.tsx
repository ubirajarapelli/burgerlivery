import { useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import { ProductCategories, ProductWrapper } from "./Hamburgers.style";
import { burgers, categoriesList } from "../../mocks";
import {
  ProductCardContent,
  ProductCardPrice,
} from "../../components/ProductCard/ProductCard.style";

export default function Hamburgers() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const priceFormat = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  useEffect(() => {
    setCategories(categoriesList);
  }, []);

  useEffect(() => {
    setProducts(burgers);
  }, []);

  return (
    <Layout>
      <h1>Hamburgers</h1>
      <ProductCategories>
        {categories.map((item, index) => (
          <CategoryList key={index} data={item} />
        ))}
      </ProductCategories>
      <ProductWrapper>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductCardContent>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <Button onClick={() => {}}>Adicionar</Button>
            </ProductCardContent>
            <ProductCardPrice>
              {priceFormat(product.values.single)}
            </ProductCardPrice>
            <img src={product.image[0]} alt={product.title} />
          </ProductCard>
        ))}
      </ProductWrapper>
    </Layout>
  );
}
