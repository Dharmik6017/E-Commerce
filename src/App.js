import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { connect } from "react-redux";
import { getProducts } from "./redux/actions";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import Product from "./components/Product";

const ViewCart = (props) => {
  const { open, setOpen, cart, setCart } = props;
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
      size="large"
    >
      <Modal.Header>Your Cart</Modal.Header>

      {cart && cart.length <= 0 ? (
        <div>Please add something to make order.....</div>
      ) : (
        <Modal.Content scrolling>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {cart &&
              cart.map((u, i) => {
                return <Product data={u} setCart={setCart} cart={cart} />;
              })}
          </div>
        </Modal.Content>
      )}

      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Place Order"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

function App(props) {
  const { loading, products } = props.products;
  const [cart, setCart] = useState([]);
  const [open, setopen] = useState(false);
  useEffect(() => {
    props.fetchData();
  }, []);

  console.log("cart in Appppp", cart);
  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="ui active centered inline loader"></div>
        </div>
      ) : (
        <>
          <div className="ui menu">
            <div className="header item">
              <a onClick={() => setopen(true)}>View Cart</a>
            </div>
          </div>
          <ProductList data={products} setCart={setCart} cart={cart} />

          <ViewCart
            open={open}
            setOpen={setopen}
            cart={cart}
            setCart={setCart}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
