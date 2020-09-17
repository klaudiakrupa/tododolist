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
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    ${(props) =>
      props.hover &&
      `
    opacity: 0.1;
`}

    ${(props) =>
      props.isChecked &&
      `
      opacity: 0.35;

  `}
  `,
  CheckBoxContainer: styled.div`
    width: 1.1rem;
    height: 1.1rem;
    transition: all 0.3s;
    border-radius: 50%;
    border: 0.3rem solid #313131;
    background-color: #fff;
    cursor: pointer;

    ${(props) =>
      props.hover &&
      `
      border: 0.3rem solid #c0c7c0;
  `}

    ${(props) =>
      props.isChecked &&
      `
      border: 0.3rem solid #c0c7c0;
  `}
  `,

  CheckBox: styled(FontAwesomeIcon)`
  position: fixed;
    font-size: 1.1rem;
    color: #fff
    transition: all 0.3s;
    text-align: center;
    color: #c0c7c0;
    opacity: 0;

    &:hover {
      opacity: 1;
    }

    ${(props) =>
      props.isChecked &&
      `
      opacity: 1;
  `}

  ${(props) =>
    props.hover &&
    `
    opacity: 1;
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
    cursor: pointer;

    &:hover {
      color: #ff4b5c;
      opacity: 1;
    }
  `,

  TextBox: styled.div`
    padding: 0 1rem;
  `,
};
