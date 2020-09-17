import styled from "styled-components";

export default {
  MonthName: styled.h1`
    color: #056674;
    font-size: 2.5rem;
  `,
  DateBox: styled.div`
    background-color: #fff;
    width: 15%;
    font-size: 1.8rem;
    text-align: center;
    font-weight: 800;
    color: #056674;
    border-radius: 20px;
    margin: auto;
    padding: 1.5rem 0;

    ${(props) =>
      props.isActive &&
      `
      background: rgb(5,102,116);
      background: linear-gradient(180deg, rgba(5,102,116,1) 0%, rgba(102,191,191,1) 100%);
      color: #fff;
    `}
  `,

  DayBox: styled.div`
    font-size: 1rem;
  `,

  Dates: styled.div`
    display: flex;
  `,
};
