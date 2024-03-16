import { Initial_List } from '../App';
import { Cartcontext } from "../context"
import { useContext, useEffect, useState } from 'react';

export function ProductsList() {

    const productsList = Initial_List;
    const Globalstate = useContext(Cartcontext);

    const dispatch = Globalstate.dispatch;
    console.log(Globalstate);

    const [data, setData] = useState([]);
    console.log(data)

    useEffect(() => {
        setData();
    }, []);

    return (

        <div className="product-list">
            {productsList.map((pd) => <Products products={pd} />

            )}
        </div>
    );
}
function Products({ products }) {
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;



    return (

        <div className="product-container">

            <div >
                <img src={products.poster} alt="product-name"></img>
                <div className="product-spec">
                    <h6 className="product-name">{products.name}-{products.id}</h6>
                    <p> ⭐{products.rating}</p>
                </div>
                <div className="product-cmst">
                    <h6 className="product-company">Company-{products.company}</h6>
                    <h6 className="product-stock"> Stock-{products.stock}</h6>
                </div>

                <p className="product-summary">{products.summary}</p>
                <div className="product-spec">
                    <h6 className="product-price"> {products.price}</h6>

                    <button onClick={() => dispatch({ type: 'ADD', payload: products })}>Add To Cart</button>
                </div>
            </div>



        </div>
    );
}
