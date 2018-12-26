import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import './assets/css/index.css';
import App from './components';

library.add(faStroopwafel);
ReactDOM.render(<App />, document.getElementById('root'));

if(module.hot) {
  module.hot.accept('./components', () => {
    const NextApp = require('./components').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}
