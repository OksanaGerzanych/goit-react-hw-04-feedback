import styled from 'styled-components';

export const Feedback = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
export const ButtonFeedback = styled.button`
  padding: 10px 23px;
  margin: 0;
  text-transform: capitalize;
  width: 150px;
  font-size: 20px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  background-color: #C3C1C1;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    background-color: #00CCCC;
  }
`;
