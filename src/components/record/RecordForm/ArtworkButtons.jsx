import styled from 'styled-components';
import { colors, font } from 'styles/theme';
import { IoImage, IoLink, IoTrash } from 'react-icons/io5';

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
  background-color: ${colors.grey[800]};
  color: ${colors.grey[300]};
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
  background-color: ${colors.grey[800]};
  color: ${colors.grey[300]};
  font-size: 14px;
  font-family: ${font};
  border-radius: 5px;
  padding: 6px 10px;
`;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${colors.grey[800]};
  color: ${colors.grey[300]};
  font-size: 16px;
  font-family: ${font};
  border-radius: 5px;
  padding: 6px;
`;

export default function ArtworkButtons(props) {
  const { imageUploaded, removeImage } = props;
  return (
    <ButtonsWrap>
      {imageUploaded ? (
        <Button onClick={removeImage}>
          <IoTrash size={16} /> Remove
        </Button>
      ) : (
        <>
          <input id='upload' type='file' multiple accept='image/*' hidden />
          <Upload htmlFor='upload'>
            <IoImage size={16} />
            Upload artwork
          </Upload>
          <LinkButton>
            <IoLink />
          </LinkButton>
        </>
      )}
    </ButtonsWrap>
  );
}
