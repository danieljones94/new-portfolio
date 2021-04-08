import styled from "styled-components";

const CustomScrollButton = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: felx;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  color: ghostwhite;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

export default CustomScrollButton;
