import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #2a2a2a;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    background-color: #00a2e8;
    padding: 20px;
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

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;

    .info-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      max-width: 1200px;

      .info-card {
        background-color: #f5f5f5;
        border-radius: 5px;
        padding: 20px;
        margin: 10px;
        text-align: center;
        flex: 1;
        max-width: 250px;
        color: black;

        &.blue { background-color: #00a2e8; }
        &.yellow { background-color: #ffd700; }
        &.green { background-color: #32cd32; }
        &.red { background-color: #ff6347; }

        h3 {
          font-size: 2em;
          margin: 0;
        }

        p {
          font-size: 1.2em;
        }
      }
    }

    .notes-section {
      width: 100%;
      max-width: 600px;
      background-color: #00c5ca;
      border-radius: 5px;
      padding: 20px;
      margin: 10px;

      h3 {
        margin-top: 0;
      }

      textarea {
        width: 100%;
        height: 100px;
        border-radius: 5px;
        border: none;
        padding: 10px;
      }
    }
  }

  footer {
    width: 100%;
    padding: 20px;
    background-color: #f5f5f5;
    color: black;
    text-align: center;

    h3 {
      margin-top: 0;
    }

    .shortcuts {
      display: flex;
      justify-content: space-around;

      button {
        margin: 5px;
      }
    }
  }
`;
