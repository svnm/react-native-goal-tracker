import React from 'react'
import renderer from 'react-test-renderer'

import { EditButton } from '../EditButton'

it('renders without crashing', () => {
  const rendered = renderer.create(<EditButton />).toJSON()
  expect(rendered).toBeTruthy()
})
