"use client";

import type { Result, Category } from "../../models";

import { useQuery } from "@tanstack/react-query";

type Products = Result;

export const useGetCategories = (products: Products[]) => {
  return useQuery({
    queryKey: ["categories", products],
    queryFn: async () => {
      const ids = Array.from(new Set(products.map((product) => product.category_id)));

      const allProductsCategories = await Promise.all(
        ids.map((category_id) => {
          return fetch(`https://api.mercadolibre.com/categories/${category_id}`)
            .then((res) => res.json())
            .then((res: { path_from_root: { name: string; id: string }[] }) => res.path_from_root);
        }),
      );

      const draft: Record<string, Category> = {};

      allProductsCategories.forEach((productsCategories) => {
        productsCategories.forEach((singleCategory, index) => {
          const { id } = singleCategory;

          const parent = productsCategories[index - 1] as Category | undefined;

          const parentId = parent?.id ?? null;

          draft[id] = { ...singleCategory, parentId };
        });
      });

      return Object.values(draft);
    },
  });
};
