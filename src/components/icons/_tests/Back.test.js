import React from 'react'
import renderer from 'react-test-renderer'

import { Back } from '../Back'

it('renders without crashing', () => {
  const rendered = renderer.create(<Back />).toJSON()
  expect(rendered).toBeTruthy()
})
