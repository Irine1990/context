import { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../context"

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;


  const [totalamount, setTotalAmount] = useState(null)
  

  useEffect(() => {
    const total = state.reduce((total, products) => {
      return total + (products.price *products.qnty);
    }, 0);
    setTotalAmount(total)

  }, [])

  return (
    <div className="cart">
      {state.map((products, index) => {
        return (
          <div className="card" key={index}>
            <img src={products.poster} alt="" />
            <p>{products.name}</p>
            <p>{products.price} Total Price</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: products })}>
                +
              </button>
              <p>{products.qnty}</p>
              <button
                onClick={() => {
                  if (products.qnty > 1) {
                    dispatch({ type: "DECREASE", payload: products });
                  } else {
                    dispatch({ type: "REMOVE", payload: products });
                  }
                }}>
                -
              </button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: products })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>{totalamount}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;