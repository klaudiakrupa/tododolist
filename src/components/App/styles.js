import styled from "styled-components";

export default {
  Logo: styled.img`
    width: 10rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    opacity: 0.5;
    z-index: 0;
  `,
  Main: styled.div`
    z-index: 10;
    background: rgb(236, 244, 243);
    background: linear-gradient(
      180deg,
      rgba(236, 244, 243, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    width: 100%;
    height: 100%;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1px;
    color: #313131;
  `,
};
