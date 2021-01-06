import React, { useState, useEffect } from "react";

const Product = (props) => {
  const [inCart, setinCart] = useState(false);
  // const [state, setstate] = useState(initialState)
  const { data, setCart, cart } = props;

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === data.id) {
        setinCart(true);
        break;
      }
    }
  }, [cart]);

  return (
    <>
      <div className="ui cards" style={styles.container}>
        <div className="card">
          <div className="image" style={styles.imageContainer}>
            <img src={data.image} alt={data.title} style={styles.image} />
          </div>
          <div className="content">
            <div className="header" style={styles.title}>
              {data.title}
            </div>
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

const styles = {
  imageContainer: {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "100%",
    width: "100%",
    margin: "0 auto",
  },
  image: { height: "100%", width: "100%" },
  title: { lineHeight: "1.5em", overflow: "hidden", height: "3em" },
  container: { marginTop: "0px", margin: "10px" },
};
