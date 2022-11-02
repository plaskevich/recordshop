import spinner from './spinner.png';
import styled from 'styled-components';

const Spinner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    width: 200px;
    animation: spin 1s linear infinite;
  }
`;

export function LoadingSpinner() {
  return (
    <Spinner>
      <img src={spinner} alt='loader' />
    </Spinner>
  );
}
