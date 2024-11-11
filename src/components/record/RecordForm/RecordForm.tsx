import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Artwork,
  Card,
  CardContainer,
  FillButton,
  Header,
  LeftSection,
  LinkButton,
  RightSection,
} from '@/styles/styledComponents';
import { DiscogsRecord, Record } from '@/types';

import { DiscogsImport } from '../DiscogsImport';
import { Footer, Form, FormGroup, FormGroupShort, Input, Label, Select } from './recordFormStyles';

type RecordFormProps = {
  onSubmit: (data: Record) => void;
  recordData?: Record;
};

export default function RecordForm({ onSubmit, recordData }: RecordFormProps) {
  const { register, handleSubmit, setValue, watch } = useForm<Record>();
  const [imgUrl, setImgUrl] = useState('');

  const watchImgUrl = watch('img_uri');

  useEffect(() => {
    if (recordData) {
      onImport(recordData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordData]);

  useEffect(() => {
    setImgUrl(watchImgUrl);
  }, [watchImgUrl]);

  const onImport = (data: DiscogsRecord | Record) => {
    const recordData = {
      ...data,
      artist: Array.isArray(data.artist) ? data.artist.join(', ') : data.artist,
      label: Array.isArray(data.label) ? data.label.join(', ') : data.label,
      genre: Array.isArray(data.genre) ? data.genre.join(', ') : data.genre,
    };

    for (const [key, value] of Object.entries(recordData)) {
      setValue(key as keyof Record, value);
    }
    setImgUrl(recordData.img_uri);
  };

  return (
    <Card>
      <Header>New Record</Header>
      <CardContainer>
        <LeftSection>
          <Artwork imgUrl={imgUrl}></Artwork>
          <DiscogsImport onImport={onImport} />
        </LeftSection>
        <RightSection>
          <Form id="record-form" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input {...register('title')} type="text" required data-test-id="record-form-title" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="artist">Artist</Label>
              <Input {...register('artist')} type="text" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="label">Label</Label>
              <Input {...register('label')} type="text" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="genre">Genre</Label>
              <Input {...register('genre')} type="text" required />
            </FormGroup>
            <FormGroupShort>
              <Label htmlFor="released">Released</Label>
              <Input {...register('year')} type="text" inputMode="numeric" />
            </FormGroupShort>
            <FormGroupShort>
              <Label htmlFor="condition">Condition</Label>
              <Select {...register('condition')}>
                <option value="m">Mint (M)</option>
                <option value="nm">Near Mint (NM)</option>
                <option value="vg+">Very Good Plus (VG+)</option>
                <option value="vg">Very Good (VG)</option>
                <option value="g">Good (G)</option>
                <option value="p">Poor (P)</option>
              </Select>
            </FormGroupShort>
            <FormGroupShort>
              <Label htmlFor="price">Price</Label>
              <Input {...register('price')} type="text" inputMode="numeric" />
            </FormGroupShort>
            <FormGroupShort>
              <Label htmlFor="status">Status</Label>
              <Select {...register('status')}>
                <option value="inStock">In Stock</option>
                <option value="sold">Sold</option>
              </Select>
            </FormGroupShort>
            <FormGroup>
              <Label htmlFor="img_uri">Artwork URL</Label>
              <Input {...register('img_uri')} type="text" />
            </FormGroup>
          </Form>
        </RightSection>
      </CardContainer>
      <Footer>
        <LinkButton to="/">Cancel</LinkButton>
        <FillButton form="record-form" type="submit" data-test-id="save-button">
          Save
        </FillButton>
      </Footer>
    </Card>
  );
}
