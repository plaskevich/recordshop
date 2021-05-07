import './AppHeader.scoped.scss';
import { IoPerson, IoCog } from 'react-icons/io5';

export default function AppHeader() {
  return (
    <header>
      <div className='shop-name'>MyShop</div>
      <div className='page-title'>Collection</div>
      <div className='actions'>
        <div className='action-button'>
          <IoPerson />
        </div>
        <div className='action-button'>
          <IoCog />
        </div>
      </div>
    </header>
  );
}
