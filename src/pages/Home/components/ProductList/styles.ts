import styled from 'styled-components';

export const ProductItemContainer = styled.li`
  width: 256px;
  height: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    height: 128px;
    width: 120px;
    margin-top: -2.5rem;
  }

  .badge-features {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 0.75rem;

    span {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      padding: 0.25rem 0.5rem;
      font-weight: 700;
      font-size: 0.625rem;
      border-radius: 8px;
    }
  }

  .name {
    margin-top: 1rem;
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }

  footer {
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  footer span {
    margin-right: -1rem;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  footer strong {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Ballo 2', sans-serif;
    font-size: 1.35rem;
    font-weight: 800;
  }

  .buy-button {
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['white']};
    margin-left: -0.5rem;
    padding: 0.3rem;
    border-radius: 6px;

    display: flex;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: ${(props) => props.theme['purple']};
    }
  }
`;
