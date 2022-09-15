import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  height: 100vh;

  min-height: 1000px;
`;

export const Search = styled.div`
  display: flex;
  position: absolute;
`;

export const S1 = styled.div`
  position: absolute;
  color: ${({ isLocal1 }) => (isLocal1 ? "red" : "gray")};
`;

export const S2 = styled.div`
  color: ${({ isLocal2 }) => (isLocal2 ? "red" : "gray")};
  position: absolute;
`;

export const S4 = styled.div`
  color: ${({ isLocal4 }) => (isLocal4 ? "red" : "gray")};
  position: absolute;
`;
export const S5 = styled.div`
  color: ${({ isLocal5 }) => (isLocal5 ? "red" : "gray")};
  position: absolute;
`;



export const Info = styled.div`

`;
