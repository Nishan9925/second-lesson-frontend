import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [basket, setBasket] = useState([]);
  const moveToCart = (prod) => {
    // setBasket([...basket, prod]);
    const result = basket.find((x) => x.id === prod.id);
    if (result) {
      result.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...prod, count: 1 }]);
    }
  };
  const removeFromCart = (prod) => {
    const updatedBasket = basket.filter((item) => item.id !== prod.id);
    setBasket(updatedBasket);
  };

  const decreaseItemInCart = (prod) => {
    if (prod.count > 1) {
      const updatedBasket = basket.map((item) =>
        item.id === prod.id ? { ...item, count: item.count - 1 } : item
      );
      setBasket(updatedBasket);
    }
  };

  const increaseItemInCart = (prod) => {
    const updatedBasket = basket.map((item) =>
      item.id === prod.id ? { ...item, count: item.count + 1 } : item
    );
    setBasket(updatedBasket);
  };
  
  
  const [products, seProducts] = useState([
    {
      id: 101,
      name: "Psychology Big Ideas",
      price: 100,
      picture:
        "https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 102,
      name: "Psychology",
      price: 200,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFff1IxzrTTtXPBV02tDv8rv8Ks682aPIEbA&s",
    },
    {
      id: 103,
      name: "Islam",
      price: 300,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSVmx5wcfQSj235YxA16m1VHXicwScBuyhA&s",
    },
    {
      id: 104,
      name: "Economics",
      price: 600,
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/81c6E2VdT3L._AC_UL600_SR600,600_.jpg",
    },
    {
      id: 105,
      name: "Politics",
      price: 700,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yWGtLdEt_3KM762RjFJCwbBqjfLKqWLfOg&s",
    },
    {
      id: 106,
      name: "Science",
      price: 900,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-SvCOPQsxVPkaCI3V1V6vkY_b7oJiAKe3cqlVXgg-TVDSV_4",
    },
    {
      id: 107,
      name: "History",
      price: 700,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppO11zsg7vgn38jiwkfIPYJJpAazuKapoFg&s",
    },
    {
      id: 108,
      name: "Ecology",
      price: 600,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkBmTOeDcm2f2l_GaYDp65K8CIdJ8T89djQ&s",
    },
  ]);
  return (
    <>
      <h1>Online Shop</h1>
      <div className="content">
        <div>
          <h3>Products</h3>
          <div className="list">
            {products.map((prod) => (
              <div key={prod.id}>
                <img src={prod.picture} />
                <p>{prod.name}</p>
                <strong>{prod.price}</strong>
                <button onClick={() => moveToCart(prod)}>Move</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Cart</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                <th>Subtotal</th>
                <th className="actions-th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.count * item.price}</td>
                  <td className="actions-td">
                    <button onClick={() => increaseItemInCart(item)}>+</button>
                    <button onClick={() => decreaseItemInCart(item)}>-</button>
                    <button onClick={() => removeFromCart(item)}>x</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
