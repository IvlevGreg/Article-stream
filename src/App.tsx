import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import classes from './app.module.scss';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { MainPage } from './pages/MainPage/MainPage';

export function App() {
  return (
    <div>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>

      <Routes>
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </div>
  );
}
