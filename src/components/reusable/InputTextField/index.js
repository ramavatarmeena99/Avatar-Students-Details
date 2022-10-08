import React from "react";
import styled from "styled-components";
import Span from "../Span";

export default function InputTextField({
  placeholder,
  setVal,
  val,
  label,
  multiline,
  type,
  required
}) {
  return (
    <>
      <Label>{label} {required && <Span style={{color:"red"}}>*</Span>} </Label>
      {multiline ? (
        <TextInput
          placeholder={placeholder}
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
      ) : (
        <Input
          placeholder={placeholder}
          type={type}
          onChange={(e) => setVal(e.target.value)}
          value={val}
                 
        />
      )}
    </>
  );
}

const Input = styled.input`
  outline: none;
  border: 1px solid #bbb;
  border-radius: 4px;
  height: 50px;
  width: 100%;
  padding: 0px 10px;
`;

const TextInput = styled.textarea`
  outline: none;
  border: 1px solid #bbb;
  height: 50px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 4px;
`;

const Label = styled.p`
  margin-top: 10px;
`;
