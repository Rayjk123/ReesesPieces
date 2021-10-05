import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "./reusable/TextInput";
import { generateData } from "../server/DataService";

const FormContainer = styled.div`
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`;

const FormRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const FormSubmit = styled.a`
  margin: 16px;
  background-color: transparent;
  padding: 8px 0 8px 0;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #272522;
  text-align: center;
`;

export const Form = () => {
  const [address, setAddress] = useState("");

  return (
    <FormContainer>
      <h1>Generate Address 2 Form</h1>
      <p>
        This is used to generate address 2's for no purpose other than being
        bored &#128064;
      </p>
      <FormRowContainer>
        <FormRow>
          <label>Primary Address</label>
          <TextInput value={address} onChange={(value) => setAddress(value)} />
        </FormRow>
        <FormSubmit onClick={() => generateData({ address })}>
          Generate
        </FormSubmit>
        {/*<FormRow>*/}
        {/*  <label>hidweknfkaelrgneagnrek</label>*/}
        {/*  <TextInput value={address} onChange={(value) => setAddress(value)} />*/}
        {/*</FormRow>*/}
      </FormRowContainer>
    </FormContainer>
  );
};
