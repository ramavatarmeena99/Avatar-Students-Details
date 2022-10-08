import React from "react";
import { Link } from "react-router-dom";
import Span from "../Span";

export default function Logo() {
  return (
    <Link to="/">
      STUDENTS <Span style={{ color: "red" }}>INFO</Span>
    </Link>
  );
}
