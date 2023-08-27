import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    input {
      height:25px;
      border-radius: 6px;
      font-size: 18px;
    }
  }

  button {
    height: 30px;
    margin-block: 20px;
    border-radius: 6px;
    border: none;
    font-size: 18px;
    font-weight: 700;
   

    &:hover,
    &:focus {
      background-color: gray;
    }
  }
`;