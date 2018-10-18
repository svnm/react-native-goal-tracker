import React from 'react'
import renderer from 'react-test-renderer'

import { IncompleteButton } from '../IncompleteButton'

it('renders without crashing', () => {
  const rendered = renderer.create(<IncompleteButton />).toJSON()
  expect(rendered).toBeTruthy()
})
