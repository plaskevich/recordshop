import {
  Title,
  Artist,
  InfoSection,
  InfoSectionColumn,
  Label,
  Info,
} from './RecordDetailsStyles';
import {
  Card,
  Artwork,
  CardContainer,
  FillButton,
  LinkButton,
  LeftSection,
  RightSection,
  Footer,
} from 'styles/styledComponents';
import { useNavigate } from 'react-router-dom';
import { getCondition, getDate, getStatus } from 'utils';

export default function RecordDetails(props) {
  const {
    id,
    title,
    artist,
    year,
    genre,
    label,
    condition,
    status,
    price,
    date_added,
    img_uri,
  } = props.recordData;

  const navigate = useNavigate();

  const handleEditButton = () => {
    navigate(`edit/${id}`);
  };

  return (
    <Card>
      <CardContainer>
        <LeftSection>
          <Artwork imgUrl={img_uri} />
        </LeftSection>
        <RightSection>
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
          <InfoSection>
            <InfoSectionColumn>
              <Label>Released:</Label>
              <Label>Genre:</Label>
              <Label>Label:</Label>
              <Label>Condition:</Label>
              <Label>Status:</Label>
              <Label>Price:</Label>
              <Label>Date Added:</Label>
            </InfoSectionColumn>
            <InfoSectionColumn>
              <Info>{year}</Info>
              <Info>{genre}</Info>
              <Info>{label}</Info>
              <Info>{getCondition(condition)}</Info>
              <Info>{getStatus(status)}</Info>
              <Info>{price || '-'}</Info>
              <Info>{getDate(date_added)}</Info>
            </InfoSectionColumn>
          </InfoSection>
        </RightSection>
      </CardContainer>
      <Footer>
        <LinkButton to='/'>Close</LinkButton>
        <FillButton onClick={handleEditButton}>Edit</FillButton>
      </Footer>
    </Card>
  );
}
