import styled from "styled-components";
const CustomTitle = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
      color: ${(props) => props.theme.secondary};
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      color: ${(props) => props.theme.textColor};
    }
  }
`;

export default CustomTitle;
