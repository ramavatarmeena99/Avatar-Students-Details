import React from "react";
import styled from "styled-components";

export default function Title(props) {
  return <P {...props}>{props.children}</P>;
}

const P = styled.p`
  line-height: 1;
  font-size: 16px;
  color: #2c234d;
`;
