import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;

  button {
    height: 30px;
    border: none;
    border-radius: 6px;
      font-size: 16px;
    font-weight: 700;
  
  }

  button:is(:hover, :focus) {
    background-color: gray;
  }
`;