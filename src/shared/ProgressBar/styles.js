import styled from "styled-components";

export default {
  Main: styled.div``,

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
};
