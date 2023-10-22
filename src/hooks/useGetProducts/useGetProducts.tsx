"use client";

import type { SellerData } from "../../models";

import { useQuery } from "@tanstack/react-query";

type Products = SellerData["results"];

export const useGetProducts = (category: string | undefined = undefined) => {
  const url = new URL("https://api.mercadolibre.com//sites/MLA/search");

  url.searchParams.append("seller_id", "179571326");
  if (category) url.searchParams.append("category", category);

  return useQuery<Products>({
    queryKey: category ? ["products-category"] : ["products"],
    queryFn: () =>
      fetch(url)
        .then((res) => res.json())
        .then((data: SellerData) => data.results),
  });
};
