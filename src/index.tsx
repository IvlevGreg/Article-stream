import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import './styles/index.scss';
import ThemeProvider from './theme/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById('root')
);
