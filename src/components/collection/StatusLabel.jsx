import styled from 'styled-components';
import * as colors from 'styles/colors';

export const Label = styled.div`
  background-color: ${(props) =>
    props.status === 'sold'
      ? colors.yellow
      : props.status === 'inStock'
      ? colors.green
      : '#FFF'};
  text-align: center;
  padding: 5px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: bold;
  color: #000;
`;

export default function StatusLabel(props) {
  const { status } = props;

  return (
    <>
      <Label status={status}>
        {status === 'sold' && 'SOLD'}
        {status === 'inStock' && 'IN STOCK'}
      </Label>
    </>
  );
}
