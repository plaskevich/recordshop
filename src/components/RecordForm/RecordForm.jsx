import './RecordForm.scoped.scss';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ADD_RECORD } from '../../graphql/mutations/record';

export default function RecordForm() {
  const [discogsID, setDiscogsID] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [label, setLabel] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [condition, setCondition] = useState('');
  const [status, setStatus] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [discogsError, setDiscogsError] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const importFromDiscogs = (id) => {
    setDiscogsError('');
    const myKey = 'RQjHhwSaMHxwGbPxJxXz';
    const mySecret = 'BIdsSStHDrPRlaWqpKiEeKTEkaHmSrwY';
    axios
      .get(
        `https://api.discogs.com/releases/${id}?key=${myKey}&secret=${mySecret}`
      )
      .then((response) => {
        setDiscogsID('');
        const data = response.data;
        let artists = [];
        let labels = [];
        setTitle(data.title);
        data.artists.forEach((e) => artists.push(e.name));
        setArtist(artists.join(' & '));
        data.labels.forEach((e) => labels.push(e.name));
        setLabel(labels.join(', '));
        setGenre(data.genres.join(', '));
        setYear(data.year);
        setImage(data.images[0].uri);
      })
      .catch(() => setDiscogsError("This release couldn't be found"));
  };

  const { handleSubmit } = useForm();

  const [addRecord] = useMutation(ADD_RECORD, {
    onCompleted() {
      history.push('/collection');
      window.location.reload();
    },
    onError(err) {
      setError(err);
    },
  });

  const submitForm = () => {
    addRecord({
      variables: {
        data: {
          title,
          artist,
          label,
          genre,
          year,
          condition,
          status,
          price,
          img_uri: image,
          notes,
        },
      },
    });
  };

  return (
    <div>
      <div className='discogs-import'>
        <h4 className='title'>Import record data from Discogs</h4>
        <div className='import-field'>
          <label>Release ID</label>
          <input
            className={discogsError && 'error-input'}
            type='text'
            onChange={(e) => setDiscogsID(e.target.value)}
          />
          <button
            className='import-btn'
            onClick={() => importFromDiscogs(discogsID)}
          >
            Import
          </button>
        </div>
        <p className='discogs-error'>{discogsError}</p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className='form'>
            <div className='form-column'>
              <div className='form-group'>
                <label htmlFor=''>Title</label>

                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Artist</label>

                <input
                  type='text'
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Label</label>

                <input
                  type='text'
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Genre</label>

                <input
                  type='text'
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Year</label>

                <input
                  type='text'
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
            <div className='form-column'>
              <div className='form-group'>
                <label htmlFor=''>Condition</label>

                <select
                  name='condition'
                  id='condition'
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                >
                  <option value='' disabled>
                    -- Select Condition --
                  </option>
                  <option value='M'>Mint</option>
                  <option value='NM'>Near Mint</option>
                  <option value='VGP'>Very Good Plus</option>
                  <option value='VG'>Very Good</option>
                  <option value='G'>Good</option>
                  <option value='P'>Poor</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor=''>Status</label>

                <select
                  name='status'
                  id='status'
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value='' disabled>
                    -- Select Status --
                  </option>
                  <option value='inStock'>In Stock</option>
                  <option value='sold'>Sold</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor=''>Price</label>

                <input
                  type='text'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Image</label>

                <input
                  type='text'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Notes</label>

                <input
                  type='text'
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='save-btn-wrap'>
            <button type='submit' className='save-btn'>
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
