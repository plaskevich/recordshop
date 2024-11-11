import { useState } from 'react';
import { IoCaretDown, IoCog, IoLogOut } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { setUser } from '@/redux/userSlice';
import { colors, font } from '@/styles/theme';

const Wrap = styled.div`
  padding: 0.5rem 0;
`;

const LogoButton = styled.button<{ open: boolean }>`
  background-color: transparent;
  color: ${(props) => (props.open ? colors.grey[100] : colors.grey[300])};
  font-family: ${font};
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${colors.grey[100]};
  }
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 160px;
  height: 80px;
  background-color: ${colors.grey[100]};
  border-radius: 15px;
  border: 1px solid ${colors.grey[500]};
  padding: 6px;
`;

const MenuItem = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0.375rem 0.625rem;
  color: ${colors.grey[900]};
  font-family: ${font};
  font-size: 1rem;
  gap: 0.5rem;
  &:hover {
    color: ${colors.grey[100]};
    background-color: ${colors.grey[900]};
  }
`;

export default function LogoMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    dispatch(setUser({ token: null }));
    navigate('/');
  };

  return (
    <Wrap>
      <LogoButton open={open} onClick={() => setOpen(!open)}>
        RecordShop
        <IoCaretDown size={18} />
      </LogoButton>
      {open && (
        <Menu>
          <MenuItem>
            <IoCog size="22px" />
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <IoLogOut size="22px" />
            Logout
          </MenuItem>
        </Menu>
      )}
    </Wrap>
  );
}
