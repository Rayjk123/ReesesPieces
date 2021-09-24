import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #272522;
  color: white;
`;

const NavigationLink = styled.a`
  color: white;
  margin-left: 32px;
  text-decoration: none;
  font-size: 24px;
  padding: 16px;
`;

const NavigationMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationLogo = styled.span`
  margin-left: 16px;
  flex: 1;
  font-size: 24px;
  font-weight: bold;
`;

const NavigationEmptyRight = styled.span`
  flex: 1;
`;

export const NavigationBar = () => {
  return (
    <NavigationContainer>
      <NavigationLogo>{"</>"}</NavigationLogo>
      <NavigationMenu>
        <NavigationLink href={"#Home"}>Home</NavigationLink>
        <NavigationLink href={"#About"}>About</NavigationLink>
        <NavigationLink href={"#Contact"}>Contact</NavigationLink>
      </NavigationMenu>
      <NavigationEmptyRight />
    </NavigationContainer>
  );
};
