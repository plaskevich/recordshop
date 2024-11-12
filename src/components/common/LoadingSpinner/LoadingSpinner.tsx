import styled from 'styled-components';

import spinner from './spinner.png';

const Spinner = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 200px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 1s linear infinite;
`;

export function LoadingSpinner() {
  return (
    <Spinner>
      <Image src={spinner} alt="loader" />
    </Spinner>
  );
}
