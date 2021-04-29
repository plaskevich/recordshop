import AppHeader from './AppHeader/AppHeader';
import LandingHeader from './LandingHeader/LandingHeader';
import { isAuthenticated } from '../../service';

export default function Header() {
  return <>{isAuthenticated() ? <AppHeader /> : <LandingHeader />}</>;
}
