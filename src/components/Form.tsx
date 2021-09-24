import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "./reusable/TextInput";

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
`;

const FormRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const FormSubmit = styled.button``;

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
        <FormSubmit>Generate</FormSubmit>
        {/*<FormRow>*/}
        {/*  <label>hidweknfkaelrgneagnrek</label>*/}
        {/*  <TextInput value={address} onChange={(value) => setAddress(value)} />*/}
        {/*</FormRow>*/}
      </FormRowContainer>
    </FormContainer>
  );
};
