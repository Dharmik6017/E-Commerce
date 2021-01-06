import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Product from "./Product";

const ViewCart = (props) => {
  const { open, setOpen, cart, setCart, parentprops } = props;
  const { makeOrder, makeOrderLoading } = parentprops;
  console.log("parentprops", parentprops);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
    >
      <Modal.Header>Your Cart</Modal.Header>

      {cart && cart.length <= 0 ? (
        <div style={styles.noDataContainer}>
          Please add something to make order.....
        </div>
      ) : (
        <Modal.Content scrolling>
          <div style={styles.contentContainer}>
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
          onClick={async () => {
            await makeOrder(cart);
            setCart([]);
            setOpen(false);
          }}
          disabled={cart.length === 0 || makeOrderLoading}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ViewCart;

const styles = {
  contentContainer: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  noDataContainer: {
    padding: "20px",
  },
};
