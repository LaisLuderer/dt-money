import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8.25rem; /*superior, laterais, inferior*/ 

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: var(--blue-light);
    color: var(--shape);
    outline: none;

    border: 0;
    border-radius: 0.3rem;

    padding: 0 2rem; 
    height: 3rem;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;