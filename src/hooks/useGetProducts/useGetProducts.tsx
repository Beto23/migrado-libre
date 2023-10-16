"use client";

import type { SellerData } from "../../models";

import { useQuery } from "@tanstack/react-query";

type Products = SellerData["results"];

export const useGetProducts = () => {
  return useQuery<Products>({
    queryKey: ["seller"],
    queryFn: () =>
      fetch("https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326")
        .then((res) => res.json())
        .then((data: SellerData) => data.results),
  });
};
