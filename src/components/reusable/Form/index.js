import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputTextField from "../InputTextField";
import Button from "../Button";
import Title from "../Title";
import Center from "../Center";
import { useDispatch, useSelector } from "react-redux";
import {
  createNotesAction,
  finalEditNotesAction,
} from "../../../redux/action/notesAction";
import { errorAction } from "../../../redux/action/errorActions";
import { useNavigate } from "react-router";
import Alert from "../Alert";
import { colors } from "../../../data";

export default function TaskModal({ handleClose }) {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAdddress] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [isEdit, seIsEdit] = useState(false);
  const [color, setColor] = useState("");
  const [checked, setChecked] = React.useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { notesData } = useSelector((state) => state.notesReducers);

  const { editNotesData } = useSelector((state) => state.notesReducers);

  useEffect(() => {
    setTitle(editNotesData?.todo);
    setFatherName(editNotesData?.fatherName);
    setMotherName(editNotesData?.motherName);
    setAdddress(editNotesData?.address);
    setEmail(editNotesData?.email);
    setSchool(editNotesData?.school);
    setColor(editNotesData?.color || "black");
    setChecked(editNotesData?.completed);
    setNumber(editNotesData?.number);

    if (editNotesData?.id) {
      seIsEdit(true);
    }
  }, [editNotesData]);

  const submitFormHandler = () => {
    var id = "id" + Math.random().toString(16).slice(2);

    let myDate = new Date().toLocaleString().replace(",", "");

    let data = {
      id: id + notesData?.length + 10,
      todo: title,
      fatherName,
      motherName,
      address,
      email,
      school,
      number,
      dateOfBirth,
      completed: false,
      // image,
      createdAt: myDate,
      updatedAt: myDate,
      color,
    };

    // if (isAlreadyTitleExist?.length > 0) {
    //   dispatch(errorAction("Title should not be same as existing title"));
    //   return;
    // }
// regex email validation

    if (!email || !email.includes("@") || !email.includes(".")) {
      dispatch(errorAction("Please Enter valid Email"));
      return
    }

    if (!title) {
      dispatch(errorAction("Name is mandatory"));
      return;
    }

    if (!number) {
      dispatch(errorAction("Mobile Number is mandatory"));
      return;
    }
    if (number.length !== 10) {
      dispatch(errorAction("Please Enter 10 Digit Mobile Number"));
      return;
    }

    if (!email) {
      dispatch(errorAction("Email is mandatory"));
      return;
    }

    if (isEdit) {
      let getEditabaleNotes = notesData?.filter(
        (flt) => flt.id === editNotesData.id
      )[0];

      getEditabaleNotes.todo = title;
      getEditabaleNotes.number = number;
      getEditabaleNotes.updatedAt = myDate;
      getEditabaleNotes.fatherName = fatherName;
      getEditabaleNotes.motherName = motherName;
      getEditabaleNotes.address = address;
      getEditabaleNotes.email = email;
      getEditabaleNotes.school = school;
      getEditabaleNotes.completed = checked;
      getEditabaleNotes.color = color;
      getEditabaleNotes.dateOfBirth = dateOfBirth;

      dispatch(finalEditNotesAction(notesData));
      dispatch(errorAction("Succesfully Student Profile updated"));

      navigate("/");
    } else {
      dispatch(createNotesAction(data));
      dispatch(errorAction("Succesfully Student Profile added"));
    }

    handleClose && handleClose();
  };

  return (
    <Form>
      <Alert />
      <InputTextField
       required
        label="Enter Student Name"
        placeholder="Enter Student Name"
        setVal={setTitle}
        val={title}
      />
      <InputTextField
       required
        label="Enter Your Mobile Number"
        placeholder="Enter Your Mobile Number"
        type="number"
        setVal={setNumber}
        val={number}
      />

      <InputTextField
        label="Date Of Birth"
        type="date"
        setVal={setDateOfBirth}
        val={dateOfBirth}
      />
      <InputTextField
        required
        label="E-mail Address"
        placeholder="Enter Your E-mail Address "
        setVal={setEmail}
        val={email}
      />
 
      <InputTextField
        label="Enter Father Name"
        placeholder="Enter Father Name"
        setVal={setFatherName}
        val={fatherName}
      />
      <InputTextField
        label="Enter Mother Name"
        placeholder="Enter Mother Name"
        setVal={setMotherName}
        val={motherName}
      />
      <InputTextField
        label="Address"
        placeholder="Enter Your Address "
        setVal={setAdddress}
        val={address}
      />

      {/* <ImageUpload
        label="Enter description"
        multiline={true}
        placeholder="Enter yout description"
        setVal={setImage}
        val={image}
      />
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="imageasdasd"
          style={{ width: 50, height: 50 }}
        />
      )} */}

      <select
        style={{
          width: "100%",
          height: 40,
          outline: "none",
          marginTop: "8px",
        }}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value={color}>SELECT A COLOR FOR BETTER EXPERIENCE</option>
        {colors.map((item, index) => {
          return (
            <option value={item.code} key={index}>
              {item?.code?.toUpperCase()}
            </option>
          );
        })}
      </select>

      {isEdit && (
        <div style={{ marginTop: 10 }}>
          <label>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            Do you complete this note
          </label>
        </div>
      )}
      <Center style={{ margin: 10 }} fullHeight={false}>
        <Button onClick={submitFormHandler}>
          <Title>{isEdit ? "EDIT" : "SUBMIT"}</Title>
        </Button>
      </Center>
    </Form>
  );
}

const Form = styled.div`
  margin-top: 30px;


`;

// const ColorBox = styled.div`
//   width: 40px;
//   height: 40px;
// `;
