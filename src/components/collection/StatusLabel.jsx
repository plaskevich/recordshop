import styled from 'styled-components';
import { colors } from 'styles/theme';
import { getStatus } from 'utils';

export const Label = styled.div`
  background-color: ${(props) =>
    props.status === 'sold'
      ? colors.yellow
      : props.status === 'inStock'
      ? colors.green
      : colors.grey[100]};
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: bold;
  color: ${colors.black};
  width: 55px;
`;

export default function StatusLabel(props) {
  const { status } = props;

  return (
    <>
      <Label status={status}>{getStatus(status)}</Label>
    </>
  );
}
