import { CategoryListElement } from "./CategoryList.style";

interface CategoryListProps {
  data: {
    text: string;
    link: string;
  };
}

export const CategoryList = ({ data }: CategoryListProps) => {
  return <CategoryListElement>{data.text}</CategoryListElement>;
};
