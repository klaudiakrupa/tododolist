import styled from "styled-components";

export default {
  Button: styled.button`
    width: 90%;
    height: 3rem;
    cursor: pointer;
    border-radius: 0 0 1rem 1rem;
    border: none;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    transition: all 0.3s;

    &:focus {
      outline: none;
    }

    ${(props) =>
      props.color === "light" &&
      `
    background-color: #e9e9e9;
    color: #9c9c9c;

    &:hover {
      background-color: #056674;
      color: #fff;
    }    
    `}

    ${(props) =>
      props.color === "dark" &&
      `
    background-color: #313131;
    color: #fff;

    &:hover {
      background-color: #FF4B5C;
      color: #fff;
    }    
    `}
  `,
};
