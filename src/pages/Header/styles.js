import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #2a2a2a;
  color: white;
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    background-color: #00a2e8;
    padding: 10px;
    text-align: center;
    width: 100%;

    h1 {
      margin: 0;
    }

    h2 {
      margin: 0;
      font-weight: 300;
    }
  }
`;
