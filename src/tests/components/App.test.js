import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import App from '../../components/App';

Enzyme.configure({ adapter: new Adapter() });

const app = () => shallow(<App />);

describe('App component', () => {
  let component;

  beforeEach(() => {
    component = app();
  });

  it('Should render', () => {
    const element = component.find('.container-fluid');
    expect(element.length).toEqual(1);
  });
});
