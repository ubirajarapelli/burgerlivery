import { useEffect, useState } from "react";
import { CategoryList, Layout } from "../../components";
import { ProductCategories } from "../Hamburgers/Hamburgers.style";

export default function Appetizers() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const url = "http://localhost:8000/categories";
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Layout>
      <h1>Entradinhas</h1>
      <ProductCategories>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          categories.map((item, index) => (
            <CategoryList key={index} data={item} />
          ))
        )}
      </ProductCategories>
    </Layout>
  );
}
