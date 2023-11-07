import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SideNav from '../components/Nav';

test('Should render SideNav component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <SideNav />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
