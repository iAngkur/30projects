import React from "react";
import styled from "styled-components";

const SplitScreenLayout = ({ children }) => {
  const Container = styled.div`
    display: flex;
  `;

  const Pane = styled.div`
    flex: 1;
  `;

  const [left, right] = children;
  return (
    <Container>
      <Pane>{left}</Pane>
      <Pane>{right}</Pane>
    </Container>
  );
};

function LeftHandComponent({ name }) {
  return <div style={{ backgroundColor: "red" }}>{name}</div>;
}

function RightHandComponent({ message }) {
  return <div style={{ backgroundColor: "green" }}>{message}</div>;
}

function SplitScreen() {
  return (
    <SplitScreenLayout>
      <LeftHandComponent name="Angkur" />
      <RightHandComponent message="Hello from Right Hand Component" />
    </SplitScreenLayout>
  );
}

export default SplitScreen;
