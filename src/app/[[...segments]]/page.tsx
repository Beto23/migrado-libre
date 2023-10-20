"use client";

import { Products } from "../../components";

interface Params {
  params: {
    segments: string[];
  };
}

export default function Category({ params: { segments: [category] = [] } }: Params) {
  return <Products category={category} />;
}
