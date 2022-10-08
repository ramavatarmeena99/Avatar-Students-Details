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
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAdddress] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [hobbies, setHobbies] = useState("");

  // const [image, setImage] = useState("");
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

    setColor(editNotesData?.color || "red");
    setChecked(editNotesData?.completed);

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
      hobbies,
      school,
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

    if (!title) {
      dispatch(errorAction("Name is mandatory"));
      return;
    }
   
    if (isEdit) {
      let getEditabaleNotes = notesData?.filter(
        (flt) => flt.id === editNotesData.id
      )[0];

      getEditabaleNotes.todo = title;
      getEditabaleNotes.updatedAt = myDate;
      getEditabaleNotes.fatherName = fatherName;
      getEditabaleNotes.motherName = motherName;
      getEditabaleNotes.address = address;
      getEditabaleNotes.email = email;
      getEditabaleNotes.school = school;
      getEditabaleNotes.hobbies = hobbies;
      getEditabaleNotes.completed = checked;
      getEditabaleNotes.color = color;

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
        label="Enter Student Name"
        placeholder="Enter Student Name"
        setVal={setTitle}
        val={title}
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
      <InputTextField
        label="E-mail Address"

        placeholder="Enter Your E-mail Address "
        setVal={setEmail}
        val={email}
      />
      <InputTextField
        label="School Name"

        placeholder="Enter School Name "
        setVal={setSchool}
        val={school}
      />
      <InputTextField
        label="Hobbies"
        multiline={true}
        placeholder="Enter Hobbies "
        setVal={setHobbies}
        val={hobbies}
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
