import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import PackageForm from '../components/PackageForm';

test('Should render PackageForm component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <PackageForm />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
