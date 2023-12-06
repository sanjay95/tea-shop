import Product from "./Product";

export default function SuggestProducts() {
  return (
    <div className="suggest-products">
      <h1>You May Also Like</h1>
      <div className="suggest-products-flex">
        <Product />
      </div>
    </div>
  );
}
