import React from 'react'
import { shallow } from 'enzyme'

import App from '../../../client/components/App'
import Main from '../../../client/components/Main'
import '../setup-dom'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('<App />', () => {
  it('renders one <Main /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Main)).to.have.length(1);
  });
});