import React from 'react'
import { shallow, mount } from 'enzyme'

import Alert from '../../../client/components/Alert'
import './setup-dom'

test('Text renders on Alert', () => {
  const wrapper = shallow(<Alert />)
  expect(wrapper.find('p').text()).toBe ('You have gone over your budget!  You may want to remove some items.')
})