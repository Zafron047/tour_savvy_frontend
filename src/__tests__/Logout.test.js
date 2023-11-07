import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Logout from '../components/Logout';

test('Should render Logout component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Logout />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
