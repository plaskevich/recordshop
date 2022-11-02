import {
  Card,
  Header,
  Form,
  FormGroup,
  FormGroupShort,
  Label,
  Input,
  Select,
  Artwork,
  LeftSection,
  RightSection,
  Container,
  Footer,
  SaveButton,
  CancelButton,
} from './RecordDetailsStyles';

export default function RecordDetails(props) {
  const { recordData } = props;

  console.log(recordData);
  return (
    <Card>
      <Header>{recordData.title}</Header>
    </Card>
  );
}
