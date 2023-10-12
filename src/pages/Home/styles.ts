import styled from 'styled-components';

export const LandingContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;

  img {
    width: 380px;
    height: 276px;
    flex-shrink: 0;
  }

  @media (min-width: 992px) {
    & {
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      height: 544px;
    }

    img {
       width: 380px;
       height: 276px;
      animation: fadeIn 2s;
    }
  }

  section {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4.125rem;

    .description {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-family: 'Baloo2', sans-serif;
        font-weight: 800;
        line-height: 130%;
        font-size: 3rem;
        align-self: stretch;

        color: ${(props) => props.theme['base-title']};
      }

      span {
        font-size: 1.25rem;
        line-height: 130%;
        text-align: center;
      }
    }

    .badges {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

     @media (min-width: 992px) {
      .description {
        h1,
        span {
          text-align: left;
        }
      }

      .badges {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        flex-wrap: wrap;
      }
  }
`;

export const BadgesBase = styled.span`
  display: flex;
  align-items: center;
  line-height: 130%;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.5rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme['white']};
  }
`;

export const BadgeCart = styled(BadgesBase)`
  svg {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const BadgePackage = styled(BadgesBase)`
  svg {
    background-color: ${(props) => props.theme['base-text']};
  }
`;

export const BadgeTimer = styled(BadgesBase)`
  svg {
    background-color: ${(props) => props.theme['yellow']};
  }
`;

export const BadgeCoffe = styled(BadgesBase)`
  svg {
    background-color: ${(props) => props.theme['purple']};
  }
`;

export const StoreContainer = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  row-gap: 3.25rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
    padding-bottom: 2rem;
  }

   @media (min-width: 992px) {
    ul {
      justify-content: flex-start;
    
`;
