"use client";
import type { Category } from "@/models";

interface ListOfCategoriesProps {
  categories: Category[];
  parentCategory?: string | null;
}

export default function ListOfCategories({
  categories,
  parentCategory = null,
}: ListOfCategoriesProps) {
  const categoriesToRender = categories.filter(({ parentId }) => {
    return parentCategory === parentId;
  });

  return (
    <ul>
      {categoriesToRender.map((category) => (
        <li key={category.id} className="ml-4">
          {category.name}
          <ListOfCategories categories={categories} parentCategory={category.id} />
        </li>
      ))}
    </ul>
  );
}
