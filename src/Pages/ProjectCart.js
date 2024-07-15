import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LabTestDiv2 from '../Components/LabTestDiv2';
import { useCart} from '../Logic/Context';

export default function ProjectCart() {

  const [total, setTotal] = useState(0);
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    console.log('Cart items:', cart);
    setTotal(cart.reduce((acc, curr) => acc + curr.Price, 0));
  }, [cart]);

  return (
    <>
      {/* <Container> */}
        <Row>
          <div className="all-cart">
            <div className="cart-part">
            {
              cart.map((test, index) => (
                <div className="cart-card" key={index}>
                  <main>
                    <div className="cart-item">
                      <img src='https://onemg.gumlet.io/assets/b1f5350e-2172-11ee-80ce-02d449b1bc26.png?format=auto' alt="Product Thumbnail" className="thumbnail" />
                      <div className="item-details">
                        <h2>Product Name: {test.Name}</h2>
                        <p><b>Test Type:</b> {test.Title2}</p>
                        <div className="price-quantity">
                          <span className="price">Price: Rs.{test.Price}</span>
                          {/* <input type="number" defaultValue={1} min={1} className="quantity" /> */}
                        </div>
                        <button className='' onClick={() => removeFromCart(test)}>Remove</button>
                      </div>
                    </div>
                  </main>
                </div>
              ))}
              </div>
          </div>
          <h3>Total: Rs.{total}</h3>
        </Row>
      {/* </Container> */}
    </>
  );
}
