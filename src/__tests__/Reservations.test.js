import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Reservations from '../components/Reservations';

test('Should render Reservations component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
