import type { NextPage } from "next";
import styled from "@emotion/styled";

const Home: NextPage = () => {
  return (
    <GridContainer>
      <Button>New Project Setting</Button>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  min-height: 100vh;
  justify-items: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default Home;
