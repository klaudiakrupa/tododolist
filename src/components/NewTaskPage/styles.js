import styled from "styled-components";

export default {
  PageName: styled.h1`
    color: #313131;
    font-size: 2.5rem;
  `,

  NameInput: styled.input`
    border: none;
    border-bottom: 2px solid #1e1e1e;
    background-color: rgba(255, 255, 255, 0);
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    width: 80%;
    color: #c6c7c6;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #c6c7c6;
    }
  `,
};
