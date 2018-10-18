import React from 'react'
import renderer from 'react-test-renderer'

import { New } from '../New'

it('renders without crashing', () => {
  const rendered = renderer.create(<New />).toJSON()
  expect(rendered).toBeTruthy()
})
