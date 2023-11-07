import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import PackageDetails from '../components/Package_Details';

test('Should render PackageDetails component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <PackageDetails />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
