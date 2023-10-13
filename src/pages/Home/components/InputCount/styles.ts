import styled from 'styled-components';

export const InputCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 32px;

  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;

  button {
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }

  input {
    width: 1.125rem;
    background: transparent;
    border: none;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
`;
