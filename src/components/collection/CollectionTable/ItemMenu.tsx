import { useState } from 'react';
import { IoCreate, IoEllipsisHorizontal, IoTrash } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { colors, font } from '@/styles/theme';

const MenuButton = styled.button<{ open: boolean }>`
  background-color: transparent;
  display: flex;
  color: ${colors.grey[100]};
  padding: 4px;
  transition: all 0.1s ease-in;
  transform: ${(props) => (props.open ? 'scale(1.3)' : '')};
  &:hover {
    transform: scale(1.3);
  }
`;
const Menu = styled.div<{ open: boolean }>`
  position: absolute;
  right: 60px;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.grey[100]};
  border-radius: 15px;
  border: 1px solid ${colors.grey[500]};
  padding: 6px;
`;

const MenuItem = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0.375rem 0.625rem;
  color: ${colors.grey[900]};
  font-family: ${font};
  font-size: 1rem;
  gap: 0.3rem;
  &:hover {
    color: ${colors.grey[100]};
    background-color: ${colors.grey[900]};
  }
`;

type ItemMenuProps = {
  id: string;
  removeRecord: (id: string) => void;
};

export default function ItemMenu({ id, removeRecord }: ItemMenuProps) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleRemoveRecord = () => {
    removeRecord(id);
  };

  const handleOpenMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(!open);
  };
  return (
    <>
      <MenuButton open={open} onClick={handleOpenMenu} data-test-id="menu-button">
        <IoEllipsisHorizontal size="18px" />
      </MenuButton>
      <Menu open={open}>
        <MenuItem onClick={() => navigate(`/edit/${id}`)}>
          <IoCreate />
          Edit
        </MenuItem>
        <MenuItem onClick={handleRemoveRecord} data-test-id="remove-button">
          <IoTrash />
          Remove
        </MenuItem>
      </Menu>
    </>
  );
}
