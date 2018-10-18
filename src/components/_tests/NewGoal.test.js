import React from 'react'
import renderer from 'react-test-renderer'

import { NewGoal } from '../NewGoal'

it('renders without crashing', () => {
  const rendered = renderer.create(<NewGoal />).toJSON()
  expect(rendered).toBeTruthy()
})
