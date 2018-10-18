import React from 'react'
import renderer from 'react-test-renderer'

import { EditGoal } from '../EditGoal'

it('renders without crashing', () => {
  const rendered = renderer.create(<EditGoal />).toJSON()
  expect(rendered).toBeTruthy()
})
