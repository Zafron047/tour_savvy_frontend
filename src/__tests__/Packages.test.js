import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Packages from '../components/Packages';

test('Should render Packages component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Packages />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
