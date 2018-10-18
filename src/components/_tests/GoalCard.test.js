import React from 'react'
import renderer from 'react-test-renderer'

import { GoalCard } from '../GoalCard'

it('renders without crashing', () => {
  const rendered = renderer.create(<GoalCard />).toJSON()
  expect(rendered).toBeTruthy()
})
