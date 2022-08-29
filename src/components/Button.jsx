import styled from "styled-components";

const Button = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  border: 1px solid black;
  border-radius: 3px;
  background: ${({ bg }) => bg};
  color: #fff;
  font-size: 20px;
  &:disabled {
    color: #555;
    background: #ccc;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
