"use client";

import { useGetProducts } from "../../hooks";

export default function Products() {
  const { isLoading, data } = useGetProducts();

  if (isLoading) return <p>Cargando articulos...</p>;

  if (!data) {
    return (
      <div className="grid grid-cols-4 gap-3">
        <p>No se econtraron articulos</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {data.map((product) => (
        <div key={product.id}>
          <img alt="" src={product.thumbnail} />
          <p>{product.title}</p>
          <strong>
            {product.price.toLocaleString("es-AR", {
              currency: product.currency_id,
              style: "currency",
            })}
          </strong>
        </div>
      ))}
    </div>
  );
}
