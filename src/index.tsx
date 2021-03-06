import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import App from '@/components/App';

ReactDOM.render(<App />, document.getElementById('root'));

//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
