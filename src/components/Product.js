import React, { useState, useEffect } from "react";

const Product = (props) => {
  const [inCart, setinCart] = useState(false);
  // const [state, setstate] = useState(initialState)
  const { data, setCart, cart } = props;

  useEffect(() => {
    // console.log(cart, "In use Effect");
    // cart && cart.length === 0 && setinCart(false);
    // let setcart = cart.map((u) => u.id === data.id);
    // setinCart(...setcart);
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === data.id) {
        setinCart(true);
        break;
      }
    }
  }, [cart]);

  // console.log("inCart", inCart, data);
  return (
    <>
      <div className="ui cards" style={{ marginTop: "0px" }}>
        <div className="card">
          <div
            className="image"
            style={{
              maxHeight: "200px",
              maxWidth: "200px",
              height: "100%",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <img
              src={data.image}
              alt={data.title}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="content">
            <div className="header">{data.title}</div>
            <div className="meta">
              <a>{data.category}</a>
            </div>
          </div>
          <div className="extra center content">
            {inCart ? (
              <button
                className="ui primary button"
                onClick={() => {
                  let newArray = [...cart];
                  newArray = newArray.filter((u) => {
                    return u.id !== data.id;
                  });
                  setCart(newArray);
                  setinCart(false);
                }}
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="ui primary button"
                onClick={() => {
                  setCart([...cart, data]);
                  console.log("data.id clicked", data.id);
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
