import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddReservation from '../components/AddReservation';

test('Should render AddReservation component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <AddReservation />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
