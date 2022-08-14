import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const Checkout = () => {
  const { cartProducts } = useContext(CartContext);
  let demo = cartProducts[0];
  return (
    <div>
      <h1>Pagina de Checkout</h1>
      {demo.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};


export default Checkout;