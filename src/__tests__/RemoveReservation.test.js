import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RemoveReservation from '../components/RemoveReservation';

test('Should render RemoveReservation component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <RemoveReservation />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
