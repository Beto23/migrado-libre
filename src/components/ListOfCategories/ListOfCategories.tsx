"use client";
import type { Category } from "@/models";

import Link from "next/link";
import { useState } from "react";

interface ListOfCategoriesProps {
  categories: Category[];
  parentCategory?: string | null;
}

function CategoryItem({ category, categories }: { category: Category; categories: Category[] }) {
  const [showSubCategories, setShowSubCategories] = useState(false);

  const hasSubCategories = categories.filter(({ parentId }) => category.id === parentId).length;

  const handleClick = () => {
    setShowSubCategories((prev) => !prev);
  };

  return (
    <li className={`ml-4 ${hasSubCategories > 0 ? "" : "ml-8"}`}>
      {hasSubCategories > 0 && (
        <button className="p-2" type="button" onClick={handleClick}>
          {showSubCategories ? "-" : "+"}
        </button>
      )}
      <Link href={`/${category.id}`}>{category.name} </Link>
      {showSubCategories ? (
        <ListOfCategories categories={categories} parentCategory={category.id} />
      ) : null}
    </li>
  );
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
        <CategoryItem key={category.id} categories={categories} category={category} />
      ))}
    </ul>
  );
}
