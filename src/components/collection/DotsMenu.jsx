import { IoEllipsisVertical } from 'react-icons/io5';
import { useState } from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';

const DotsButton = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px; */
  background: transparent;
  color: #fff;
  /* border-radius: 25px; */
  &:hover {
    color: ${colors.grey[300]};
  }
`;

const Menu = styled.div`
  position: absolute;
  right: 45px;
  top: 20px;
  background-color: #fff;
`;

export default function DotsMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {/* {openMenu && <Menu>Jopa</Menu>} */}

      <DotsButton onClick={() => setOpenMenu(!openMenu)}>
        <IoEllipsisVertical size={16} />
      </DotsButton>
    </>
  );
}
