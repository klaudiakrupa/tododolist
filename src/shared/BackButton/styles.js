import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  Button: styled(FontAwesomeIcon)`
    color: #c0c7c0;
    transition: all 0.3s;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: #313131;
    }
  `,
};
