import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "./components/reusable/TextInput";
import heroImage from "./assets/hero-image.jpg";
import background from "./assets/background.jpg";
import { NavigationBar } from "./components/NavigationBar";
import { Form } from "./components/Form";

const MainContainer = styled.div``;

const HeroImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

function App() {
  const [address, setAddress] = useState("");

  return (
    <MainContainer>
      <NavigationBar />
      <HeroImageContainer>
        <HeroImage src={heroImage} alt={"hero image"} />
      </HeroImageContainer>
      <Form />
      <HeroImage src={background} alt={"background image"} />
    </MainContainer>
  );
}

export default App;
