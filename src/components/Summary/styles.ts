import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem;
  margin-top: -6.5rem;

  div {
    background: var(--shape);
    color: var(--text-title);

    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1rem;
  }

  strong {
    display: block;

    font-size: 36px;
    margin-top: 1rem;
    font-weight: 500;
    line-height: 3rem;
  }

  .total {
    background: var(--green);
    color: var(--shape);
  }
`;