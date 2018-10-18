import React from 'react'
import renderer from 'react-test-renderer'

import { CompleteButton } from '../CompleteButton'

it('renders without crashing', () => {
  const rendered = renderer.create(<CompleteButton />).toJSON()
  expect(rendered).toBeTruthy()
})
