

import { createContext, useReducer } from "react";

export const Cartcontext = createContext();
export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const tempstate = state.filter((products) => action.payload.id === products.id);
                if (tempstate.length > 0) {
                    return state;
                } else {
                    return [...state, action.payload];
                }
            case "INCREASE":
                const tempstate1 = state.map((products) => {
                    if (products.id === action.payload.id) {
                        return { ...products, quantity: products.qnty + 1 };
                    } else {
                        return products;
                    }
                });
                return tempstate1;
            case "DECREASE":
                const tempstate2 = state.map((products) => {
                    if (products.id === action.payload.id) {
                        return { ...products, quantity: products.qnty - 1 };
                    } else {
                        return products;
                    }
                });
                return tempstate2;
            case "REMOVE":
                const tempstate3 = state.filter(
                    (products) => products.id !== action.payload.id
                );

                return tempstate3;

            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, []);
    const info = { state, dispatch };
    return (
        <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
    );
};