import styled from "styled-components";

export default {
  PageName: styled.div`
    color: #313131;
    font-size: 2.5rem;
    font-weight: 600;
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
    font-weight: 200;
    font-size: 2.5rem;
  `,
  Name: styled.div`
    font-weight: 700;
    color: #056674;
  `,

  ProgressBar: styled.div`
    width: 85%;
    height: 0.5rem;
    background-color: #e9e9e9;
  `,

  Progress: styled.div`
    height: 100%;
    width: ${(props) => props.progress * 100}%;
    background-color: #ff4b5c;
    transition: all 1s;
  `,

  ProgressText: styled.div`
    font-weight: 300;
    font-size: 1rem;
    color: #ff4b5c;
    padding-bottom: 0.5rem;
  `,

  DayHeader: styled.div`
    font-weight: 700;
    font-size: 2rem;
  `,
};
