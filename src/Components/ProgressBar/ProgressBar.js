import styled from 'styled-components';

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    #ff00ff ${(props) => props.scroll},
    transparent 0
  );
  width: 100%;
  z-index: 3;
`;

export default Progress;
