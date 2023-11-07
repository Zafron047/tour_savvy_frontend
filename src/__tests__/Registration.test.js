import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Registration from '../components/Registration';

test('Should render Registration component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
