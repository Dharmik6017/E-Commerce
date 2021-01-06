import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { connect } from "react-redux";
import { getProducts, makeOrderRequested } from "./redux/actions";
import ViewCart from "../src/components/viewCartModel";

function App(props) {
  const { loading, products } = props.products;
  const [cart, setCart] = useState([]);
  const [open, setopen] = useState(false);
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div style={styles.loaderContainer}>
          <div className="ui active centered inline loader"></div>
        </div>
      ) : (
        <>
          <div className="ui menu">
            <div className="header item">
              <p onClick={() => setopen(true)}>View Cart</p>
            </div>
          </div>
          <ProductList data={products} setCart={setCart} cart={cart} />

          <ViewCart
            open={open}
            setOpen={setopen}
            cart={cart}
            setCart={setCart}
            parentprops={props}
          />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(getProducts());
    },
    makeOrder: (data) => {
      dispatch(makeOrderRequested(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = {
  loaderContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
};
