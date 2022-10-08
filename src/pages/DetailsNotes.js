import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Description from "../components/reusable/Description";
import SubTitle from "../components/reusable/SubTitle";
import Title from "../components/reusable/Title";
import { getMyValue } from "../data";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function DetailsNotes() {
  const { editNotesData } = useSelector((state) => state.notesReducers);

  return (
    <Main>
      <Container>
        <h1>Student Profile: </h1>
        <br />
        <StudentInfo>
          <div style={{ width: "50%" }}>
            <StudentDetails>Student Name: </StudentDetails>
          </div>
          <div style={{ width: "80%" }}>
            <Title>{capitalizeFirstLetter(editNotesData.todo)} </Title>
          </div>
        </StudentInfo>
        <br />
        <StudentInfo>
          <div style={{ width: "50%" }}>
            <StudentDetails>Student Father Name: </StudentDetails>
          </div>

          <div style={{ width: "80%" }}>
            <Description>
            {getMyValue(editNotesData.fatherName)}
              
              </Description>
          </div>
        </StudentInfo>
        <br />

        <StudentInfo>
          <div style={{ width: "50%" }}>
            <StudentDetails>Student Mother Name: </StudentDetails>
          </div>
          <div style={{ width: "80%" }}>
            <Description>
            {getMyValue(editNotesData.motherName)}
              
              </Description>
          </div>
        </StudentInfo>
        <br />

        <StudentInfo>
          <div style={{ width: "50%" }}>
            <StudentDetails>Student Address: </StudentDetails>
          </div>
          <div style={{ width: "80%" }}>
            <Description>
            {getMyValue(editNotesData.address)}
              
              </Description>
          </div>
        </StudentInfo>
        <br />
        <StudentInfo>
          <div style={{ width: "50%" }}>
            <StudentDetails>Student E-Mail Id: </StudentDetails>
          </div>
          <div style={{ width: "80%" }}>
            <Description>
            {getMyValue(editNotesData.email)}
              
              </Description>
          </div>
        </StudentInfo>
        <br />
        <StudentInfo>
          <div style={{ width: "50%" }}>
            <StudentDetails>Student School : </StudentDetails>
          </div>
          <div style={{ width: "80%" }}>
            <Description>
            {getMyValue(editNotesData.school)}
              
              </Description>
          </div>
        </StudentInfo>
        <br />

        <StudentInfo>
          <div style={{ width: "50%" }}>
            <StudentDetails>Student Hobbies : </StudentDetails>
          </div>
          <div style={{ width: "80%" }}>
            <Description>
            {getMyValue(editNotesData.hobbies)}

              </Description>
          </div>
        </StudentInfo>

        <br />
        <SubTitle>Created At :{editNotesData.createdAt}</SubTitle>
        <SubTitle>Updated At :{editNotesData.updatedAt}</SubTitle>
        <br />
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid red;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StudentInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: flex-start;
`;
const StudentDetails = styled.p`
  padding-right: 5px;
`;
