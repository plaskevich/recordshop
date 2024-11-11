import styled from 'styled-components';

import { colors } from '@/styles/theme';
import { Status } from '@/types';
import { getStatus } from '@/utils';

export const Label = styled.div<{ status: string }>`
  background-color: ${(props) =>
    props.status === 'sold' ? colors.yellow : props.status === 'inStock' ? colors.green : colors.grey[100]};
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: bold;
  color: ${colors.black};
  width: 55px;
`;

type StatusLabelProps = {
  status: Status;
};

export default function StatusLabel({ status }: StatusLabelProps) {
  return (
    <>
      <Label status={status}>{getStatus(status)}</Label>
    </>
  );
}
