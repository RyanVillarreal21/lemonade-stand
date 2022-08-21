import "./Product.css";

const Product = (props) => {
  // let decrement = <button onClick={props.decrement}>-</button>;

  // if (props.amount <= 0) {
  //   decrement = undefined;
  // }

  return (
    <div className="Product">
      <h2>{props.name}</h2>
      <div className="Count">
        <button onClick={props.increment}>+</button>
        <h4>{props.amount}</h4>
        {props.amount > 0 ? <button onClick={props.decrement}>-</button> : ""}
      </div>
    </div>
  );
};

export default Product;
