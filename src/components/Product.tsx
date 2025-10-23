import imgProduct from "../../src/assets/product.png";

export function Product() {
  return (
    <div className="absolute h-[226px] left-1/2 -translate-x-1/2 top-[260px] w-[86px]" data-name="Product">
      <img alt="KitKat product" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct} />
    </div>
  );
}
