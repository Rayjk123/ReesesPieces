import React from "react";
import styled from "styled-components";

const InputSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Input = styled.input`
  margin-left: 8px;
  border-radius: 20px;
`;

export interface TextInputProps {
  value: string;
  onChange: (value: any) => void;
}

export const TextInput = ({ value, onChange }: TextInputProps) => {
  return (
    <InputSection>
      <Input type={"text"} value={value} onChange={onChange} />
    </InputSection>
  );
};
