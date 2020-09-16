import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  TaskItem: styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    padding: 1rem 0;
  `,

  TimeBox: styled.div`
    color: #c9cbcb;
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem;
  `,

  TaskBox: styled.div`
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
  `,

  CheckBox: styled.div`
    width: 1.2rem;
    height: 1.2rem;
    border: 4px solid #313131;
    border-radius: 50%;
    transition: all 0.3s;

    ${(props) =>
      props.isChecked &&
      `
    border: 4px solid #C0C7C0;
    background-color: #C0C7C0;
  `}
  `,

  Label: styled.div`
    font-size: 0.6rem;
    letter-spacing: 0;
    font-weight: 600;
    background-color: rgba(132, 202, 202, 0.27);
    color: #66bfbf;
    padding: 0.3rem 0.5rem;
    width: fit-content;
    border-radius: 7px;
  `,

  TaskName: styled.div`
    font-size: 1rem;
    font-weight: 600;
  `,

  DeleteIcon: styled(FontAwesomeIcon)`
    color: #c7c8c8;
  `,

  TextBox: styled.div`
    padding: 0 1rem;
  `,
};
