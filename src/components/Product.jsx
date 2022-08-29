import styled from "styled-components";

import Button from "./Button";

const StyledProduct = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
`;
const Counter = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Product = (props) => {
  // let decrement = <button onClick={props.decrement}>-</button>;

  // if (props.amount <= 0) {
  //   decrement = undefined;
  // }

  return (
    <StyledProduct className="Product">
      <h2 style={{ width: "60%" }}>{props.name}</h2>
      <Counter className="Count">
        <Button onClick={props.increment} w="30px" h="30px" bg="lightgreen">
          +
        </Button>
        <h4>{props.amount}</h4>
        <Button
          onClick={props.decrement}
          disabled={props.amount <= 0}
          w="30px"
          h="30px"
          bg="palevioletred"
        >
          -
        </Button>
      </Counter>
    </StyledProduct>
  );
};

export default Product;
