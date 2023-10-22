"use client";
import { useGetProducts, useGetCategories } from "@/hooks";
import ListOfCategories from "@/components/ListOfCategories/ListOfCategories";

export default function AsideCategories() {
  const { data } = useGetProducts();
  const { data: categories = [] } = useGetCategories(data || []);

  return (
    <aside>
      <ListOfCategories categories={categories} />
    </aside>
  );
}
