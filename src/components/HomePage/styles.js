import styled from "styled-components";

export default {
  Main: styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;

    width: 100%;
    height: 100%;
    background: rgb(236, 244, 243);
    background: linear-gradient(
      180deg,
      rgba(236, 244, 243, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  `,

  MainWithoutUsername: styled.div`
    width: 100%;
    height: 100%;
  `,

  MainWithUsername: styled.div`
    width: 100%;
    height: 100%;
  `,

  WelcomeText: styled.div`
    font-weight: 100;
    font-size: 2.5rem;
  `,
  Name: styled.div`
    font-weight: 700;
    color: #056674;
  `,

  Button: styled.button`
    width: 90%;
    height: 3rem;
    border-radius: 0 0 1rem 1rem;
    border: none;
    background-color: #e9e9e9;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
    color: #9c9c9c;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 1rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #056674;
      color: #fff;
    }
  `,
};
