import { IoImage, IoTrash } from 'react-icons/io5';
import styled from 'styled-components';

import { colors, font } from '@/styles/theme';

const ButtonsWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 8px;
  bottom: -210px;
`;

const Upload = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${colors.grey[700]};
  color: ${colors.grey[100]};
  font-size: 14px;
  font-family: ${font};
  border-radius: 5px;
  padding: 6px 10px;
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${colors.grey[700]};
  color: ${colors.grey[100]};
  font-size: 14px;
  font-family: ${font};
  border-radius: 5px;
  padding: 6px 10px;
`;

type ArtworkButtonsProps = {
  imageUploaded: boolean;
  removeImage: () => void;
};

export default function ArtworkButtons({ imageUploaded, removeImage }: ArtworkButtonsProps) {
  return (
    <ButtonsWrap>
      {imageUploaded ? (
        <Button onClick={removeImage}>
          <IoTrash size={16} /> Remove
        </Button>
      ) : (
        <Upload htmlFor="upload">
          <IoImage size={16} />
          Add artwork
        </Upload>
      )}
    </ButtonsWrap>
  );
}
