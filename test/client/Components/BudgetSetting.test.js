import React from 'react'
import { shallow, mount } from 'enzyme'

import BudgetSetting from '../../../client/components/BudgetSetting'
import './setup-dom'


// import configureStore from  'redux-mock-store'

// const mockStore = configureStore([])

// jest.mock('../../client/actions/greetings.js', () => ({
//   getGreetings: () => ({
//     type: 'FAKE_ACTION'
//   })
// }))

test('Text renders on BudgetSetting', () => {
  const wrapper = shallow(<BudgetSetting />)
  expect(wrapper.find('label').text()).toBe ('Set your budget $')
})

//need to check with Harrison/Kelly how to do further enzyme testing