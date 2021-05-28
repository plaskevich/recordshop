import './RecordForm.scoped.scss';

export default function RecordForm() {
  return (
    <div>
      <div className='discogs-import'>
        <h4 className='title'>Import record data from Discogs</h4>
        <div className='import-field'>
          <label>Release ID</label>
          <input type='text' />
          <button className='import-btn'>import</button>
        </div>
        <form>
          <div className='form-column'>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Title</label>
              </span>
              <input type='text' />
            </div>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Artist</label>
              </span>
              <input type='text' />
            </div>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Label</label>
              </span>
              <input type='text' />
            </div>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Genre</label>
              </span>
              <input type='text' />
            </div>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Year</label>
              </span>
              <input type='text' />
            </div>
          </div>
          <div className='form-column'>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Condition</label>
              </span>
              <input type='text' />
            </div>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Status</label>
              </span>
              <input type='text' />
            </div>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Price</label>
              </span>
              <input type='text' />
            </div>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Image</label>
              </span>
              <input type='text' />
            </div>
            <div className='form-group'>
              <span className='label-wrap'>
                <label htmlFor=''>Notes</label>
              </span>
              <input type='text' />
            </div>
            <button type='submit' className='save-btn'>
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
