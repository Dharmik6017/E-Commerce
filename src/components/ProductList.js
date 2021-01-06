import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  const { data, setCart, cart } = props;

  return (
    <div style={styles.container}>
      {data &&
        data.map((u, i) => {
          return <Product data={u} key={u.id} setCart={setCart} cart={cart} />;
        })}
    </div>
  );
};

export default ProductList;

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
