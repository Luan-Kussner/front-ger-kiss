import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f0f2f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

export const Label = styled.h1`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
`;

export const Content = styled.div`
  width: 95%;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  flex-basis: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }

  label {
    font-size: 14px;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333; /* Cor escura */
  }

  input, select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    background-color: #fff;
  }
`;

export const LabelError = styled.span`
  color: red;
  margin-bottom: 1rem;
  display: block;
`;

export const LabelSignin = styled.div`
  margin-top: 20px;
  color: #666;
`;

export const Strong = styled.strong`
  font-weight: bold;
`;
