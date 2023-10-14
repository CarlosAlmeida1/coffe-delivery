import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 2.625rem;
  border: none;
  border-radius: 4px;

  background: ${(props) => props.theme['base-input']};
  box-shadow: 0 0 0 1px ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    border: none;
    background: transparent;
    height: 100%;
    width: 100%;
    padding: 0.75rem;

    font-size: 0.875rem;

    &::placeholder {
      opacity: 0.8;
    }
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    margin-right: 0.75rem;
    line-height: 130%;
  }

  input,
  span {
    color: ${(props) => props.theme['base-label']};
  }
`;
