import styled from 'styled-components';

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['background']};

  display: flex;
  flex-direction: column;
  max-width: 72rem;
  margin: auto;
  padding: 0 1rem;
`;
