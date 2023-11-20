import styled from 'styled-components';

export const Container = styled.div`
  background: #bfcdd229;
  height: 100vh;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  > h1 {
    font-weight: 700;
    font-size: 3.5rem;
  }
  .refresh {
    background-color: #fff;
    border: 1px solid lightgray;
    padding: 8px 3px;
    display: flex;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    > svg {
      margin-inline: 5px;
    }
  }
`;
